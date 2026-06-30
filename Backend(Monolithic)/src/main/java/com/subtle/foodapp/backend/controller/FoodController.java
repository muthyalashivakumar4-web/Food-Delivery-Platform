package com.subtle.foodapp.backend.controller;

import com.subtle.foodapp.backend.dto.FoodRequest;
import com.subtle.foodapp.backend.entity.FoodItem;
import com.subtle.foodapp.backend.service.FoodService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/food")
public class FoodController {

    private final FoodService service;

    public FoodController(FoodService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<FoodItem> addFood(
            @Valid @RequestBody FoodRequest dto) {

        return ResponseEntity.ok(service.addFood(dto));
    }

    @GetMapping("/restaurant/{restaurant_id}")
    public ResponseEntity<List<FoodItem>> getMenu(
            @PathVariable Long restaurant_id) {

        return ResponseEntity.ok(service.getMenu(restaurant_id));
    }
}
