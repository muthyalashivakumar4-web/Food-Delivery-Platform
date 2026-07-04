package com.foodapp.cart.service.impl;

import com.foodapp.cart.dto.request.AddToCartRequest;
import com.foodapp.cart.dto.response.CartResponse;
import com.foodapp.cart.entity.CartItem;
import com.foodapp.cart.repository.CartRepository;
import com.foodapp.cart.service.CartService;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CartServiceImpl
        implements CartService {

    private final CartRepository repository;

    public CartServiceImpl(
            CartRepository repository) {

        this.repository = repository;
    }

    @Override
    public CartResponse addToCart(
            AddToCartRequest request) {

        CartItem item =
                new CartItem();

        item.setUserId(
                request.getUserId());

        item.setMenuItemId(
                request.getMenuItemId());

        item.setItemName(
                request.getItemName());

        item.setPrice(
                request.getPrice());

        item.setQuantity(
                request.getQuantity());

        item.setSubTotal(
                request.getPrice() *
                        request.getQuantity());

        CartItem saved =
                repository.save(item);

        return map(saved);
    }

    @Override
    public List<CartResponse>
    getUserCart(
            Long userId) {

        return repository.findByUserId(userId)
                .stream()
                .map(this::map)
                .collect(Collectors.toList());
    }

    @Override
    public void removeItem(
            String cartItemId) {

        repository.deleteById(
                cartItemId);
    }

    @Override
    public Double getCartTotal(
            Long userId) {

        return repository.findByUserId(userId)
                .stream()
                .mapToDouble(
                        CartItem::getSubTotal)
                .sum();
    }

    private CartResponse map(
            CartItem item) {

        CartResponse response =
                new CartResponse();

        response.setId(
                item.getId());

        response.setUserId(
                item.getUserId());

        response.setMenuItemId(
                item.getMenuItemId());

        response.setItemName(
                item.getItemName());

        response.setPrice(
                item.getPrice());

        response.setQuantity(
                item.getQuantity());

        response.setSubTotal(
                item.getSubTotal());

        return response;
    }
}