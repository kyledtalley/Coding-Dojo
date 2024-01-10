package com.codingdojo.review.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;

import com.codingdojo.review.models.Soda;
import com.codingdojo.review.repositories.SodaRepository;

public class SodaService {

	@Autowired
	private SodaRepository sRepo;
	
	public ArrayList<Soda> all(){
		return sRepo.findAll();
	}
}
