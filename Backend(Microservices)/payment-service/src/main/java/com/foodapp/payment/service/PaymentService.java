package com.foodapp.payment.service;

import com.foodapp.payment.dto.request.PaymentRequest;
import com.foodapp.payment.dto.response.PaymentResponse;

public interface PaymentService {
    PaymentResponse createPaymentIntent(
            PaymentRequest request);
}