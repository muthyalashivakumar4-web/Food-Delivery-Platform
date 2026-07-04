package com.foodapp.restaurant.service.impl;

import com.foodapp.restaurant.dto.request.CreateRestaurantRequest;
import com.foodapp.restaurant.dto.response.RestaurantResponse;
import com.foodapp.restaurant.entity.Restaurant;
import com.foodapp.restaurant.repository.RestaurantRepository;
import com.foodapp.restaurant.service.RestaurantService;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class RestaurantServiceImpl
        implements RestaurantService {

    private final RestaurantRepository repository;

    public RestaurantServiceImpl(
            RestaurantRepository repository) {

        this.repository = repository;
    }

    @Override
    public RestaurantResponse createRestaurant(
            CreateRestaurantRequest request) {

        Restaurant restaurant = new Restaurant();

        restaurant.setOwnerId(
                request.getOwnerId());

        restaurant.setRestaurantName(
                request.getRestaurantName());

        restaurant.setOwnerName(
                request.getOwnerName());

        restaurant.setEmail(
                request.getEmail());

        restaurant.setMobile(
                request.getMobile());

        restaurant.setAddress(
                request.getAddress());

        restaurant.setCity(
                request.getCity());

        restaurant.setImageUrl(
                request.getImageUrl());

        restaurant.setActive(true);

        Restaurant saved =
                repository.save(restaurant);

        return map(saved);
    }

    @Override
    public RestaurantResponse getRestaurant(
            Long id) {

        Restaurant restaurant =
                repository.findById(id)

                        .orElseThrow(() ->
                                new RuntimeException(
                                        "Restaurant Not Found"));

        return map(restaurant);
    }

    @Override
    public List<RestaurantResponse> getRestaurantsByOwner(Long ownerId) {

        return repository.findAllByOwnerId(ownerId)
                .stream()
                .map(this::map)
                .toList();
    }

    @Override
    public List<RestaurantResponse>
    getAllRestaurants() {

        return repository.findAll()

                .stream()

                .map(this::map)

                .collect(Collectors.toList());
    }

    @Override
    public RestaurantResponse updateRestaurant(
            Long id,
            CreateRestaurantRequest request) {

        Restaurant restaurant =
                repository.findById(id)

                        .orElseThrow(() ->
                                new RuntimeException(
                                        "Restaurant Not Found"));

        restaurant.setOwnerId(
                request.getOwnerId());

        restaurant.setRestaurantName(
                request.getRestaurantName());

        restaurant.setOwnerName(
                request.getOwnerName());

        restaurant.setEmail(
                request.getEmail());

        restaurant.setMobile(
                request.getMobile());

        restaurant.setAddress(
                request.getAddress());

        restaurant.setCity(
                request.getCity());

        restaurant.setImageUrl(
                request.getImageUrl());

        Restaurant updated =
                repository.save(restaurant);

        return map(updated);
    }

    @Override
    public void deleteRestaurant(
            Long id) {

        repository.deleteById(id);
    }

    private RestaurantResponse map(
            Restaurant restaurant) {

        RestaurantResponse response =
                new RestaurantResponse();

        response.setId(
                restaurant.getId());

        response.setOwnerId(
                restaurant.getOwnerId());

        response.setRestaurantName(
                restaurant.getRestaurantName());

        response.setOwnerName(
                restaurant.getOwnerName());

        response.setEmail(
                restaurant.getEmail());

        response.setMobile(
                restaurant.getMobile());

        response.setAddress(
                restaurant.getAddress());

        response.setCity(
                restaurant.getCity());

        response.setImageUrl(
                restaurant.getImageUrl());

        response.setActive(
                restaurant.isActive());

        return response;
    }
}