package com.jeremy.onlineorder.controller;

import com.jeremy.onlineorder.model.AddToCartBody;
import com.jeremy.onlineorder.model.CartDto;
import com.jeremy.onlineorder.service.CartService;
import org.springframework.web.bind.annotation.*;


@RestController
public class CartController {


    private final CartService cartService;


    public CartController(CartService cartService) {
        this.cartService = cartService;
    }


    @GetMapping("/cart")
    public CartDto getCart() {
        return cartService.getCart(1L);
    }


    @PostMapping("/cart")
    public void addToCart(@RequestBody AddToCartBody body) {
        cartService.addMenuItemToCart(1L, body.menuId());
    }


    @PostMapping("/cart/checkout")
    public void checkout() {
        cartService.clearCart(1L);
    }
}
