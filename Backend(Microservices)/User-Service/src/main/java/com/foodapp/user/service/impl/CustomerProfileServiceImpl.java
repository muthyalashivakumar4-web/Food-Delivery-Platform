package com.foodapp.user.service.impl;

import com.foodapp.user.dto.request.CreateProfileRequest;
import com.foodapp.user.dto.response.CustomerProfileResponse;
import com.foodapp.user.entity.CustomerProfile;
import com.foodapp.user.repository.CustomerProfileRepository;
import com.foodapp.user.service.CustomerProfileService;

import org.springframework.stereotype.Service;

@Service
public class CustomerProfileServiceImpl
        implements CustomerProfileService {

    private final CustomerProfileRepository repository;

    public CustomerProfileServiceImpl(
            CustomerProfileRepository repository) {

        this.repository = repository;
    }

    @Override
    public CustomerProfileResponse createProfile(
            CreateProfileRequest request) {

        CustomerProfile profile =
                new CustomerProfile();

        profile.setFullName(
                request.getFullName());

        profile.setEmail(
                request.getEmail());

        profile.setMobile(
                request.getMobile());

        profile.setProfileImage(
                request.getProfileImage());

        CustomerProfile saved =
                repository.save(profile);

        return map(saved);
    }

    @Override
    public CustomerProfileResponse getProfile(
            Long id) {

        CustomerProfile profile =
                repository.findById(id)
                        .orElseThrow(
                                () -> new RuntimeException(
                                        "Profile Not Found"));

        return map(profile);
    }

    @Override
    public CustomerProfileResponse updateProfile(
            Long id,
            CreateProfileRequest request) {

        CustomerProfile profile =
                repository.findById(id)
                        .orElseThrow(
                                () -> new RuntimeException(
                                        "Profile Not Found"));

        profile.setFullName(
                request.getFullName());

        profile.setEmail(
                request.getEmail());

        profile.setMobile(
                request.getMobile());

        profile.setProfileImage(
                request.getProfileImage());

        CustomerProfile updated =
                repository.save(profile);

        return map(updated);
    }

    private CustomerProfileResponse map(
            CustomerProfile profile) {

        return new CustomerProfileResponse(
                profile.getId(),
                profile.getAuthUserId(),
                profile.getFullName(),
                profile.getEmail(),
                profile.getMobile(),
                profile.getProfileImage(),
                profile.isActive()
        );
    }
}