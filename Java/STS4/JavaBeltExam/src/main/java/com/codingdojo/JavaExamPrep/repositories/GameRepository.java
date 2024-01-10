package com.codingdojo.JavaExamPrep.repositories;

import java.util.ArrayList;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.codingdojo.JavaExamPrep.models.Game;

@Repository
public interface GameRepository extends CrudRepository<Game, Long>{

	ArrayList<Game> findAll();
	
}
