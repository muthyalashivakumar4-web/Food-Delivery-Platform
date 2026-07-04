package com.foodapp.order.service;

import com.foodapp.order.dto.request.PlaceOrderRequest;
import com.foodapp.order.dto.response.OrderResponse;

import java.util.List;

public interface OrderService {

    OrderResponse placeOrder(
            PlaceOrderRequest request);

    OrderResponse getOrder(
            Long orderId);

    List<OrderResponse> getUserOrders(
            Long userId);

    List<OrderResponse> getRestaurantOrders(
            Long restaurantId);

    List<OrderResponse> getAllOrders();

    OrderResponse updateStatus(
            Long orderId,
            String status);

}