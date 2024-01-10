package com.codingdojo.bookclub.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.codingdojo.bookclub.models.Book;
import com.codingdojo.bookclub.models.User;
import com.codingdojo.bookclub.services.BookService;
import com.codingdojo.bookclub.services.UserService;

import jakarta.servlet.http.HttpSession;

@Controller
public class MainController {

	@Autowired
	public UserService userService;

	@Autowired
	public BookService bookService;

	@GetMapping("/")
	public String home(@ModelAttribute Book book, HttpSession session, Model model,
			RedirectAttributes redirectAttributes) {
		model.addAttribute("user", new User());
		if (session.getAttribute("loggedInUser") == null) {
			redirectAttributes.addFlashAttribute("notLoggedIn", "You must be logged in to view this page.");
			return "/auth/loginpage.jsp";
		}
		User userFromDb = userService.findOne((Long) session.getAttribute("loggedInUser"));
		model.addAttribute("loggedInUser", userFromDb.getUserName());

		ArrayList<User> allUsers = userService.all();
		ArrayList<Book> allBooks = bookService.all();

		model.addAttribute("allUsers", allUsers);
		model.addAttribute("allBooks", allBooks);

		return "index.jsp";

	}

}
