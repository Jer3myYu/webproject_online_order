package com.jeremy.onlineorder.service;

import com.jeremy.onlineorder.entity.MenuItemEntity;
import com.jeremy.onlineorder.entity.RestaurantEntity;
import com.jeremy.onlineorder.model.MenuItemDto;
import com.jeremy.onlineorder.model.RestaurantDto;
import com.jeremy.onlineorder.repository.MenuItemRepository;
import com.jeremy.onlineorder.repository.RestaurantRepository;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@Service
public class RestaurantService {


    private final MenuItemRepository menuItemRepository;
    private final RestaurantRepository restaurantRepository;


    public RestaurantService(
            MenuItemRepository menuItemRepository,
            RestaurantRepository restaurantRepository) {
        this.menuItemRepository = menuItemRepository;
        this.restaurantRepository = restaurantRepository;
    }


    @Cacheable("restaurants")
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

