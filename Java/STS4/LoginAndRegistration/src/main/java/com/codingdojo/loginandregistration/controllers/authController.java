package com.codingdojo.loginandregistration.controllers;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.codingdojo.loginandregistration.models.LoginUser;
import com.codingdojo.loginandregistration.models.User;
import com.codingdojo.loginandregistration.services.UserService;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

@Controller
@RequestMapping("/auth")
public class authController {

	@Autowired
	UserService userService;

	@GetMapping("/registration")
	public String registrationPage(@ModelAttribute(value = "user") User user) {
		
		return "auth/registration.jsp";
	}
	
	@PostMapping("/registration")
	public String Register(@Valid @ModelAttribute(value="user") User user, BindingResult result, HttpSession session) {
		
		System.out.println(result);
		
		//Check if email is unique
		if(userService.getByEmail(user.getEmail()) != null) {
			result.rejectValue("email", "uniqueEmail", "Email is already taken");
		}
		
		if(!user.getPassword().equals(user.getConfirm())) {
			result.rejectValue("password", "passwordMatch", "Password must match Confirm Password");
		}
		
		
		if(result.hasErrors()) {
			return "auth/registration.jsp";
		}
		
		user.setPassword(BCrypt.hashpw(user.getPassword(), BCrypt.gensalt()));
		
		User newUser = userService.createUser(user);
		session.setAttribute("loggedInUser", newUser.getId());
		
		
		return "redirect:/";
	}

	@GetMapping("/")
	public String loginForm(@ModelAttribute("loginObj") LoginUser loginUser, @ModelAttribute(value = "user") User user) {
		return "/auth/login.jsp";
	}

	@PostMapping("/login")
	public String login(@Valid @ModelAttribute("loginObj") LoginUser loginUser, BindingResult result, Model model,
			HttpSession session) {

		// Add once service is implemented:
		// User user = userServ.login(newLogin, result);

		if (result.hasErrors()) {
			model.addAttribute("newUser", new User());
			return "index.jsp";
		}

		User userFromDb = userService.getByEmail(loginUser.getEmail());

		if (userFromDb == null) {
			result.rejectValue("email", "invalid", "Invalid login");
			return "/auth/login.jsp";
		}

		if (!BCrypt.checkpw(loginUser.getPassword(), userFromDb.getPassword())) {
			result.rejectValue("email", "invalid", "invalid login");

		}
		session.setAttribute("loggedInUser", userFromDb.getId());

		return "redirect:/";

	}

	@GetMapping("/logout")
	public String logout(HttpSession session) {
		session.invalidate();
		return "redirect:/auth/login";
	}

}

//    @GetMapping("/login")
//    public String login() {
//        return "login";
//    }
//
//    @GetMapping("/register")
//    public String register(Model model) {
//        model.addAttribute("user", new User());
//        return "register";
//    }
//
//    @PostMapping("/register")
//    public String register(User user) {
//        
//userService.save
//(user);
//        return "redirect😕login"; 
