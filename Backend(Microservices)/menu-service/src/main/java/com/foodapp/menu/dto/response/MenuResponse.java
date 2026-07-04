package com.foodapp.menu.dto.response;

import lombok.Data;

@Data
public class MenuResponse {

    private String id;

    private Long restaurantId;

    private String name;

    private String description;

    private Double price;

    private String category;

    private String imageUrl;

    private Boolean available;
}