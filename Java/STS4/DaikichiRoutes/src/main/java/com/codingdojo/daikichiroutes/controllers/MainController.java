package com.codingdojo.daikichiroutes.controllers;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/daikichi")
public class MainController {
	@RequestMapping("")
	public String index() {
		return "Welcome!";
	}
	@RequestMapping("/today")
	public String today() {
		return "Today you will find luck in all your endeavors!!";
	}
	@RequestMapping("/tomorrow")
	public String tomorrow() {
		return "Tomorrow, an opportunity will arise, so be sure to be open to new ideas!";
	}
	@RequestMapping("/travel/{country}")
	public String travel(@PathVariable("country") String country){
		return "Congratulations! You will soon travel to " + country + "!";
	}
	@RequestMapping("/lotto/{num}")
	public String lotto(@PathVariable("num") int num) {
		if (num %2 == 0) {
			return "You will take a grand journey in the near future, but be weary of temping offers.";
		}
		return "You have enjoyed the fruits of your labor but now is a great time to spend with family and friends.";
	}

}
