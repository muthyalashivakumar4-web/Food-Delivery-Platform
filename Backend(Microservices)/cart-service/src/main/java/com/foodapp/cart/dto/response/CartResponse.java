package com.foodapp.cart.dto.response;

import lombok.Data;

@Data
public class CartResponse {

    private String id;

    private Long userId;

    private String menuItemId;

    private String itemName;

    private Double price;

    private Integer quantity;

    private Double subTotal;
}