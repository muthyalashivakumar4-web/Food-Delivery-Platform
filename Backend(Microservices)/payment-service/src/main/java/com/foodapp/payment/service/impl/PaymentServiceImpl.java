package com.foodapp.payment.service.impl;

import com.foodapp.payment.dto.request.PaymentRequest;
import com.foodapp.payment.dto.response.PaymentResponse;

import com.foodapp.payment.entity.Payment;
import com.foodapp.payment.repository.PaymentRepository;
import com.foodapp.payment.service.PaymentService;

import com.stripe.model.PaymentIntent;
import com.stripe.param.PaymentIntentCreateParams;

import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class PaymentServiceImpl
        implements PaymentService {

    private final PaymentRepository repository;

    public PaymentServiceImpl(
            PaymentRepository repository) {

        this.repository = repository;
    }

    @Override
    public PaymentResponse createPaymentIntent(
            PaymentRequest request) {

        try {

            PaymentIntentCreateParams params =
                    PaymentIntentCreateParams.builder()

                            .setAmount(
                                    (long)
                                            (request.getAmount() * 100))

                            .setCurrency("inr")

                            .build();

            PaymentIntent paymentIntent =
                    PaymentIntent.create(params);

            Payment payment =
                    new Payment();

            payment.setOrderId(
                    request.getOrderId());

            payment.setAmount(
                    request.getAmount());

            payment.setPaymentIntentId(
                    paymentIntent.getId());

            payment.setStatus(
                    paymentIntent.getStatus());

            payment.setPaymentTime(
                    LocalDateTime.now());

            repository.save(payment);

            PaymentResponse response =
                    new PaymentResponse();

            response.setClientSecret(
                    paymentIntent.getClientSecret());

            response.setPaymentIntentId(
                    paymentIntent.getId());

            response.setStatus(
                    paymentIntent.getStatus());

            return response;

        } catch (Exception ex) {

            throw new RuntimeException(
                    ex.getMessage());
        }
    }
}