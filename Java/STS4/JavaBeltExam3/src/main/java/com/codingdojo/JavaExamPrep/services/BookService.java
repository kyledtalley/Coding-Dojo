package com.codingdojo.JavaExamPrep.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codingdojo.JavaExamPrep.models.Book;
import com.codingdojo.JavaExamPrep.repositories.BookRepository;

@Service
public class BookService {
	@Autowired
	private BookRepository bookRepo;

	public ArrayList<Book> all() {
		return bookRepo.findAll();
	}
	
	public Book createBook(Book book) {
		return bookRepo.save(book);
	}
	
	public Book findOne(Long bookId) {
		return bookRepo.findById(bookId).orElse(null);
	}
	
	public Book updateBook(Book book) {
		return bookRepo.save(book);
	}
	
	public void deleteBook(Long bookId) {
		bookRepo.deleteById(bookId);
	}
}
