package com.foodapp.restaurant.repository;

import com.foodapp.restaurant.entity.Restaurant;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;        // ✅ ADD THIS
import java.util.Optional;

public interface RestaurantRepository
        extends JpaRepository<Restaurant, Long> {

    List<Restaurant> findAllByOwnerId(Long ownerId);

}