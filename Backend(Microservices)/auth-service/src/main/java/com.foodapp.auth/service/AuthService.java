package com.foodapp.auth.service;

import com.foodapp.auth.dto.request.LoginRequest;
import com.foodapp.auth.dto.request.RegisterRequest;
import com.foodapp.auth.dto.response.AuthResponse;

public interface AuthService {

    AuthResponse register(
            RegisterRequest request);

    AuthResponse login(
            LoginRequest request);
}