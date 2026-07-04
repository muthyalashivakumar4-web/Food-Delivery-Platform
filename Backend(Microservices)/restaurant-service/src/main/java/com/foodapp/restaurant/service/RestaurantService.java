package com.foodapp.restaurant.service;

import com.foodapp.restaurant.dto.request.CreateRestaurantRequest;
import com.foodapp.restaurant.dto.response.RestaurantResponse;

import java.util.List;

public interface RestaurantService {

    RestaurantResponse createRestaurant(
            CreateRestaurantRequest request);

    RestaurantResponse getRestaurant(
            Long id);

    List<RestaurantResponse> getRestaurantsByOwner(Long ownerId);

    List<RestaurantResponse> getAllRestaurants();

    RestaurantResponse updateRestaurant(
            Long id,
            CreateRestaurantRequest request);

    void deleteRestaurant(
            Long id);
}