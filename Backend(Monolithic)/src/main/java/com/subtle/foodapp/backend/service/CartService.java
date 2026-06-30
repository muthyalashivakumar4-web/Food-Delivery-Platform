package com.subtle.foodapp.backend.service;

import com.subtle.foodapp.backend.dto.CartRequest;

import com.subtle.foodapp.backend.entity.Cart;
import com.subtle.foodapp.backend.entity.FoodItem;
import com.subtle.foodapp.backend.entity.User;

import com.subtle.foodapp.backend.repository.CartRepository;
import com.subtle.foodapp.backend.repository.FoodItemRepository;
import com.subtle.foodapp.backend.repository.UserRepository;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CartService {

    private final CartRepository cartRepository;

    private final FoodItemRepository foodRepository;

    private final UserRepository userRepository;

    // =========================
    // ADD TO CART
    // =========================

    public Cart addToCart(

            String email,

            CartRequest request) {

        User user =
                userRepository
                        .findByEmail(email)
                        .orElseThrow(() ->
                                new RuntimeException(
                                        "User not found"
                                )
                        );

        FoodItem food =
                foodRepository
                        .findById(
                                request.getFoodItemId()
                        )
                        .orElseThrow(() ->
                                new RuntimeException(
                                        "Food not found"
                                )
                        );

        Cart cartItem =
                cartRepository
                        .findByUserAndFoodItemId(
                                user,
                                food.getId()
                        )
                        .orElse(null);

        // =========================
        // EXISTING ITEM
        // =========================

        if (cartItem != null) {

            cartItem.setQuantity(

                    cartItem.getQuantity()
                            + request.getQuantity()
            );

        } else {

            cartItem = new Cart();

            cartItem.setUser(user);

            cartItem.setFoodItem(food);

            cartItem.setQuantity(
                    request.getQuantity()
            );
        }

        return cartRepository.save(
                cartItem
        );
    }

    // =========================
    // GET USER CART
    // =========================

    public List<Cart> getCart(
            String email) {

        User user =
                userRepository
                        .findByEmail(email)
                        .orElseThrow(() ->
                                new RuntimeException(
                                        "User not found"
                                )
                        );

        return cartRepository
                .findByUser(user);
    }

    // =========================
    // REMOVE CART ITEM
    // =========================

    public void removeCartItem(
            Long id) {

        cartRepository.deleteById(id);
    }
}