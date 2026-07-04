package com.foodapp.user.service;

import com.foodapp.user.dto.request.CreateProfileRequest;
import com.foodapp.user.dto.response.CustomerProfileResponse;

public interface CustomerProfileService {

    CustomerProfileResponse createProfile(
            CreateProfileRequest request);

    CustomerProfileResponse getProfile(
            Long id);

    CustomerProfileResponse updateProfile(
            Long id,
            CreateProfileRequest request);
}