package com.jeremy.onlineorder.repository;

import com.jeremy.onlineorder.entity.RestaurantEntity;
import org.springframework.data.repository.ListCrudRepository;


public interface RestaurantRepository extends ListCrudRepository<RestaurantEntity, Long> {

}
