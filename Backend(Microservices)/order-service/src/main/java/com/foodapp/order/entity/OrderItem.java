package com.foodapp.order.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "order_items")
@Data
public class OrderItem {

    @Id
    @GeneratedValue(strategy =
            GenerationType.IDENTITY)

    private Long id;

    private Long orderId;

    private String menuItemId;

    private String itemName;

    private Double price;

    private Integer quantity;
}