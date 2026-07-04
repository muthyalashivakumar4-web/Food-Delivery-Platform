package com.foodapp.notification.service.impl;

import com.foodapp.notification.dto.request.EmailRequest;

import com.foodapp.notification.entity.Notification;

import com.foodapp.notification.repository.NotificationRepository;

import com.foodapp.notification.service.NotificationService;

import org.springframework.mail.SimpleMailMessage;

import org.springframework.mail.javamail.
        JavaMailSender;

import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class NotificationServiceImpl
        implements NotificationService {

    private final JavaMailSender mailSender;

    private final NotificationRepository
            repository;

    public NotificationServiceImpl(
            JavaMailSender mailSender,
            NotificationRepository repository) {

        this.mailSender = mailSender;

        this.repository = repository;
    }

    @Override
    public void sendEmail(
            EmailRequest request) {

        SimpleMailMessage mail =
                new SimpleMailMessage();

        mail.setTo(
                request.getRecipient());

        mail.setSubject(
                request.getSubject());

        mail.setText(
                request.getMessage());

        mailSender.send(mail);

        Notification notification =
                new Notification();

        notification.setRecipient(
                request.getRecipient());

        notification.setSubject(
                request.getSubject());

        notification.setMessage(
                request.getMessage());

        notification.setStatus(
                "SENT");

        notification.setSentAt(
                LocalDateTime.now());

        repository.save(notification);
    }
}