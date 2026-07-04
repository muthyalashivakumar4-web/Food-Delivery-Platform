package com.foodapp.menu.service.impl;

import com.foodapp.menu.dto.request.CreateMenuRequest;
import com.foodapp.menu.dto.response.MenuResponse;
import com.foodapp.menu.entity.MenuItem;
import com.foodapp.menu.repository.MenuRepository;
import com.foodapp.menu.service.MenuService;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class MenuServiceImpl
        implements MenuService {

    private final MenuRepository repository;

    public MenuServiceImpl(
            MenuRepository repository) {

        this.repository = repository;
    }

    @Override
    public MenuResponse createMenuItem(
            CreateMenuRequest request) {

        MenuItem item = new MenuItem();

        item.setRestaurantId(
                request.getRestaurantId());

        item.setName(
                request.getName());

        item.setDescription(
                request.getDescription());

        item.setPrice(
                request.getPrice());

        item.setCategory(
                request.getCategory());

        item.setImageUrl(
                request.getImageUrl());

        MenuItem saved =
                repository.save(item);

        return map(saved);
    }

    @Override
    public MenuResponse getMenuItem(
            String id) {

        MenuItem item =
                repository.findById(id)
                        .orElseThrow(
                                () ->
                                        new RuntimeException(
                                                "Menu Item Not Found"));

        return map(item);
    }

    @Override
    public List<MenuResponse>
    getRestaurantMenu(
            Long restaurantId) {

        return repository
                .findByRestaurantId(
                        restaurantId)
                .stream()
                .map(this::map)
                .collect(Collectors.toList());
    }

    @Override
    public MenuResponse updateMenuItem(
            String id,
            CreateMenuRequest request) {

        MenuItem item =
                repository.findById(id)
                        .orElseThrow(
                                () ->
                                        new RuntimeException(
                                                "Menu Item Not Found"));

        item.setName(
                request.getName());

        item.setDescription(
                request.getDescription());

        item.setPrice(
                request.getPrice());

        item.setCategory(
                request.getCategory());

        item.setImageUrl(
                request.getImageUrl());

        MenuItem updated =
                repository.save(item);

        return map(updated);
    }

    @Override
    public void deleteMenuItem(
            String id) {

        repository.deleteById(id);
    }

    private MenuResponse map(
            MenuItem item) {

        MenuResponse response =
                new MenuResponse();

        response.setId(
                item.getId());

        response.setRestaurantId(
                item.getRestaurantId());

        response.setName(
                item.getName());

        response.setDescription(
                item.getDescription());

        response.setPrice(
                item.getPrice());

        response.setCategory(
                item.getCategory());

        response.setImageUrl(
                item.getImageUrl());

        response.setAvailable(
                item.getAvailable());

        return response;
    }
}