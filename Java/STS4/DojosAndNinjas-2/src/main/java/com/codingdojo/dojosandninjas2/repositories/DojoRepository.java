package com.codingdojo.dojosandninjas2.repositories;

import java.util.ArrayList;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.codingdojo.dojosandninjas2.models.Dojo;


@Repository
public interface DojoRepository extends CrudRepository<Dojo, Long>{

	ArrayList<Dojo> findAll();
	
	
}
