package com.foodapp.auth.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AuthResponse {

    private Long userId;

    private String email;

    private String role;

    private String accessToken;

    private String refreshToken;

}