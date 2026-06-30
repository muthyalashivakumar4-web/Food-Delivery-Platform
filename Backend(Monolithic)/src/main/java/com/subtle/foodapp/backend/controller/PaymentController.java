package com.subtle.foodapp.backend.controller;

import com.subtle.foodapp.backend.dto.PaymentRequest;
import com.subtle.foodapp.backend.dto.PaymentVerification;

import com.subtle.foodapp.backend.service.PaymentService;

import lombok.RequiredArgsConstructor;

import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/payments")
@RequiredArgsConstructor
public class PaymentController {

    private final PaymentService service;

    // =========================
    // CREATE PAYMENT ORDER
    // =========================

    @PostMapping("/create-order")
    public ResponseEntity<?> createOrder(

            @RequestBody
            PaymentRequest request)
            throws Exception {

        return ResponseEntity.ok(

                service.createPaymentOrder(
                        request
                )
        );
    }

    // =========================
    // VERIFY PAYMENT
    // =========================

    @PostMapping("/verify")
    public ResponseEntity<?> verifyPayment(

            @RequestBody
            PaymentVerification request)
            throws Exception {

        boolean success =
                service.verifyPayment(
                        request
                );

        return ResponseEntity.ok(
                success
        );
    }
}