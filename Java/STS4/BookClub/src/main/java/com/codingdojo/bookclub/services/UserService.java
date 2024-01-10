package com.codingdojo.bookclub.services;

import java.util.ArrayList;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import com.codingdojo.bookclub.models.LoggedInUser;
import com.codingdojo.bookclub.models.User;
import com.codingdojo.bookclub.repositories.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepo;
	
	public UserService(UserRepository userRepo) {
		this.userRepo = userRepo;
	}
	
	public ArrayList<User> all(){
		return userRepo.findAll();
	}
	
	public User findOne(Long id) {
		return userRepo.findById(id).orElse(null);
	}
	
	public User createUser(User user) {
		return userRepo.save(user);
	}
	
	public User updateUser(User pizza) {
		return userRepo.save(pizza);
	}
	
	public void deleteUser(Long id) {
		userRepo.deleteById(id);
	}
	
	public User findByEmail(String email) {
		return userRepo.findByEmail(email);
	}
    
	public User register(User newUser, BindingResult result) {
		if(!newUser.getPassword().equals(newUser.getConfirm())) {
			result.rejectValue("confirm", "Matches", "The confirm password must be the same as password");
			
		}
		
		BCrypt.hashpw(newUser.getPassword(), BCrypt.gensalt());
		
		return null;
	}
	
	public User login(LoggedInUser newLoginObject, BindingResult result) {
		return null;
	}
	
	
}
