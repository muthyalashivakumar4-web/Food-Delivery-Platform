package com.foodapp.payment.dto.response;

import lombok.Data;

@Data
public class PaymentResponse {

    private String clientSecret;

    private String paymentIntentId;

    private String status;
}