package com.codingdojo.bookclub.controllers;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.codingdojo.bookclub.models.LoggedInUser;
import com.codingdojo.bookclub.models.User;
import com.codingdojo.bookclub.services.UserService;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

@Controller
@RequestMapping("/auth")
public class AuthController {

	@Autowired
	private UserService userService;

	@GetMapping("")
	public String loginForm(@ModelAttribute(value = "user") User user, Model model) {

		model.addAttribute("loginObj", new LoggedInUser());
		return "/auth/loginpage.jsp";
	}

//	@PostMapping("/registration")
//	public String Register(@Valid @ModelAttribute(value = "user") User user, Model model, BindingResult result,
//			HttpSession session) {
//
//		User userFromDb = userService.findByEmail(user.getEmail());
//		model.addAttribute("loginUser", new LoggedInUser());
//
//		if (userFromDb != null) {
//			result.rejectValue("email", "unique", "Email already in database");
//		}
//
//		if (!user.getPassword().equals(user.getConfirm())) {
//			result.rejectValue("password", "passwordMatch", "Password must match Confirm Password");
//		}
//
//		if (result.hasErrors()) {
//			return "/auth/loginpage.jsp";
//		}
//
//	
//
//		if (user.getPassword().length() < 8) {
//			result.rejectValue("password", "passwordLength", "Password must be at least 8 characters long");
//		}
//
//
//		
//		String encyrptedPassword = BCrypt.hashpw(user.getPassword(), BCrypt.gensalt());
//		user.setPassword(encyrptedPassword);
//		
//		Long userId = userService.createUser(user).getId();
//		
//		session.setAttribute("loggedInUser", userId);
//
//		return "redirect:/";
//	}

	@PostMapping("/registration")
	public String Register(@Valid @ModelAttribute(value = "user") User user, Model model, BindingResult result,
	                       HttpSession session) {

	    model.addAttribute("loginUser", new LoggedInUser());

	    // Custom validation
	    if (userService.findByEmail(user.getEmail()) != null) {
	        result.rejectValue("email", "uniqueEmail", "Email is already taken");
	    }

	    if (!user.getPassword().equals(user.getConfirm())) {
	        result.rejectValue("password", "passwordMatch", "Password must match Confirm Password");
	    }


	    if (result.hasErrors()) {
	        return "/auth/loginpage.jsp";
	    }

	    // Hash password and proceed with registration
	    String encryptedPassword = BCrypt.hashpw(user.getPassword(), BCrypt.gensalt());
	    user.setPassword(encryptedPassword);

	    Long userId = userService.createUser(user).getId();

	    session.setAttribute("loggedInUser", userId);

	    return "redirect:/";
	}

	
	
	@PostMapping("/")
	public String login(@Valid @ModelAttribute(value = "loginObj") LoggedInUser loginUser, BindingResult result,
			HttpSession session, Model model) {

		if (result.hasErrors()) {
			model.addAttribute("user", new User());
			return "/auth/loginpage.jsp";
		}

		User userFromDb = userService.findByEmail(loginUser.getEmail());

		if (userFromDb == null) {
			result.rejectValue("email", "invalid", "Invalid login");
			return "auth/loginpage.jsp";
		}

		if (!BCrypt.checkpw(loginUser.getPassword(), userFromDb.getPassword())) {
			result.rejectValue("email", "invalid", "Invalid login");
		}

		session.setAttribute("loggedInUser", userFromDb.getId());

		return "redirect:/";
	}

	@GetMapping("/logout")
	public String logout(HttpSession session) {
		session.invalidate();
		return "redirect:/auth";
	}

}
