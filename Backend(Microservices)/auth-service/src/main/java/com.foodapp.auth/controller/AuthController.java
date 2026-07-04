package com.foodapp.auth.controller;

import com.foodapp.auth.dto.request.LoginRequest;
import com.foodapp.auth.dto.request.RegisterRequest;
import com.foodapp.auth.dto.response.AuthResponse;

import com.foodapp.auth.service.AuthService;

import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(
            AuthService authService) {

        this.authService = authService;
    }

    @PostMapping("/register")
    public AuthResponse register(
            @Valid
            @RequestBody
            RegisterRequest request) {

        return authService.register(request);
    }

    @PostMapping("/login")
    public AuthResponse login(
            @RequestBody
            LoginRequest request) {

        return authService
                .login(request);
    }

    @GetMapping("/test")
    public String test() {
        return "AUTH SERVICE WORKING";
    }
}