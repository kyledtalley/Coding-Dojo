package com.codingdojo.dojosandninjas2.repositories;

import java.util.ArrayList;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.codingdojo.dojosandninjas2.models.Ninja;

@Repository
public interface NinjaRepository extends CrudRepository<Ninja,Long>{

	ArrayList<Ninja> findAll();
	
}
