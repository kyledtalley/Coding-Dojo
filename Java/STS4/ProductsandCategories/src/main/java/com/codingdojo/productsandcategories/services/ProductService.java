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
public class ProductService {

	@Autowired
	private ProductRepository pRepo;
	
	@Autowired
	private CategoryRepository cRepo;
	
	public ArrayList<Product> all(){
		return pRepo.findAll();
	}
	
	public Product addCategoriesToProducts(Long categoryId, Long productId) {
		Product oneProduct = pRepo.findById(productId).orElse(null);
		Category oneCategory = cRepo.findById(categoryId).orElse(null);
		oneCategory.getProducts().add(oneProduct);
		return oneProduct;
	}
	
	public Product createProduct(Product product) {
		return pRepo.save(product);
	}
	
	public Product updateProduct(Product product) {
		return pRepo.save(product);
	}
	public List<Product> categoriesWithProducts(Category category){
		return pRepo.findAllByCategories(category);
	}
	
	public List<Product> findByCategoriesNotContains(Category category){
		return pRepo.findByCategoriesNotContains(category);
	}
	
	public Product findOne(Long productId) {
		return pRepo.findById(productId).orElse(null);
	}
}
