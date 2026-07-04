package com.foodapp.menu.controller;

import com.foodapp.menu.dto.request.CreateMenuRequest;
import com.foodapp.menu.dto.response.MenuResponse;
import com.foodapp.menu.service.MenuService;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/menu")
public class MenuController {

    private final MenuService service;

    public MenuController(
            MenuService service) {

        this.service = service;
    }

    @PostMapping
    public MenuResponse createMenuItem(
            @RequestBody
            CreateMenuRequest request) {

        return service.createMenuItem(
                request);
    }

    @GetMapping("/{id}")
    public MenuResponse getMenuItem(
            @PathVariable("id")
            String id) {

        return service.getMenuItem(id);
    }

    @GetMapping("/restaurant/{restaurantId}")
    public List<MenuResponse>
    getRestaurantMenu(
            @PathVariable("restaurantId")
            Long restaurantId) {

        return service.getRestaurantMenu(
                restaurantId);
    }

    @PutMapping("/{id}")
    public MenuResponse updateMenuItem(
            @PathVariable("id")
            String id,
            @RequestBody
            CreateMenuRequest request) {

        return service.updateMenuItem(
                id,
                request);
    }

    @DeleteMapping("/{id}")
    public String deleteMenuItem(
            @PathVariable("id")
            String id) {

        service.deleteMenuItem(id);

        return "Menu Item Deleted";
    }
}