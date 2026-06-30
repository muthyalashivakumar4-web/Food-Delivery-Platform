package com.subtle.foodapp.backend.service;

import com.subtle.foodapp.backend.dto.AuthResponse;
import com.subtle.foodapp.backend.dto.LoginRequest;
import com.subtle.foodapp.backend.dto.RegisterRequest;

import com.subtle.foodapp.backend.entity.User;

import com.subtle.foodapp.backend.repository.UserRepository;

import com.subtle.foodapp.backend.security.JwtUtil;

import lombok.RequiredArgsConstructor;

import org.springframework.security.crypto.password.PasswordEncoder;

import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;

    private final PasswordEncoder passwordEncoder;

    private final JwtUtil jwtUtil;

    // =========================
    // REGISTER
    // =========================

    public String register(
            RegisterRequest request) {

        boolean exists =
                userRepository.existsByEmail(
                        request.getEmail()
                );

        if (exists) {

            throw new RuntimeException(
                    "Email already exists"
            );
        }

        User user = new User();

        user.setName(
                request.getName()
        );

        user.setEmail(
                request.getEmail()
        );

        user.setPassword(
                passwordEncoder.encode(
                        request.getPassword()
                )
        );

        user.setRole(
                request.getRole()
        );

        userRepository.save(user);

        return "User registered successfully";
    }

    // =========================
    // LOGIN
    // =========================

    public AuthResponse login(
            LoginRequest request) {

        User user =
                userRepository.findByEmail(
                                request.getEmail()
                        )
                        .orElseThrow(() ->
                                new RuntimeException(
                                        "User not found"
                                )
                        );

        boolean matches =
                passwordEncoder.matches(
                        request.getPassword(),
                        user.getPassword()
                );

        if (!matches) {

            throw new RuntimeException(
                    "Invalid credentials"
            );
        }

        String token =
                jwtUtil.generateToken(
                        user.getEmail()
                );

        return new AuthResponse(

                token,

                user.getRole()
        );
    }
}