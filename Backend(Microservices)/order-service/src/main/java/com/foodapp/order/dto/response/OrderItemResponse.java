package com.foodapp.order.dto.response;

import lombok.Data;

@Data
public class OrderItemResponse {

    private Long id;

    private String menuItemId;

    private String itemName;

    private Double price;

    private Integer quantity;

}
