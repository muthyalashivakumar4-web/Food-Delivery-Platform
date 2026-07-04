package com.foodapp.cart.entity;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "cart_items")
@Data
public class CartItem {

    @Id
    private String id;

    private Long userId;

    private String menuItemId;

    private String itemName;

    private Double price;

    private Integer quantity;

    private Double subTotal;
}