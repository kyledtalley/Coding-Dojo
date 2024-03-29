package com.codingdojo.productsandcategories.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codingdojo.productsandcategories.models.Category;
import com.codingdojo.productsandcategories.models.Product;
import com.codingdojo.productsandcategories.repositories.CategoryRepository;
import com.codingdojo.productsandcategories.repositories.ProductRepository;

@Service
public class CategoryService {

	@Autowired
	private ProductRepository pRepo;
	
	@Autowired
	private CategoryRepository cRepo;
	
	public List<Category> findAllCategories(){
		return cRepo.findAll();
	}
	
	public Category addProductsToCategories(Long categoryId, Long productId) {
		Category oneCategory = cRepo.findById(categoryId).orElse(null);
		Product oneProduct = pRepo.findById(productId).orElse(null);
		oneCategory.getProducts().add(oneProduct);
		return oneCategory;
	}
	
	public Category createCategory(Category category) {
		return cRepo.save(category);
	}
	
	public Category findById(Long id) {
		return cRepo.findById(id).orElse(null);
	}
	
	
	public Category updateCategory(Category category) {
		return cRepo.save(category);
	}
	
	public List<Category> productsWithCategories(Product product){
		return cRepo.findAllByProducts(product);
	}
	
	public List<Category> findByProductsNotContains(Product product){
		 return cRepo.findByProductsNotContains(product);
	 }

	public ArrayList<Category> all() {
		return cRepo.findAll();
	}
}
