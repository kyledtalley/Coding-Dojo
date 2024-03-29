package com.coreym.javaPokemon.controllers;

import java.io.UnsupportedEncodingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.coreym.javaPokemon.models.Pokemon;
import com.coreym.javaPokemon.models.PokemonList;
import com.coreym.javaPokemon.models.PokemonStat;

@Controller
public class MainController {
	
	@Autowired
	private ApiController apiController;
	
	@GetMapping("/")
	public String Home(Model model) {
		PokemonList response = apiController.getAllPokemon(10000);
		model.addAttribute("pokemonList", response);
		return "index.jsp";
	}
	
	@GetMapping("/pokemon/get")
	public String getPokemon(@RequestParam("url") String url, Model model) throws UnsupportedEncodingException {
		Pokemon response = apiController.fetchData(url);
		
		PokemonStat[] stats = response.getStats();
		model.addAttribute("defaultSprite", response.getSprites().getNewImageUrls().getOfficialArtworkSprites().getFront_default());
		model.addAttribute("stats", stats);
		return "pokemon.jsp";
	}

}
