package com.foodapp.user.controller;

import com.foodapp.user.dto.request.CreateProfileRequest;
import com.foodapp.user.dto.response.CustomerProfileResponse;
import com.foodapp.user.service.CustomerProfileService;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class CustomerProfileController {

    private final CustomerProfileService service;

    public CustomerProfileController(
            CustomerProfileService service) {

        this.service = service;
    }

    @PostMapping
    public CustomerProfileResponse createProfile(
            @RequestBody CreateProfileRequest request) {

        return service.createProfile(request);
    }

    @GetMapping("/{id}")
    public CustomerProfileResponse getProfile(
            @PathVariable("id") Long id) {

        return service.getProfile(id);
    }

    @PutMapping("/{id}")
    public CustomerProfileResponse updateProfile(
            @PathVariable("id") Long id,
            @RequestBody CreateProfileRequest request) {

        return service.updateProfile(
                id,
                request);
    }
}