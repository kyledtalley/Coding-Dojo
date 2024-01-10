// .. imports .. //
package com.codingdojo.loginandregistration.repositories;
import java.util.ArrayList;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.codingdojo.loginandregistration.models.User;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
    
	public ArrayList<User> findAll();
	
    User findByEmail(String email);
    
}

