package com.codingdojo.JavaExamPrep.repositories;

import org.springframework.data.repository.CrudRepository;

import com.codingdojo.JavaExamPrep.models.User;

public interface UserRepository extends CrudRepository<User, Long> {

	
	User findByEmail(String email);
	
}
