package com.subtle.foodapp.backend.controller;

import com.subtle.foodapp.backend.dto.CartRequest;

import com.subtle.foodapp.backend.entity.Cart;

import com.subtle.foodapp.backend.service.CartService;

import lombok.RequiredArgsConstructor;

import org.springframework.http.ResponseEntity;

import org.springframework.security.core.Authentication;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cart")
@RequiredArgsConstructor
public class CartController {

    private final CartService service;

    // =========================
    // ADD TO CART
    // =========================

    @PostMapping
    public ResponseEntity<?> addToCart(

            Authentication authentication,

            @RequestBody
            CartRequest request) {

        String email =
                authentication.getName();

        return ResponseEntity.ok(

                service.addToCart(
                        email,
                        request
                )
        );
    }

    // =========================
    // GET CART
    // =========================

    @GetMapping
    public ResponseEntity<List<Cart>>
    getCart(
            Authentication authentication) {

        String email =
                authentication.getName();

        return ResponseEntity.ok(

                service.getCart(email)
        );
    }

    // =========================
    // REMOVE CART ITEM
    // =========================

    @DeleteMapping("/{id}")
    public ResponseEntity<?> removeItem(
            @PathVariable Long id) {

        service.removeCartItem(id);

        return ResponseEntity.ok(
                "Item removed"
        );
    }
}