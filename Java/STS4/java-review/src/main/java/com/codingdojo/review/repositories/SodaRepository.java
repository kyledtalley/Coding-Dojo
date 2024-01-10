package com.codingdojo.review.repositories;

import java.util.ArrayList;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.codingdojo.review.models.Soda;

@Repository
public interface SodaRepository extends CrudRepository<Soda, Long> {
	public ArrayList<Soda> findAll();
	
	public ArrayList<Soda> findAllOrderByCreatedAt();
}
