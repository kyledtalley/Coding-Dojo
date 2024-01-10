package com.codingdojo.jpademo.repositories;

import java.util.ArrayList;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.codingdojo.jpademo.models.Book;

@Repository
public interface BookRepository extends CrudRepository<Book,Long>{
	ArrayList<Book> findAll();
	
	ArrayList<Book> findByDescriptionContaining(String search);
	
	Long countByTitleContaining(String search);
	
	Long deleteByTitleStartingWith(String search);
}
