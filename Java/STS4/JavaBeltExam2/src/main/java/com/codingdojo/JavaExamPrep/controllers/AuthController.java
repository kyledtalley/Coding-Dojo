package com.codingdojo.JavaExamPrep.controllers;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.codingdojo.JavaExamPrep.models.LoginUser;
import com.codingdojo.JavaExamPrep.models.User;
import com.codingdojo.JavaExamPrep.services.UserService;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

@Controller
@RequestMapping("/")
public class AuthController {

	@Autowired
	private UserService authService;

	@GetMapping("")
	public String loginPage(@ModelAttribute(value = "user") User user, Model model) {
		model.addAttribute("loginUser", new LoginUser());

		return "/auth/index.jsp";
	}

	@PostMapping("/registration")
	public String register(@Valid @ModelAttribute(value = "user") User user, BindingResult result, Model model, HttpSession session) {

		User userFromDb = authService.findUserByEmail(user.getEmail());
		model.addAttribute("loginUser", new LoginUser());

		if (userFromDb != null) {
			result.rejectValue("email", "unique", "Email already in database");
		}
		if (!user.getPassword().equals(user.getConfirmPassword())) {
			result.rejectValue("password", "password_match", "Password must match confirm password");
		}

		if (result.hasErrors()) {
			return "/auth/index.jsp";
		}

		String encryptedPassword = BCrypt.hashpw(user.getPassword(), BCrypt.gensalt());
		user.setPassword(encryptedPassword);
		Long userId = authService.createUser(user).getId();
		session.setAttribute("loggedInUser", userId);
		return "redirect:/";

	}

	@PostMapping("/login")
	public String login(@Valid @ModelAttribute(value = "loginUser") LoginUser loginUser, BindingResult result,
			Model model, HttpSession session) {

		User userFromDb = authService.findUserByEmail(loginUser.getEmail());
		model.addAttribute("user", new User());

		if (userFromDb == null) {
			result.rejectValue("email", "invalid", "Invalid login");
			return "/auth/index.jsp";
		}

		if (!BCrypt.checkpw(loginUser.getPassword(), userFromDb.getPassword())) {
			result.rejectValue("email", "invalid", "Invalid login");
			return "/auth/index.jsp";
		}

		if (result.hasErrors()) {
			return "/auth/index.jsp";
		}
		Long userId = userFromDb.getId();
		session.setAttribute("loggedInUser", userId);
		return "redirect:/songs";
	}
	

}
