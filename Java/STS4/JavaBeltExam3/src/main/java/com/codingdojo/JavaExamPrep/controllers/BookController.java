package com.codingdojo.JavaExamPrep.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.codingdojo.JavaExamPrep.models.Book;
import com.codingdojo.JavaExamPrep.models.User;
import com.codingdojo.JavaExamPrep.services.BookService;
import com.codingdojo.JavaExamPrep.services.UserService;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

@Controller
@RequestMapping("/books")
public class BookController {

	@Autowired
	private BookService bService;

	@Autowired
	private UserService uService;

	@Autowired
	private HttpSession session;

	@GetMapping("")
	public String bookForm(@ModelAttribute("book") Book book, Model model) {

		User user = uService.findOne((Long) session.getAttribute("loggedInUser"));
		model.addAttribute("user", user);
		return "/books/create.jsp";

	}
	
	@PostMapping("")
	public String addBook(@Valid @ModelAttribute("book") Book book, BindingResult result) {
		if(result.hasErrors()) {
			return "/books/create.jsp";
		}
		
		bService.createBook(book);
		return "redirect:/";
	}

	
	
}
