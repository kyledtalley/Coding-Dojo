package com.codingdojo.dojooverflow.repositories;

import java.util.ArrayList;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.codingdojo.dojooverflow.models.Answer;


@Repository
public interface AnswerRepository extends CrudRepository<Answer, Long>{

	ArrayList<Answer> findAll();
	
	
}
