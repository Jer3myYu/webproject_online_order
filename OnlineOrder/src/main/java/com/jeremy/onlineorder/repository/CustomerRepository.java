package com.jeremy.onlineorder.repository;

import com.jeremy.onlineorder.entity.CustomerEntity;
import org.springframework.data.jdbc.repository.query.Modifying;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.ListCrudRepository;


import java.util.List;


public interface CustomerRepository extends ListCrudRepository<CustomerEntity, Long> {


    // SELECT * FROM customers WHERE first_name = :firstName
    List<CustomerEntity> findByFirstName(String firstName);


    // SELECT * FROM customers WHERE last_name = :lastName
    List<CustomerEntity> findByLastName(String lastName);


    // SELECT * FROM customers WHERE email = :email
    CustomerEntity findByEmail(String email);


    @Modifying
    @Query("UPDATE customers SET first_name = :firstName, last_name = :lastName WHERE id = :id")
    void updateNameById(long id, String firstName, String lastName);
}
