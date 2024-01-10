package com.codingdojo.loginandregistration.services;

import java.util.ArrayList;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import com.codingdojo.loginandregistration.models.LoginUser;
import com.codingdojo.loginandregistration.models.User;
import com.codingdojo.loginandregistration.repositories.UserRepository;
    
@Service
public class UserService {
    
    @Autowired
    private UserRepository userRepo;
        
    public UserService(UserRepository userRepo) {
    	this.userRepo = userRepo;
    }
    public ArrayList<User> all() {
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
	
	public User getByEmail(String email) {
		return userRepo.findByEmail(email);
	}
    
    // TO-DO: Write register and login methods!
    public User register(User newUser, BindingResult result) {
    	
    	if(!newUser.getPassword().equals(newUser.getConfirm())) {
    	    result.rejectValue("confirm", "Matches", "The Confirm Password must match Password!");
    	}

    	BCrypt.hashpw(newUser.getPassword(), BCrypt.gensalt());
        // TO-DO: Additional validations!
        return null;
    }
    public User login(LoginUser newLoginObject, BindingResult result) {
        // TO-DO: Additional validations!
        return null;
    }
    

//Amazing Technology
//Amazing Technology says:@Autowired
//    private UserRepository userRepository;
//
//    @Autowired
//    private BCryptPasswordEncoder bCryptPasswordEncoder;
//
//    @Override
//    public User findByUsername(String username) {
//        return userRepository.findByUsername(username);
//    }
//
//    @Override
//    public void save(User user) {
//        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
//        
//userRepository.save
//(user); 
}
