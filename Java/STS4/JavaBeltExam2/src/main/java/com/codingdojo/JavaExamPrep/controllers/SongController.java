package com.codingdojo.JavaExamPrep.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.codingdojo.JavaExamPrep.models.Song;
import com.codingdojo.JavaExamPrep.models.User;
import com.codingdojo.JavaExamPrep.services.SongService;
import com.codingdojo.JavaExamPrep.services.UserService;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

@Controller
@RequestMapping("/songs")
public class SongController {

	@Autowired
	private UserService authService;

	@Autowired
	private SongService sService;

	@GetMapping("")
	public String Home(@ModelAttribute Song song, HttpSession session, Model model,
			RedirectAttributes redirectAttributes) {
		Long loggedInId = (Long) session.getAttribute("loggedInUser");
		if (session.getAttribute("loggedInUser") == null) {
			redirectAttributes.addFlashAttribute("notLoggedIn", "You must be logged in to view this page.");
			return "redirect:/";
		}
		
		ArrayList<Song> allSongs = sService.all();
/*///*///*//		/*
//////		 * if (song.getLyrics() == null) { ArrayList<String> lyricsList =
//////		 * song.getLyrics();
//////		 * int numOfCollabs = lyricsList.size(); model.addAttribute("numOfCollabs",
//////		 * numOfCollabs); } 
//////		 * 
//////		 * else { ArrayList<String> lyricsList = song.getLyrics();
//////		 * int numOfCollabs = lyricsList.size(); model.addAttribute("numOfCollabs",
//////		 * numOfCollabs); }
//////		 */
/*/*/		
		model.addAttribute("allSongs", allSongs);
		User loggedInUser = authService.findOne(loggedInId);
		model.addAttribute("loggedInUser", loggedInUser);

		return "/songs/home.jsp";
	}

	@GetMapping("/create")
	public String createPage(Model model, HttpSession session, @ModelAttribute Song song) {
		User user = authService.findOne((Long) session.getAttribute("loggedInUser"));
		model.addAttribute("user", user);

		return "/songs/create.jsp";
	}

	@PostMapping("/create")
	public String processCreateBook(@Valid @ModelAttribute("song") Song song, BindingResult result, Model model,
			HttpSession session) {
		if (result.hasErrors()) {

			return "/songs/create.jsp";
		}

		sService.createSong(song);
		return "redirect:/songs";
	}

	
	@GetMapping("/songs/{id}")
	public String viewSong(@PathVariable("id") Long id, Model model) {
		Song oneSong = sService.
	}
}
