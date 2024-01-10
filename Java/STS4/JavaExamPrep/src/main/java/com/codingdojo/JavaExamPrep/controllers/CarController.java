package com.codingdojo.JavaExamPrep.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.codingdojo.JavaExamPrep.models.Car;
import com.codingdojo.JavaExamPrep.models.User;
import com.codingdojo.JavaExamPrep.services.CarService;
import com.codingdojo.JavaExamPrep.services.UserService;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

@Controller
@RequestMapping("/cars")
public class CarController {

	@Autowired
	private CarService carService;

	@Autowired
	private UserService userService;

	@GetMapping("")
	public String carForm(@ModelAttribute("car") Car car, HttpSession session, Model model) {

		User user = userService.findOne((Long) session.getAttribute("loggedInUser"));
		model.addAttribute("user", user);
		return "/cars/create.jsp";
	}

	@PostMapping("")
	public String addCar(@Valid @ModelAttribute("car") Car car, BindingResult result) {

		if (result.hasErrors()) {
			return "/cars/create.jsp";
		}

		carService.createCar(car);

		return "redirect:/";
	}

	@GetMapping("/{id}")
	public String viewCar(@PathVariable("id") Long id, Model model) {
		Car oneCar = carService.findOned(id);
		model.addAttribute("car", oneCar);

		return "/cars/viewCar.jsp";

	}

	@GetMapping("/edit/{id}")
	public String editCarForm( HttpSession session, Model model, @PathVariable("id") Long id) {

		User user = userService.findOne((Long) session.getAttribute("loggedInUser"));
		Car carToUpdate = carService.findOned(id);
		model.addAttribute("user", user);
		model.addAttribute("car", carToUpdate);
		
		
		return "/cars/edit.jsp";
	}
	
	@PutMapping("/{id}")
	public String updateCar(@Valid @ModelAttribute("car") Car car, @PathVariable("id") Long id, BindingResult result, Model model) {
		
		if(result.hasErrors()) {
			Car carToUpdate = carService.findOned(id);
			model.addAttribute("car", carToUpdate);
			return "/cars/edit.jsp";
		}
		
		carService.updateCar(car);
		return"redirect:/";
		
	}
	
	@DeleteMapping("/{id}")
	public String deleteCar(@PathVariable("id") Long id) {
		carService.deleteCar(id);
		return "redirect:/";
	}
	

}
