package com.codingdojo.productsandcategories.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.codingdojo.productsandcategories.models.Category;
import com.codingdojo.productsandcategories.models.Product;
import com.codingdojo.productsandcategories.services.CategoryService;
import com.codingdojo.productsandcategories.services.ProductService;

@Controller
public class MainController {

	@Autowired
	private ProductService pService;
	
	@Autowired
	private CategoryService cService;
	
	@GetMapping("")
	public String index(@ModelAttribute("product")Product product, Model model, RedirectAttributes redirectAttributes) {
		
		ArrayList<Product> allProducts = pService.all();
		ArrayList<Category> allCategories = cService.all();
		
		model.addAttribute("allProducts", allProducts);
		model.addAttribute("allCategories", allCategories);
		return "dashboard.jsp";
	}
	
}
