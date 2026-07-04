package com.foodapp.cart.repository;

import com.foodapp.cart.entity.CartItem;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface CartRepository
        extends MongoRepository<CartItem, String> {

    List<CartItem> findByUserId(
            Long userId);
}