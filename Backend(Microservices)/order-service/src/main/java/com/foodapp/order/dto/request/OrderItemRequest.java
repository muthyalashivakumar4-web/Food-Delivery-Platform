package com.foodapp.order.dto.request;

import lombok.Data;

@Data
public class OrderItemRequest {

    private String menuItemId;

    private String itemName;

    private Double price;

    private Integer quantity;

}