package com.foodapp.user.repository;

import com.foodapp.user.entity.CustomerProfile;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerProfileRepository
        extends JpaRepository<CustomerProfile, Long> {
}