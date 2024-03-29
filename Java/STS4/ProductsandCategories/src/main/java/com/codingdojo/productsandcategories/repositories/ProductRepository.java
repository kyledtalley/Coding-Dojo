package com.codingdojo.productsandcategories.repositories;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.codingdojo.productsandcategories.models.Category;
import com.codingdojo.productsandcategories.models.Product;

@Repository
public interface ProductRepository extends CrudRepository<Product, Long>{

	ArrayList<Product> findAll();
   
    List<Product> findAllByCategories(Category category);
    
    List<Product> findByCategoriesNotContains(Category category);

	
}
