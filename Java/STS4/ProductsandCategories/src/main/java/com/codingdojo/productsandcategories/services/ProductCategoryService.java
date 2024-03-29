package com.codingdojo.productsandcategories.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codingdojo.productsandcategories.models.Category;
import com.codingdojo.productsandcategories.models.Product;
import com.codingdojo.productsandcategories.repositories.CategoryRepository;
import com.codingdojo.productsandcategories.repositories.ProductRepository;

@Service
public class ProductCategoryService {

	@Autowired
	ProductRepository pRepo;

	@Autowired
	CategoryRepository cRepo;

	public Product addCategoriesToProduct(Long productId, Long categoryId) {
		
		Product oneProduct = pRepo.findById(productId).orElse(null);
		Category oneCategory = cRepo.findById(categoryId).orElse(null);
		oneProduct.getCategories().add(oneCategory);
		return pRepo.save(oneProduct);
	}

}
