package com.foodapp.restaurant.dto.request;

import lombok.Data;

@Data
public class CreateRestaurantRequest {

    private Long ownerId;

    private String restaurantName;

    private String ownerName;

    private String email;

    private String mobile;

    private String address;

    private String city;

    private String imageUrl;
}