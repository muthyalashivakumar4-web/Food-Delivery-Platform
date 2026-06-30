package com.subtle.foodapp.backend.repository;

import com.subtle.foodapp.backend.entity.Cart;
import com.subtle.foodapp.backend.entity.User;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface CartRepository
        extends JpaRepository<Cart, Long> {

    List<Cart> findByUser(
            User user
    );

    Optional<Cart> findByUserAndFoodItemId(

            User user,

            Long foodItemId
    );
}