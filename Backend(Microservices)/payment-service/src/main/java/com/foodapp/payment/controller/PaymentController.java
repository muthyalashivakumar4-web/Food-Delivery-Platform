package com.foodapp.payment.controller;

import com.foodapp.payment.dto.request.PaymentRequest;
import com.foodapp.payment.dto.response.PaymentResponse;

import com.foodapp.payment.service.PaymentService;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/payments")
public class PaymentController {

    private final PaymentService service;

    public PaymentController(
            PaymentService service) {

        this.service = service;
    }

    @PostMapping("/intent")
    public PaymentResponse createPaymentIntent(
            @RequestBody
            PaymentRequest request) {

        return service
                .createPaymentIntent(
                        request);
    }
}