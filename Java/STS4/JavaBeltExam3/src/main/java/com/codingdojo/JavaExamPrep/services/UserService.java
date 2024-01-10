package com.codingdojo.JavaExamPrep.services;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import com.codingdojo.JavaExamPrep.models.LoginUser;
import com.codingdojo.JavaExamPrep.models.User;
import com.codingdojo.JavaExamPrep.repositories.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepo;

	public UserService(UserRepository userRepo) {
		this.userRepo = userRepo;
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

	public User findUserByEmail(String email) {
		return userRepo.findByEmail(email);
	}
	
	public User register(User newUser, BindingResult result) {
		if (!newUser.getPassword().equals(newUser.getConfirmPassword())) {
			result.rejectValue("confirm", "Matches", "The confirm password must be the same as password");

		}

		BCrypt.hashpw(newUser.getPassword(), BCrypt.gensalt());

		return null;
	}

	public User login(LoginUser newLoginObject, BindingResult result) {
		return null;
	}
}