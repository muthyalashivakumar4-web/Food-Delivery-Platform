package com.foodapp.notification.repository;

import com.foodapp.notification.entity.Notification;

import org.springframework.data.jpa.repository.JpaRepository;

public interface NotificationRepository
        extends JpaRepository<Notification, Long> {
}