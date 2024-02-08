package com.jeremy.onlineorder.repository;

import com.jeremy.onlineorder.entity.CartEntity;
import org.springframework.data.jdbc.repository.query.Modifying;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.ListCrudRepository;


public interface CartRepository extends ListCrudRepository<CartEntity, Long> {


    // SELECT * FROM carts WHERE customer_id = :customerId
    CartEntity getByCustomerId(Long customerId);


    @Modifying
    @Query("UPDATE carts SET total_price = :totalPrice WHERE id = :cartId")
    void updateTotalPrice(Long cartId, Double totalPrice);
}
