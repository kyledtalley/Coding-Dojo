package com.codingdojo.JavaExamPrep.repositories;

import java.util.ArrayList;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.codingdojo.JavaExamPrep.models.Book;

@Repository
public interface BookRepository extends CrudRepository<Book, Long>{
	public ArrayList<Book> findAll();
}
