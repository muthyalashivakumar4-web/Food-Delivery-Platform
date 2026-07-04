package com.foodapp.notification.controller;

import com.foodapp.notification.dto.request.EmailRequest;

import com.foodapp.notification.service.NotificationService;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/notifications")
public class
NotificationController {

    private final NotificationService service;

    public NotificationController(
            NotificationService service) {

        this.service = service;
    }

    @PostMapping("/email")
    public String sendEmail(
            @RequestBody
            EmailRequest request) {

        service.sendEmail(request);

        return "Email Sent Successfully";
    }
}