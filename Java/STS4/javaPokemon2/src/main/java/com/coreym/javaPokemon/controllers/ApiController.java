package com.coreym.javaPokemon.controllers;

import java.io.UnsupportedEncodingException;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.reactive.function.client.WebClient;

import com.coreym.javaPokemon.models.Pokemon;
import com.coreym.javaPokemon.models.PokemonList;

@RestController
public class ApiController {

	private final String API = "https://pokeapi.co/api/v2/";
	private final WebClient client = WebClient.create();

	@GetMapping("/api/pokemon")
	public PokemonList getAllPokemon(@RequestParam(value = "limit", defaultValue = "2000") int limit, @RequestParam("offset") Integer offset) {
	    // Adjust the API URL construction to include the 'limit' parameter
	    String apiUrl = API + "pokemon?limit=" + limit;

	    PokemonList response = client.get()
	        .uri(apiUrl)
	        .retrieve()
	        .bodyToMono(PokemonList.class)
	        .block();

	    return response;
	}


	@GetMapping("/api/pokemon/get")
	public Pokemon fetchData(String url) throws UnsupportedEncodingException {
		
		System.out.println(url);
		Pokemon response = client.get()
				.uri(url)
				.retrieve()
				.bodyToMono(Pokemon.class)
				.block();

		return response;
	}

}
