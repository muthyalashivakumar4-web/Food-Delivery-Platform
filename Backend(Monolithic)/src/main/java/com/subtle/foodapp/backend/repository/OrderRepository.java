package com.subtle.foodapp.backend.repository;

import com.subtle.foodapp.backend.entity.Order;
import com.subtle.foodapp.backend.entity.User;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepository
        extends JpaRepository<Order, Long> {

    List<Order> findByUser(
            User user
    );
}