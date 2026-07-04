package com.foodapp.cart.dto.request;

import lombok.Data;

@Data
public class AddToCartRequest {

    private Long userId;

    private String menuItemId;

    private String itemName;

    private Double price;

    private Integer quantity;
}