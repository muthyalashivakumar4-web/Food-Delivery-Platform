package com.foodapp.user.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "customer_profiles")
@Data
public class CustomerProfile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long authUserId;

    private String fullName;

    private String email;

    private String mobile;

    private String profileImage;

    private boolean active = true;

}