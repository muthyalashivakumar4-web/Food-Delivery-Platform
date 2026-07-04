package com.foodapp.restaurant.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "restaurants")
@Data
public class Restaurant {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Logged in owner
    private Long ownerId;

    private String restaurantName;

    private String ownerName;

    private String email;

    private String mobile;

    private String address;

    private String city;

    private String imageUrl;

    private boolean active = true;
}