package com.subtle.foodapp.backend.dto;

import lombok.Data;

@Data
public class CartRequest {

    private Long foodItemId;

    private Integer quantity;
}