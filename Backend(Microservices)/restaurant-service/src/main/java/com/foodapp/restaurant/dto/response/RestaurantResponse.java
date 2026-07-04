package com.foodapp.restaurant.dto.response;

import lombok.Data;

@Data
public class RestaurantResponse {

    private Long id;

    private Long ownerId;

    private String restaurantName;

    private String ownerName;

    private String email;

    private String mobile;

    private String address;

    private String city;

    private String imageUrl;

    private boolean active;
}