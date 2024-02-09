package com.jeremy.onlineorder.service;

import com.jeremy.onlineorder.entity.CustomerEntity;
import com.jeremy.onlineorder.repository.CustomerRepository;
import org.springframework.stereotype.Service;


@Service
public class CustomerService {


    private final CustomerRepository customerRepository;


    public CustomerService(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }


    public CustomerEntity getCustomerByEmail(String email) {
        return customerRepository.findByEmail(email);
    }
}
