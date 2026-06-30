package com.subtle.foodapp.backend.service;

import com.subtle.foodapp.backend.entity.Restaurant;

import com.subtle.foodapp.backend.repository.RestaurantRepository;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RestaurantService {

    private final RestaurantRepository repository;

    public RestaurantService(
            RestaurantRepository repository) {

        this.repository = repository;
    }

    public Restaurant create(
            Restaurant restaurant) {

        return repository.save(restaurant);
    }

    public List<Restaurant> getAll() {

        return repository.findAll();
    }

    public Restaurant getById(Long id) {

        return repository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException(
                                "Restaurant not found"
                        )
                );
    }
}