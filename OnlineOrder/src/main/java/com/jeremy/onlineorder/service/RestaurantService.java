package com.jeremy.onlineorder.service;

import com.jeremy.onlineorder.entity.MenuItemEntity;
import com.jeremy.onlineorder.entity.RestaurantEntity;
import com.jeremy.onlineorder.model.MenuItemDto;
import com.jeremy.onlineorder.model.RestaurantDto;
import com.jeremy.onlineorder.repository.MenuItemRepository;
import com.jeremy.onlineorder.repository.RestaurantRepository;
import org.springframework.stereotype.Service;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/*
 * The RestaurantService class in a Spring application aggregates and processes restaurant and menu item information from databases, transforming them into a structured format suitable for frontend display or further business logic processing, by creating a cohesive list of restaurant details along with their associated menu items.
 */
@Service
public class RestaurantService {


    private final MenuItemRepository menuItemRepository;
    private final RestaurantRepository restaurantRepository;


    public RestaurantService(
            RestaurantRepository restaurantRepository,
            MenuItemRepository menuItemRepository) {
        this.restaurantRepository = restaurantRepository;
        this.menuItemRepository = menuItemRepository;
    }


    public List<RestaurantDto> getRestaurants() {
        List<RestaurantEntity> restaurantEntities = restaurantRepository.findAll();
        List<MenuItemEntity> menuItemEntities = menuItemRepository.findAll();
        Map<Long, List<MenuItemDto>> groupedMenuItems = new HashMap<>();
        for (MenuItemEntity menuItemEntity : menuItemEntities) {
            List<MenuItemDto> group = groupedMenuItems.computeIfAbsent(menuItemEntity.restaurantId(), k -> new ArrayList<>());
            MenuItemDto menuItemDto = new MenuItemDto(menuItemEntity);
            group.add(menuItemDto);
        }
        List<RestaurantDto> results = new ArrayList<>();
        for (RestaurantEntity restaurantEntity : restaurantEntities) {
            RestaurantDto restaurantDto = new RestaurantDto(restaurantEntity, groupedMenuItems.get(restaurantEntity.id()));
            results.add(restaurantDto);
        }
        return results;
    }
}
