package com.subtle.foodapp.backend.controller;

import com.subtle.foodapp.backend.entity.Restaurant;

import com.subtle.foodapp.backend.service.RestaurantService;

import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/restaurants")
public class RestaurantController {

    private final RestaurantService service;

    public RestaurantController(
            RestaurantService service) {

        this.service = service;
    }

    @PostMapping
    public ResponseEntity<?> create(
            @RequestBody Restaurant restaurant) {

        return ResponseEntity.ok(
                service.create(restaurant)
        );
    }

    @GetMapping
    public ResponseEntity<List<Restaurant>> getAll() {

        return ResponseEntity.ok(
                service.getAll()
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getById(
            @PathVariable Long id) {

        return ResponseEntity.ok(
                service.getById(id)
        );
    }
}