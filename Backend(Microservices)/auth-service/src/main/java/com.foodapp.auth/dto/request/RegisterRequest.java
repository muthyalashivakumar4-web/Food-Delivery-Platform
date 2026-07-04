package com.foodapp.auth.dto.request;

import com.foodapp.auth.entity.Role;
import jakarta.validation.constraints.*;
import lombok.Data;

@Data
public class RegisterRequest {

    @NotBlank
    private String fullName;

    @Email
    private String email;

    @Size(min = 6)
    private String password;

    private Role role;
}