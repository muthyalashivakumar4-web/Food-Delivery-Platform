package com.foodapp.cart.controller;

import com.foodapp.cart.dto.request.AddToCartRequest;
import com.foodapp.cart.dto.response.CartResponse;
import com.foodapp.cart.service.CartService;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cart")
public class CartController {

    private final CartService service;

    public CartController(
            CartService service) {

        this.service = service;
    }

    @PostMapping
    public CartResponse addToCart(
            @RequestBody
            AddToCartRequest request) {

        return service.addToCart(request);
    }

    @GetMapping("/{userId}")
    public List<CartResponse>
    getUserCart(
            @PathVariable("userId")
            Long userId) {

        return service.getUserCart(
                userId);
    }

    @GetMapping("/total/{userId}")
    public Double getCartTotal(
            @PathVariable("userId")
            Long userId) {

        return service.getCartTotal(
                userId);
    }

    @DeleteMapping("/{cartItemId}")
    public String removeItem(
            @PathVariable("cartItemId")
            String cartItemId) {

        service.removeItem(
                cartItemId);

        return "Item Removed";
    }
}