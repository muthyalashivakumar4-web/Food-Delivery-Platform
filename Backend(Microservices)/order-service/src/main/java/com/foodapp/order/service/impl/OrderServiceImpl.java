package com.foodapp.order.service.impl;

import com.foodapp.order.dto.request.OrderItemRequest;
import com.foodapp.order.dto.request.PlaceOrderRequest;
import com.foodapp.order.dto.response.OrderItemResponse;
import com.foodapp.order.dto.response.OrderResponse;
import com.foodapp.order.entity.Order;
import com.foodapp.order.entity.OrderItem;
import com.foodapp.order.entity.OrderStatus;
import com.foodapp.order.repository.OrderItemRepository;
import com.foodapp.order.repository.OrderRepository;
import com.foodapp.order.service.OrderService;

import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class OrderServiceImpl
        implements OrderService {

    private final OrderRepository orderRepository;

    private final OrderItemRepository orderItemRepository;

    public OrderServiceImpl(
            OrderRepository orderRepository,
            OrderItemRepository orderItemRepository) {

        this.orderRepository = orderRepository;
        this.orderItemRepository = orderItemRepository;
    }

    @Override
    public OrderResponse placeOrder(
            PlaceOrderRequest request) {

        Order order = new Order();

        order.setUserId(
                request.getUserId());

        order.setRestaurantId(
                request.getRestaurantId());

        order.setTotalAmount(
                request.getTotalAmount());

        order.setStatus(
                OrderStatus.PLACED);

        order.setOrderTime(
                LocalDateTime.now());

        Order savedOrder =
                orderRepository.save(order);

        if (request.getItems() != null) {

            for (OrderItemRequest item :
                    request.getItems()) {

                OrderItem orderItem =
                        new OrderItem();

                orderItem.setOrderId(
                        savedOrder.getId());

                orderItem.setMenuItemId(
                        item.getMenuItemId());

                orderItem.setItemName(
                        item.getItemName());

                orderItem.setPrice(
                        item.getPrice());

                orderItem.setQuantity(
                        item.getQuantity());

                orderItemRepository.save(
                        orderItem);
            }

        }

        return mapToResponse(savedOrder);
    }

    @Override
    public OrderResponse getOrder(
            Long orderId) {

        Order order =
                orderRepository.findById(orderId)

                        .orElseThrow(() ->
                                new RuntimeException(
                                        "Order Not Found"));

        return mapToResponse(order);
    }

    @Override
    public List<OrderResponse> getUserOrders(
            Long userId) {

        return orderRepository.findByUserId(userId)

                .stream()

                .map(this::mapToResponse)

                .toList();
    }

    @Override
    public List<OrderResponse> getRestaurantOrders(
            Long restaurantId) {

        return orderRepository.findByRestaurantId(
                        restaurantId)

                .stream()

                .map(this::mapToResponse)

                .toList();
    }

    @Override
    public List<OrderResponse> getAllOrders() {

        return orderRepository.findAll()

                .stream()

                .map(this::mapToResponse)

                .toList();
    }

    @Override
    public OrderResponse updateStatus(
            Long orderId,
            String status) {

        Order order =
                orderRepository.findById(orderId)

                        .orElseThrow(() ->
                                new RuntimeException(
                                        "Order Not Found"));

        order.setStatus(
                OrderStatus.valueOf(
                        status.toUpperCase()));

        Order updatedOrder =
                orderRepository.save(order);

        return mapToResponse(updatedOrder);
    }

    private OrderResponse mapToResponse(
            Order order) {

        OrderResponse response =
                new OrderResponse();

        response.setId(
                order.getId());

        response.setUserId(
                order.getUserId());

        response.setRestaurantId(
                order.getRestaurantId());

        response.setTotalAmount(
                order.getTotalAmount());

        response.setStatus(
                order.getStatus());

        response.setOrderTime(
                order.getOrderTime());

        List<OrderItemResponse> items =
                orderItemRepository
                        .findByOrderId(
                                order.getId())

                        .stream()

                        .map(item -> {

                            OrderItemResponse dto =
                                    new OrderItemResponse();

                            dto.setId(
                                    item.getId());

                            dto.setMenuItemId(
                                    item.getMenuItemId());

                            dto.setItemName(
                                    item.getItemName());

                            dto.setPrice(
                                    item.getPrice());

                            dto.setQuantity(
                                    item.getQuantity());

                            return dto;

                        })

                        .toList();

        response.setItems(items);

        return response;
    }

}