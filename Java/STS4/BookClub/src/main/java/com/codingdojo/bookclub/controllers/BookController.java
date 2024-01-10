package com.codingdojo.bookclub.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.codingdojo.bookclub.models.Book;
import com.codingdojo.bookclub.models.User;
import com.codingdojo.bookclub.services.BookService;
import com.codingdojo.bookclub.services.UserService;

import jakarta.validation.Valid;

@Controller
@RequestMapping("/books")
public class BookController {

	@Autowired
	private UserService uService;

	@Autowired
	private BookService bService;

	@GetMapping("/register")
	public String register(@ModelAttribute(value = "book") Book book, Model model) {
		List<User> allUsers = uService.all();
		model.addAttribute("allUsers", allUsers);
		return "/books/register.jsp";
	}

	@PostMapping("/register")
	public String registerForm(@Valid @ModelAttribute(value = "book") Book book, BindingResult result, Model model) {
		if (result.hasErrors()) {
			List<User> allUsers = uService.all();
			model.addAttribute("allUsers", allUsers);
			return "/books/register.jsp";
		}

		bService.createBook(book);
		return "redirect:/";
	}

	@PutMapping("/books/{id}")
	public String updateBook(@Valid @ModelAttribute (value="book")Book book, BindingResult result, @PathVariable Long id,
			Model model) {

		
		Book oneBook = bService.findOne(id);
		if (result.hasErrors()) {
			return "edit.jsp";
		}
		model.addAttribute("book", oneBook);
		
		bService.updateBook(book);

		return "redirect:/";
	}

	@DeleteMapping("/books")
	public String deleteBook(@PathVariable Long id) {
		bService.deleteBook(id);
		return "redirect:/";
	}

}
