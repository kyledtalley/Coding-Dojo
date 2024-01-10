package com.codingdojo.JavaExamPrep.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codingdojo.JavaExamPrep.models.Game;
import com.codingdojo.JavaExamPrep.repositories.GameRepository;

@Service
public class GameService {

	@Autowired
	private GameRepository gameRepo;
	
	public ArrayList<Game> all(){
		return gameRepo.findAll();
	}
	
	public Game createGame(Game game) {
		return gameRepo.save(game);
	}
	
	public Game findOne(Long gameId) {
		return gameRepo.findById(gameId).orElse(null);
	}
	
	public Game updateGame(Game game) {
		return gameRepo.save(game);
	}
	
	public void deleteGame(Long gameId) {
		gameRepo.deleteById(gameId);
	}
	
}
