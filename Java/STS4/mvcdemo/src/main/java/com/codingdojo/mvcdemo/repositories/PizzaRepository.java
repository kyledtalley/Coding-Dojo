package com.codingdojo.mvcdemo.repositories;

import java.util.ArrayList;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.codingdojo.mvcdemo.models.Pizza;

@Repository
public interface PizzaRepository extends CrudRepository<Pizza, Long>{
		
	ArrayList<Pizza> findAll();
	
	ArrayList<Pizza> findByPizzaSize(String size);
	
	Pizza findByPizzaTypeOrderByNumOfToppings(String pizzaType);
}
