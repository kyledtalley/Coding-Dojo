package com.codingdojo.loginandregistration.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.codingdojo.loginandregistration.models.User;
import com.codingdojo.loginandregistration.services.UserService;

import jakarta.servlet.http.HttpSession;

@Controller
public class MainController {

	@Autowired
	public UserService userService;
	
	@GetMapping("/")
	public String home(HttpSession session, Model model, RedirectAttributes redirectAttributes) {
		
		if(session.getAttribute("loggedInUser")==null) {
			redirectAttributes.addFlashAttribute("notLoggedIn", "You must be logged in to view this page.");
			return "redirect:/auth/login";
		}
		ArrayList<User> allUsers = userService.all();
		User userFromDb = userService.findOne((Long)session.getAttribute("loggedInUser"));
		model.addAttribute("loggedInUser", userFromDb.getUserName());
		model.addAttribute("allUsers", allUsers);
		
		
		return "index.jsp";
	}
}
