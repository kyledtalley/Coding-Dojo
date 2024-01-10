package com.codingdojo.JavaExamPrep.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.codingdojo.JavaExamPrep.models.Car;
import com.codingdojo.JavaExamPrep.models.User;
import com.codingdojo.JavaExamPrep.services.CarService;
import com.codingdojo.JavaExamPrep.services.UserService;

import jakarta.servlet.http.HttpSession;

@Controller
public class HomeController {

	@Autowired
	private UserService authService;
	
	@Autowired
	private CarService carService;
	
	
	@GetMapping("/")
	public String Home(HttpSession session, Model model) {
		
		Long loggedInId = (Long) session.getAttribute("loggedInUser");
		
		User loggedInUser = authService.findOne(loggedInId);
		ArrayList<Car> allCars = carService.all();
		model.addAttribute("loggedInUser", loggedInUser);
		model.addAttribute("allCars", allCars);
		
		
		return "home.jsp";
	}
	
	
}
