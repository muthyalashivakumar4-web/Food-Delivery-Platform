package com.subtle.foodapp.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

import java.util.List;

@Entity
@Table(name = "orders")

@Getter
@Setter
public class Order {

    @Id
    @GeneratedValue(
            strategy =
                    GenerationType.IDENTITY
    )
    private Long id;

    // =========================
    // TOTAL
    // =========================

    private Double totalAmount;

    // =========================
    // ORDER STATUS
    // =========================

    private String status;

    // =========================
    // CREATED TIME
    // =========================

    private LocalDateTime createdAt;

    // =========================
    // USER
    // =========================

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    // =========================
    // ORDER ITEMS
    // =========================

    @OneToMany(
            mappedBy = "order",
            cascade = CascadeType.ALL
    )

    private List<OrderItem> items;
}