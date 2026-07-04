package com.foodapp.menu.dto.request;

import lombok.Data;

@Data
public class CreateMenuRequest {

    private Long restaurantId;

    private String name;

    private String description;

    private Double price;

    private String category;

    private String imageUrl;
}