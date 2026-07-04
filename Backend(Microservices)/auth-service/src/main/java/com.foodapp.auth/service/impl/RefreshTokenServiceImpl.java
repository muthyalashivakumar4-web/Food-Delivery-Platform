package com.foodapp.auth.service.impl;

import com.foodapp.auth.entity.RefreshToken;
import com.foodapp.auth.entity.User;
import com.foodapp.auth.repository.RefreshTokenRepository;
import com.foodapp.auth.service.RefreshTokenService;

import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.UUID;

@Service
public class RefreshTokenServiceImpl
        implements RefreshTokenService {

    private final RefreshTokenRepository
            refreshTokenRepository;

    public RefreshTokenServiceImpl(
            RefreshTokenRepository refreshTokenRepository) {

        this.refreshTokenRepository =
                refreshTokenRepository;
    }

    @Override
    public RefreshToken createRefreshToken(
            User user) {

        refreshTokenRepository
                .findByUser(user)
                .ifPresent(
                        refreshTokenRepository::delete);

        RefreshToken refreshToken =
                new RefreshToken();

        refreshToken.setUser(user);

        refreshToken.setToken(
                UUID.randomUUID().toString());

        refreshToken.setExpiryDate(
                LocalDateTime.now()
                        .plusDays(7));

        return refreshTokenRepository
                .save(refreshToken);
    }

    @Override
    public RefreshToken verifyToken(
            String token) {

        return refreshTokenRepository
                .findByToken(token)
                .orElseThrow(
                        () -> new RuntimeException(
                                "Invalid Refresh Token"));
    }
}