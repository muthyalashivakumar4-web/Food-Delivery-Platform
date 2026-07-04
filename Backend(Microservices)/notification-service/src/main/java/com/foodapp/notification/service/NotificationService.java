package com.foodapp.notification.service;

import com.foodapp.notification.dto.request.EmailRequest;

public interface NotificationService {

    void sendEmail(
            EmailRequest request);
}