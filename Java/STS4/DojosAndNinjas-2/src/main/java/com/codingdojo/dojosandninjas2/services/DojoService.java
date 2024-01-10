package com.codingdojo.dojosandninjas2.services;

import java.util.ArrayList;

import org.springframework.stereotype.Service;

import com.codingdojo.dojosandninjas2.models.Dojo;
import com.codingdojo.dojosandninjas2.repositories.DojoRepository;

@Service
public class DojoService {

	private final DojoRepository repo;
	
	public DojoService(DojoRepository dojoRepo) {
		this.repo = dojoRepo;
	}
	
	public ArrayList<Dojo> all(){
		return repo.findAll();
	}
	
	public Dojo findOne(Long id) {
		return repo.findById(id).orElse(null);
	}
	
	public Dojo createDojo(Dojo dojo) {
		return repo.save(dojo);
	}
	
//	public ArrayList<Dojo> findDojosByName(String name){
//		return repo.findByDojoName(name);
//	}
	
	public Dojo updateDojo(Dojo dojo) {
		return repo.save(dojo);
	}
	
	public void deleteDojo(Long id) {
		repo.deleteById(id);
	}
	
	
	
	
	
	
	
}
