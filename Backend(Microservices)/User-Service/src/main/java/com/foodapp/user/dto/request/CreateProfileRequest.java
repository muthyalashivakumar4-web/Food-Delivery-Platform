package com.foodapp.user.dto.request;

import lombok.Data;

@Data
public class CreateProfileRequest {

    private String fullName;

    private String email;

    private String mobile;

    private String profileImage;

}