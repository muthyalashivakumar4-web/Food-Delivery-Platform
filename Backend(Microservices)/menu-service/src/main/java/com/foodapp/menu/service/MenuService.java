package com.foodapp.menu.service;

import com.foodapp.menu.dto.request.CreateMenuRequest;
import com.foodapp.menu.dto.response.MenuResponse;

import java.util.List;

public interface MenuService {

    MenuResponse createMenuItem(
            CreateMenuRequest request);

    MenuResponse getMenuItem(
            String id);

    List<MenuResponse> getRestaurantMenu(
            Long restaurantId);

    MenuResponse updateMenuItem(
            String id,
            CreateMenuRequest request);

    void deleteMenuItem(
            String id);
}