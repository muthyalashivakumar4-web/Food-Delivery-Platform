package com.foodapp.menu.entity;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "menu_items")
@Data
public class MenuItem {

    @Id
    private String id;

    private Long restaurantId;

    private String name;

    private String description;

    private Double price;

    private String category;

    private String imageUrl;

    private Boolean available = true;

    public MenuItem() {
    }
}