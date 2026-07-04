package com.foodapp.menu.repository;

import com.foodapp.menu.entity.MenuItem;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface MenuRepository
        extends MongoRepository<MenuItem, String> {

    List<MenuItem>
    findByRestaurantId(
            Long restaurantId);
}