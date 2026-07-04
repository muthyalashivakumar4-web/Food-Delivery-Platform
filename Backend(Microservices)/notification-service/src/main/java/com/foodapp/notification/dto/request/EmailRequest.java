package com.foodapp.notification.dto.request;

import lombok.Data;

@Data
public class EmailRequest {

    private String recipient;

    private String subject;

    private String message;
}