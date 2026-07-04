package com.foodapp.auth.service.impl;

import com.foodapp.auth.dto.request.LoginRequest;
import com.foodapp.auth.dto.request.RegisterRequest;
import com.foodapp.auth.dto.response.AuthResponse;
import com.foodapp.auth.entity.User;
import com.foodapp.auth.repository.UserRepository;
import com.foodapp.auth.security.JwtUtil;
import com.foodapp.auth.service.AuthService;
import com.foodapp.auth.service.RefreshTokenService;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepository;

    private final PasswordEncoder passwordEncoder;

    private final JwtUtil jwtUtil;

    private final RefreshTokenService refreshTokenService;

    public AuthServiceImpl(
            UserRepository userRepository,
            PasswordEncoder passwordEncoder,
            JwtUtil jwtUtil,
            RefreshTokenService refreshTokenService) {

        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtUtil = jwtUtil;
        this.refreshTokenService = refreshTokenService;
    }

    @Override
    public AuthResponse register(RegisterRequest request) {

        if (userRepository.existsByEmail(request.getEmail())) {

            throw new RuntimeException("Email Already Exists");

        }

        User user = new User();

        user.setFullName(request.getFullName());

        user.setEmail(request.getEmail());

        user.setPassword(
                passwordEncoder.encode(
                        request.getPassword()
                )
        );

        user.setRole(request.getRole());

        User savedUser =
                userRepository.save(user);

        String accessToken =
                jwtUtil.generateToken(
                        savedUser.getEmail(),
                        savedUser.getRole()
                );

        String refreshToken =
                refreshTokenService
                        .createRefreshToken(savedUser)
                        .getToken();

        return new AuthResponse(

                savedUser.getId(),

                savedUser.getEmail(),

                savedUser.getRole().name(),

                accessToken,

                refreshToken

        );

    }

    @Override
    public AuthResponse login(LoginRequest request) {

        User user =
                userRepository
                        .findByEmail(request.getEmail())
                        .orElseThrow(() ->
                                new RuntimeException(
                                        "Invalid Credentials"
                                ));

        if (!passwordEncoder.matches(
                request.getPassword(),
                user.getPassword())) {

            throw new RuntimeException(
                    "Invalid Credentials"
            );

        }

        String accessToken =
                jwtUtil.generateToken(
                        user.getEmail(),
                        user.getRole()
                );

        String refreshToken =
                refreshTokenService
                        .createRefreshToken(user)
                        .getToken();

        return new AuthResponse(

                user.getId(),

                user.getEmail(),

                user.getRole().name(),

                accessToken,

                refreshToken

        );

    }

}