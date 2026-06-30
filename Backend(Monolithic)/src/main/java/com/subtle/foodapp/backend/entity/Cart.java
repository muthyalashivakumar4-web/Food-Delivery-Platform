package com.subtle.foodapp.backend.entity;

import jakarta.persistence.*;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Cart {

    @Id
    @GeneratedValue(
            strategy =
                    GenerationType.IDENTITY
    )
    private Long id;

    // =========================
    // USER
    // =========================

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    // =========================
    // FOOD ITEM
    // =========================

    @ManyToOne
    @JoinColumn(name = "food_item_id")
    private FoodItem foodItem;

    // =========================
    // QUANTITY
    // =========================

    private Integer quantity;
}