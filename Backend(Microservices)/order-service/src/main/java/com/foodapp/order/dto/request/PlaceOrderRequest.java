package com.foodapp.order.dto.request;

import lombok.Data;

import java.util.List;

@Data
public class PlaceOrderRequest {

    private Long userId;

    private Long restaurantId;

    private Double totalAmount;

    private List<OrderItemRequest> items;

}