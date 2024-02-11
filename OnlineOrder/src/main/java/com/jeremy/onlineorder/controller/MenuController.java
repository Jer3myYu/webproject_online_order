package com.jeremy.onlineorder.controller;

import com.jeremy.onlineorder.entity.MenuItemEntity;
import com.jeremy.onlineorder.model.RestaurantDto;
import com.jeremy.onlineorder.service.MenuItemService;
import com.jeremy.onlineorder.service.RestaurantService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;


import java.util.List;


@RestController
public class MenuController {


    private final RestaurantService restaurantService;
    private final MenuItemService menuItemService;


    public MenuController(RestaurantService restaurantService, MenuItemService menuItemService) {
        this.restaurantService = restaurantService;
        this.menuItemService = menuItemService;
    }


    @GetMapping("/restaurant/{restaurantId}/menu")
    public List<MenuItemEntity> getMenuByRestaurant(@PathVariable("restaurantId")  long restaurantId) {
        return menuItemService.getMenuItemsByRestaurantId(restaurantId);
    }


    @GetMapping("/restaurants/menu")
    public List<RestaurantDto> getMenuForAllRestaurants() {
        return restaurantService.getRestaurants();
    }
}
