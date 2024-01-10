package com.codingdojo.dojosandninjas2.services;

import java.util.ArrayList;

import org.springframework.stereotype.Service;

import com.codingdojo.dojosandninjas2.models.Ninja;
import com.codingdojo.dojosandninjas2.repositories.NinjaRepository;

@Service
public class NinjaService {

	private final NinjaRepository repo;
	
	public NinjaService(NinjaRepository ninjaRepo) {
		this.repo = ninjaRepo;
	}
	
	public ArrayList<Ninja> all(){
		return repo.findAll();
	}
	
	public Ninja findOne(Long id) {
		return repo.findById(id).orElse(null);
	}
	
	public Ninja createNinja(Ninja ninja) {
		return repo.save(ninja);
	}
	
	public Ninja updateNinja(Ninja ninja) {
		return repo.save(ninja);
	}
	
	
	public void deleteNinja(Long id) {
		repo.deleteById(id);
	}
	
	
	
	
	
	
	
}
