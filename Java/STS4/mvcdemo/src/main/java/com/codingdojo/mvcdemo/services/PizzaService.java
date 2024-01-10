package com.codingdojo.mvcdemo.services;

import java.util.ArrayList;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.codingdojo.mvcdemo.models.Pizza;
import com.codingdojo.mvcdemo.repositories.PizzaRepository;

@Service
public class PizzaService {
	
	private final PizzaRepository repo;

	public PizzaService(PizzaRepository pizzaRepo) {
		this.repo = pizzaRepo;
	}
		
	public ArrayList<Pizza> all(){
		return repo.findAll();
	}
	
	public Pizza findOne(Long id) {
		return repo.findById(id).orElse(null);
	}
	
	public Pizza createPizza(Pizza pizza) {
		return repo.save(pizza);
	}
	
	public ArrayList<Pizza> findPizzasBySize(String pizzaSize) {
		return repo.findAll();
	}
}

	
