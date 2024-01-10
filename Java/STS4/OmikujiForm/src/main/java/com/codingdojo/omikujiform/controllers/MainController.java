package com.codingdojo.omikujiform.controllers;


import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
public class MainController {
	@GetMapping("/")
	public String index() {
		return "index.jsp";
	}

	@PostMapping("/process")
	public String process(@RequestParam("num") int num, @RequestParam("city") String city, @RequestParam("name") String name,
			@RequestParam("profession") String profession, @RequestParam("livingThing") String livingThing,
			@RequestParam("somethingNice") String somethingNice, RedirectAttributes redirectAttributes, Model model) {
		if (num < 5) {
			redirectAttributes.addFlashAttribute("error", "Nah that's too small");
			return "redirect:/";
		}
		model.addAttribute("num", num);
		model.addAttribute("city", city);
		model.addAttribute("name", name);
		model.addAttribute("profession", profession);
		model.addAttribute("livingThing", livingThing);
		model.addAttribute("somethingNice", somethingNice);

		return "display.jsp";
	}
}
