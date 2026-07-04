package com.foodapp.order.controller;

import com.foodapp.order.dto.request.PlaceOrderRequest;
import com.foodapp.order.dto.response.OrderResponse;

import com.foodapp.order.service.OrderService;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    private final OrderService service;

    public OrderController(
            OrderService service) {

        this.service = service;
    }

    @PostMapping
    public OrderResponse placeOrder(
            @RequestBody
            PlaceOrderRequest request) {

        return service.placeOrder(
                request);
    }

    @GetMapping("/{orderId}")
    public OrderResponse getOrder(
            @PathVariable("orderId")
            Long orderId) {

        return service.getOrder(
                orderId);
    }

    @GetMapping("/user/{userId}")
    public List<OrderResponse>
    getUserOrders(
            @PathVariable("userId")
            Long userId) {

        return service.getUserOrders(
                userId);
    }

    @GetMapping("/restaurant/{restaurantId}")
    public List<OrderResponse>
    getRestaurantOrders(
            @PathVariable("restaurantId")
            Long restaurantId) {

        return service.getRestaurantOrders(
                restaurantId);
    }

    @GetMapping
    public List<OrderResponse> getAllOrders() {

        return service.getAllOrders();

    }

    @PutMapping("/{orderId}/status")
    public OrderResponse updateStatus(
            @PathVariable("orderId")
            Long orderId,

            @RequestParam("status")
            String status) {

        return service.updateStatus(
                orderId,
                status);
    }
}