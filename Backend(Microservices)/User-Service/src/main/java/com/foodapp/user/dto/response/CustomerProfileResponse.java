package com.foodapp.user.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CustomerProfileResponse {

    private Long id;

    private Long authUserId;

    private String fullName;

    private String email;

    private String mobile;

    private String profileImage;

    private boolean active;
}