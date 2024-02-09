package com.jeremy.onlineorder.service;

import com.jeremy.onlineorder.entity.MenuItemEntity;
import com.jeremy.onlineorder.repository.MenuItemRepository;
import org.springframework.stereotype.Service;


import java.util.List;

/*
 * The MenuItemService class is responsible for accessing and retrieving menu item data related to specific restaurants. It utilizes MenuItemRepository to fetch menu items either by their unique ID or by their associated restaurant's ID, offering methods to support operations like displaying a restaurant's menu or details of a specific menu item within a Spring application framework.
 */
@Service
public class MenuItemService {


    private final MenuItemRepository menuItemRepository;


    public MenuItemService(MenuItemRepository menuItemRepository) {
        this.menuItemRepository = menuItemRepository;
    }


    public List<MenuItemEntity> getMenuItemsByRestaurantId(long restaurantId) {
        return menuItemRepository.getByRestaurantId(restaurantId);
    }


    public MenuItemEntity getMenuItemById(long id) {
        return menuItemRepository.findById(id).get();
    }
}
