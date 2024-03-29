package com.codingdojo.productsandcategories.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.codingdojo.productsandcategories.models.Category;
import com.codingdojo.productsandcategories.models.Product;
import com.codingdojo.productsandcategories.services.CategoryService;

import jakarta.validation.Valid;

@Controller
@RequestMapping("/categories")
public class CategoryController {
	
	@Autowired
	private CategoryService cService;
	
	@GetMapping("/new")
	public String categoryForm(@ModelAttribute("category")Category category, Model model) {
		return "/categories/new.jsp";
	}
	
	@PostMapping("/new")
	public String newCategories(@Valid @ModelAttribute("category") Category category, BindingResult result) {
		if(result.hasErrors()) {
			return "/categories/new.jsp";
		}
		
		cService.createCategory(category);
		return "redirect:/";
		
	}
}
