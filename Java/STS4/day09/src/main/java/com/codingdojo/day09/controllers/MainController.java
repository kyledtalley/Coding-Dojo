package com.codingdojo.day09.controllers;

import java.util.ArrayList;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import jakarta.servlet.http.HttpSession;

@Controller
public class MainController {

	@GetMapping("/")
	public String index(HttpSession session) {
		ArrayList<String> pies = new ArrayList<>();
		pies.add("My pie");
		session.setAttribute("pies", pies);
		return "index.jsp";
	}

	@PostMapping("/process")
	public String process(@RequestParam("secret") String secret, @RequestParam("secretNumber") Integer secretNumber,
			RedirectAttributes redirectAttributes, HttpSession session) {
		if(secretNumber<10) {
			redirectAttributes.addFlashAttribute("error","Nah that's too small");
			return "redirect:/";
		}
		session.setAttribute("secret", secret);
		session.setAttribute("secretNumber", secretNumber);

		return "redirect:/display";
	}

	@GetMapping("/display")
	public String display(Model model, HttpSession session) {
		String secretWord = session.getAttribute("secret").toString();
		ArrayList<String> pies = (ArrayList<String>) session.getAttribute("pies");
		System.out.println(pies.get(0));
		model.addAttribute("pies", pies);
		model.addAttribute("secret", secretWord);
		return "display.jsp";
	}

	@GetMapping("/word")
	public String myWord(HttpSession session) {
		System.out.println(session.getAttribute("myFavWord"));

		return "index.jsp";
	}
}
