package com.foodapp.auth.service;

import com.foodapp.auth.entity.RefreshToken;
import com.foodapp.auth.entity.User;

public interface RefreshTokenService {

    RefreshToken createRefreshToken(
            User user);

    RefreshToken verifyToken(
            String token);
}