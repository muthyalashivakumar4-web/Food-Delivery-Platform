package com.foodapp.restaurant.controller;

import com.foodapp.restaurant.dto.request.CreateRestaurantRequest;
import com.foodapp.restaurant.dto.response.RestaurantResponse;
import com.foodapp.restaurant.service.RestaurantService;

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
    public RestaurantResponse createRestaurant(
            @RequestBody
            CreateRestaurantRequest request) {

        return service.createRestaurant(request);
    }

    @GetMapping("/{id}")
    public RestaurantResponse getRestaurant(
            @PathVariable("id") Long id) {

        return service.getRestaurant(id);
    }

    @GetMapping
    public List<RestaurantResponse>
    getAllRestaurants() {

        return service.getAllRestaurants();
    }
    @GetMapping("/owner/{ownerId}")
    public List<RestaurantResponse> getRestaurantsByOwner(
            @PathVariable Long ownerId) {

        return service.getRestaurantsByOwner(ownerId);
    }

    @PutMapping("/{id}")
    public RestaurantResponse updateRestaurant(
            @PathVariable("id") Long id,
            @RequestBody
            CreateRestaurantRequest request) {

        return service.updateRestaurant(
                id,
                request);
    }

    @DeleteMapping("/{id}")
    public String deleteRestaurant(
            @PathVariable("id") Long id) {

        service.deleteRestaurant(id);

        return "Restaurant Deleted Successfully";
    }
}