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

import com.codingdojo.JavaExamPrep.models.Game;
import com.codingdojo.JavaExamPrep.models.User;
import com.codingdojo.JavaExamPrep.services.GameService;
import com.codingdojo.JavaExamPrep.services.UserService;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;


@Controller
@RequestMapping("/games")
public class HomeController {

	@Autowired
	private UserService authService;
	
	@Autowired
	private GameService gameService;
	
	@GetMapping("")
	public String Home(@ModelAttribute("game") Game game, HttpSession session, Model model, RedirectAttributes redirectAttributes) {
		
		Long loggedInId = (Long) session.getAttribute("loggedInUser");
		
		if(session.getAttribute("loggedInUser") == null) {
			redirectAttributes.addFlashAttribute("notLoggedIn", "You must be logged in to view this page");
			return "redirect:/auth";
		}
		ArrayList<Game> allGames = gameService.all();
		
		User loggedInUser = authService.findOne(loggedInId);
		model.addAttribute("loggedInUser", loggedInUser);
		model.addAttribute("allGames", allGames);

		return "/game/home.jsp";
	}
	
	
	
	@GetMapping("/create")
	public String createPage(Model model, HttpSession session, @ModelAttribute Game game) {
		User user = authService.findOne((Long) session.getAttribute("loggedInUser"));
		model.addAttribute("user", user);
		
		return "/game/create.jsp";
	}
	
	
	@PostMapping("/create")
	public String processCreateBook(@Valid @ModelAttribute("game") Game game, BindingResult result, Model model, HttpSession session) {
		if(result.hasErrors()) {
			
			return "/game/create.jsp";
		}
		
		gameService.createGame(game);
		return "redirect:/games";
	}
	
	
	@GetMapping("/edit/{id}")
	public String editGameForm(@PathVariable Long id, RedirectAttributes redirectAttributes, Model model, HttpSession session) {
		Game gameToUpdate = gameService.findOne(id);
		Long loggedInId = (Long) session.getAttribute("loggedInUser");
		User loggedInUser = authService.findOne(loggedInId);
		model.addAttribute("loggedInUser", loggedInUser);
		
		if(gameToUpdate == null) {
			redirectAttributes.addFlashAttribute("noGameToUpdate", "Game was not found");
			return "redirect:/games";
		}
		model.addAttribute("game", gameToUpdate);
		
		return "/game/edit.jsp";
	}
	
	@PutMapping("/{id}")
	public String updateGame(@Valid @ModelAttribute Game game, BindingResult result, @PathVariable Long id, Model model) {
		if(result.hasErrors()) {
			return "/game/edit.jsp";
		}
		
		gameService.updateGame(game);
		return "redirect:/games";
	}
	
	
	@GetMapping("/{id}")
	public String displayGame(Model model, @PathVariable Long id, RedirectAttributes redirectAttributes) {
		Game oneGame = gameService.findOne(id);
		
		model.addAttribute("game", oneGame);
		
		if(oneGame == null) {
			redirectAttributes.addFlashAttribute("noGameToDisplay", "Game was not found");
			return "redirect:/games";
		}
		
		return "/game/display.jsp";
		
	}
	
	@DeleteMapping("/{id}")
	public String deleteGame(@PathVariable Long id) {
		gameService.deleteGame(id);
		return "redirect:/games";
	}
	
	
}
