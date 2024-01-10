package com.codingdojo.JavaExamPrep.controllers;

import java.util.ArrayList;

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
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.codingdojo.JavaExamPrep.models.Book;
import com.codingdojo.JavaExamPrep.models.User;
import com.codingdojo.JavaExamPrep.services.BookService;
import com.codingdojo.JavaExamPrep.services.UserService;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

@Controller
@RequestMapping("/books")
public class HomeController {

	@Autowired
	private UserService authService;
	@Autowired
	private BookService bookService;

	@GetMapping("")
	public String Home(@ModelAttribute("book") Book book, HttpSession session, Model model,
			RedirectAttributes redirectAttributes) {

		Long loggedInId = (Long) session.getAttribute("loggedInUser");
		if (session.getAttribute("loggedInUser") == null) {
			redirectAttributes.addFlashAttribute("notLoggedIn", "You must be logged in to view this page.");
			return "redirect:/auth";
		}
		ArrayList<Book> allBooks = bookService.all();
		User loggedInUser = authService.findOne(loggedInId);
		model.addAttribute("allBooks", allBooks);
		model.addAttribute("loggedInUser", loggedInUser);

		return "/books/home.jsp";
	}

	@GetMapping("/create")
	public String createPage(Model model, HttpSession session, @ModelAttribute Book book) {
		User user = authService.findOne((Long) session.getAttribute("loggedInUser"));
		model.addAttribute("user", user);

		return "/books/create.jsp";

	}

	@PostMapping("/create")
	public String processCreateBook(@Valid @ModelAttribute("book") Book book, BindingResult result, Model model) {
		if (result.hasErrors()) {
			return "/books/home.jsp";

		}
		bookService.createBook(book);
		return "redirect:/books";
	}

	@GetMapping("/edit/{id}")
	public String editBookForm(@PathVariable Long id, RedirectAttributes redirectAttributes, Model model){
		Book bookToUpdate = bookService.findOne(id);
		
		if(bookToUpdate == null) {
			redirectAttributes.addFlashAttribute("noPizza", "Pizza was not found");
			return "redirect:/";
		}
		
		model.addAttribute("book", bookToUpdate);
		
		return "edit.jsp";
	}
	

	@PutMapping("/{id}")
	public String updateBook(@Valid @ModelAttribute Book book, BindingResult result, @PathVariable Long id, Model model) {
		
		if(result.hasErrors()) {
			return "edit.jsp";
		}
		
		bookService.updateBook(book);
		return "redirect:/books";
		
	}
	
	@GetMapping("/{id}")
	public String displayBook(Model model, @PathVariable Long id, RedirectAttributes redirectAttributes) {
		Book oneBook = bookService.findOne(id);
		
		model.addAttribute("book", oneBook);
		
		if(oneBook == null) {
			redirectAttributes.addFlashAttribute("noBook", "Book was not found");
			return "redirect:/books";
		}
		
		
		
		
		return "display.jsp";
	}
	
	
	@DeleteMapping("/{id}")
	public String deleteBook(@PathVariable Long id) {
		bookService.deleteBook(id);
		return "redirect:/books";
	}
}
