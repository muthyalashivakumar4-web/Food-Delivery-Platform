package com.subtle.foodapp.backend.controller;

import com.subtle.foodapp.backend.dto.OrderRequest;

import com.subtle.foodapp.backend.entity.Order;

import com.subtle.foodapp.backend.service.OrderService;

import lombok.RequiredArgsConstructor;

import org.springframework.http.ResponseEntity;

import org.springframework.security.core.Authentication;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
@RequiredArgsConstructor
public class OrderController {

    private final OrderService service;

    // =========================
    // PLACE ORDER
    // =========================

    @PostMapping
    public ResponseEntity<?> placeOrder(

            Authentication authentication,

            @RequestBody
            OrderRequest request) {

        String email =
                authentication.getName();

        Order order =
                service.placeOrder(
                        email,
                        request
                );

        return ResponseEntity.ok(
                order
        );
    }

    // =========================
    // GET MY ORDERS
    // =========================

    @GetMapping("/my")
    public ResponseEntity<List<Order>>
    getMyOrders(
            Authentication authentication) {

        String email =
                authentication.getName();

        return ResponseEntity.ok(

                service.getMyOrders(email)
        );
    }

    // =========================
    // UPDATE ORDER STATUS
    // =========================

    @PutMapping("/{id}/status")
    public ResponseEntity<?> updateStatus(

            @PathVariable Long id,

            @RequestParam String status) {

        return ResponseEntity.ok(

                service.updateStatus(
                        id,
                        status
                )
        );
    }
}