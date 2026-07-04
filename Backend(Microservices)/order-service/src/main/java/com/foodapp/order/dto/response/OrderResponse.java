package com.foodapp.order.dto.response;

import com.foodapp.order.entity.OrderStatus;

import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
public class OrderResponse {

    private Long id;

    private Long userId;

    private Long restaurantId;

    private Double totalAmount;

    private OrderStatus status;

    private LocalDateTime orderTime;

    private List<OrderItemResponse> items;

}