package com.codingdojo.mvcdemo.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.codingdojo.mvcdemo.models.Pizza;
import com.codingdojo.mvcdemo.services.PizzaService;

@RestController
public class ApiController {
	
	@Autowired
	public PizzaService service;
	
	@PostMapping("/api/pizzas")
	public Pizza createPizza(
			@RequestParam(value="pizzaType") String pizzaType,
			@RequestParam(value="pizzaSize") String pizzaSize,
			@RequestParam(value="numOfToppings") Integer numOfToppings
			){
		Pizza newPizza = new Pizza(pizzaType, pizzaSize, numOfToppings);
		
		
		return service.createPizza(newPizza);
		
	}
	@GetMapping("/api/pizzas")
	public ArrayList<Pizza> getAllPizzas() {
		return service.all();
	}
	
	public ArrayList<Pizza> findPizzaBySize(String size){
		return service.all();
	}
	@GetMapping("/api/pizzas/by-size/{pizzaSize}")
	public ArrayList<Pizza> getBySize(@PathVariable (value="pizzaSize") String pizzaSize){
		return service.findPizzasBySize(pizzaSize);
	}
}

//PostMan app, must use full url to make HTTPRequest http://localhost:8080/api/pizzas
//Body keys: pizzaType, pizzaSize, numOfToppings
//Body values: pepperoni, large, 1

