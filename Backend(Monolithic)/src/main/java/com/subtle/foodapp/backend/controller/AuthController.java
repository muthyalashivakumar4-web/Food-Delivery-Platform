package com.subtle.foodapp.backend.controller;

import com.subtle.foodapp.backend.dto.AuthResponse;
import com.subtle.foodapp.backend.dto.LoginRequest;
import com.subtle.foodapp.backend.dto.RegisterRequest;

import com.subtle.foodapp.backend.service.AuthService;

import lombok.RequiredArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService service;

    // =========================
    // REGISTER
    // =========================

    @PostMapping("/register")
    public ResponseEntity<?> register(
            @RequestBody RegisterRequest request) {

        String response =
                service.register(request);

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(response);
    }

    // =========================
    // LOGIN
    // =========================

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(
            @RequestBody LoginRequest request) {

        AuthResponse response =
                service.login(request);

        return ResponseEntity.ok(
                response
        );
    }
}