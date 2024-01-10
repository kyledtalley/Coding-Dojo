package com.codingdojo.bookclub.services;

import java.util.ArrayList;

import org.springframework.stereotype.Service;

import com.codingdojo.bookclub.models.Book;
import com.codingdojo.bookclub.repositories.BookRepository;

@Service
public class BookService {

	private final BookRepository bookRepo;

	public BookService(BookRepository bookRepo) {
		this.bookRepo = bookRepo;
	}

	public ArrayList<Book> all(){
		return bookRepo.findAll();
	}
	
	public Book findOne(Long id) {
		return bookRepo.findById(id).orElse(null);
	}
	
	public Book createBook(Book user) {
		return bookRepo.save(user);
	}
	
	public Book updateBook(Book user) {
		return bookRepo.save(user);
	}
	
	public void deleteBook(Long id) {
		bookRepo.deleteById(id);
		
	}
	
}
