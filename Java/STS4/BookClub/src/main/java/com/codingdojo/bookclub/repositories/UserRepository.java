package com.codingdojo.bookclub.repositories;

import java.util.ArrayList;

import org.springframework.data.repository.CrudRepository;

import com.codingdojo.bookclub.models.User;

public interface UserRepository extends CrudRepository<User, Long>{
	
	public ArrayList<User> findAll();
	
	User findByEmail(String email);
	
}
