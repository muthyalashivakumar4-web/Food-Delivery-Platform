package com.subtle.foodapp.backend.service;

import com.subtle.foodapp.backend.dto.OrderRequest;

import com.subtle.foodapp.backend.entity.Cart;
import com.subtle.foodapp.backend.entity.FoodItem;
import com.subtle.foodapp.backend.entity.Order;
import com.subtle.foodapp.backend.entity.OrderItem;
import com.subtle.foodapp.backend.entity.User;

import com.subtle.foodapp.backend.repository.CartRepository;
import com.subtle.foodapp.backend.repository.FoodItemRepository;
import com.subtle.foodapp.backend.repository.OrderItemRepository;
import com.subtle.foodapp.backend.repository.OrderRepository;
import com.subtle.foodapp.backend.repository.UserRepository;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class OrderService {

    // =========================
    // REPOSITORIES
    // =========================

    private final OrderRepository orderRepository;

    private final OrderItemRepository orderItemRepository;

    private final FoodItemRepository foodRepository;

    private final UserRepository userRepository;

    private final CartRepository cartRepo;

    // =========================
    // PLACE ORDER
    // =========================

    public Order placeOrder(

            String email,

            OrderRequest request) {

        // =========================
        // FIND USER
        // =========================

        User user =
                userRepository
                        .findByEmail(email)
                        .orElseThrow(() ->
                                new RuntimeException(
                                        "User not found"
                                )
                        );

        // =========================
        // CREATE ORDER
        // =========================

        Order order = new Order();

        order.setUser(user);

        order.setTotalAmount(
                request.getTotalAmount()
        );

        // =========================
        // INITIAL ORDER STATUS
        // =========================

        order.setStatus(
                "PENDING"
        );

        order.setCreatedAt(
                LocalDateTime.now()
        );

        Order savedOrder =
                orderRepository.save(order);

        // =========================
        // CREATE ORDER ITEMS
        // =========================

        List<OrderItem> orderItems =
                request.getItems()
                        .stream()
                        .map(itemRequest -> {

                            // =========================
                            // FIND FOOD ITEM
                            // =========================

                            FoodItem food =
                                    foodRepository
                                            .findById(
                                                    itemRequest
                                                            .getFoodItemId()
                                            )
                                            .orElseThrow(() ->
                                                    new RuntimeException(
                                                            "Food item not found"
                                                    )
                                            );

                            // =========================
                            // CREATE ORDER ITEM
                            // =========================

                            OrderItem item =
                                    new OrderItem();

                            item.setOrder(
                                    savedOrder
                            );

                            item.setFoodItem(
                                    food
                            );

                            item.setQuantity(
                                    itemRequest
                                            .getQuantity()
                            );

                            // =========================
                            // SNAPSHOT PRICE
                            // =========================

                            item.setPrice(
                                    food.getPrice()
                            );

                            return item;

                        })
                        .toList();

        // =========================
        // SAVE ORDER ITEMS
        // =========================

        orderItemRepository
                .saveAll(orderItems);

        // =========================
        // ATTACH ITEMS TO ORDER
        // =========================

        savedOrder.setItems(
                orderItems
        );

        // =========================
        // CLEAR USER CART
        // =========================

        List<Cart> cartItems =
                cartRepo.findByUser(user);

        cartRepo.deleteAll(cartItems);

        return savedOrder;
    }

    // =========================
    // GET USER ORDERS
    // =========================

    public List<Order> getMyOrders(
            String email) {

        User user =
                userRepository
                        .findByEmail(email)
                        .orElseThrow(() ->
                                new RuntimeException(
                                        "User not found"
                                )
                        );

        return orderRepository
                .findByUser(user);
    }

    // =========================
    // UPDATE ORDER STATUS
    // =========================

    public Order updateStatus(

            Long orderId,

            String status) {

        Order order =
                orderRepository
                        .findById(orderId)
                        .orElseThrow(() ->
                                new RuntimeException(
                                        "Order not found"
                                )
                        );

        order.setStatus(status);

        return orderRepository.save(order);
    }
}