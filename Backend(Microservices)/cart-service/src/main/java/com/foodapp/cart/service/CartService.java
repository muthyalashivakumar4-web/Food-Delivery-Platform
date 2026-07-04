package com.foodapp.cart.service;

import com.foodapp.cart.dto.request.AddToCartRequest;
import com.foodapp.cart.dto.response.CartResponse;

import java.util.List;

public interface CartService {

    CartResponse addToCart(
            AddToCartRequest request);

    List<CartResponse> getUserCart(
            Long userId);

    void removeItem(
            String cartItemId);

    Double getCartTotal(
            Long userId);
}