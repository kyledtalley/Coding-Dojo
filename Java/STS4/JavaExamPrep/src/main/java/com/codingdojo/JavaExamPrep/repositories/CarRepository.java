package com.codingdojo.JavaExamPrep.repositories;

import java.util.ArrayList;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.codingdojo.JavaExamPrep.models.Car;

@Repository
public interface CarRepository extends CrudRepository<Car, Long>{

	public ArrayList<Car> findAll();
	
	
}
