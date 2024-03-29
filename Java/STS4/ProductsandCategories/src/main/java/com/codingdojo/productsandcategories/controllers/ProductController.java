package com.codingdojo.productsandcategories.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.codingdojo.productsandcategories.models.Category;
import com.codingdojo.productsandcategories.models.Product;
import com.codingdojo.productsandcategories.services.CategoryService;
import com.codingdojo.productsandcategories.services.ProductCategoryService;
import com.codingdojo.productsandcategories.services.ProductService;

import jakarta.validation.Valid;

@Controller
@RequestMapping("/products")
public class ProductController {

	
	@Autowired
	private ProductCategoryService pcService;
	@Autowired
	private ProductService pService;

	@Autowired
	private CategoryService cService;

	@GetMapping("/new")
	public String productForm(@ModelAttribute("product") Product product, Model model) {
		return "/products/new.jsp";
	}

	@PostMapping("/new")
	public String newProduct(@Valid @ModelAttribute("product") Product product, BindingResult result) {
		if (result.hasErrors()) {
			return "/products/new.jsp";
		}

		pService.createProduct(product);
		return "redirect:/";

	}

	@GetMapping("/{id}")
	public String display(Model model, @PathVariable Long id, RedirectAttributes redirectAttributes) {
		Product oneProduct = pService.findOne(id);
		
		
		
		ArrayList<Category> allCategories = cService.all();
		List<Category> productsWithCategories = cService.productsWithCategories(oneProduct);
		model.addAttribute("categories", allCategories);
		
	
		if(oneProduct == null) {
			redirectAttributes.addFlashAttribute("noProduct", "Product was not found.");
			return "redirect:/";
			
		}
		model.addAttribute("product", oneProduct);
		model.addAttribute("allCategories", allCategories);
		model.addAttribute("productsWithCategories", productsWithCategories);
		
		return "/products/display.jsp";
	}

	@PostMapping("/add")
	public String addCategoriesToProduct(@RequestParam(value = "productId") Long productId, @RequestParam (value = "categoryId") Long categoryId){
		pcService.addCategoriesToProduct(productId, categoryId);

		return "redirect:/";
	}
}
