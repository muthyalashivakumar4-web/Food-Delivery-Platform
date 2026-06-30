package com.subtle.foodapp.backend.entity;

import jakarta.persistence.*;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class OrderItem {

    @Id
    @GeneratedValue(
            strategy =
                    GenerationType.IDENTITY
    )
    private Long id;

    // =========================
    // ORDER
    // =========================

    @ManyToOne
    @JoinColumn(name = "order_id")
    private Order order;

    // =========================
    // FOOD ITEM
    // =========================

    @ManyToOne
    @JoinColumn(name = "food_item_id")
    private FoodItem foodItem;

    // =========================
    // SNAPSHOT DATA
    // =========================

    private Integer quantity;

    private Double price;
}

