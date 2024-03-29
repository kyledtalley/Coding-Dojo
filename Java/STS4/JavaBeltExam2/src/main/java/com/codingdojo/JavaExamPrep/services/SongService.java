package com.codingdojo.JavaExamPrep.services;



import java.util.ArrayList;

import org.springframework.stereotype.Service;

import com.codingdojo.JavaExamPrep.models.Song;
import com.codingdojo.JavaExamPrep.repositories.SongRepository;

@Service
public class SongService {
	
	private final SongRepository repo;
	
	public SongService(SongRepository SongRepo) {
		this.repo = SongRepo;
	}
	
	public ArrayList<Song> all() {
		return repo.findAll();
	}
	
	public Song findOne(Long id) {
		return repo.findById(id).orElse(null);
	}
	
	public Song createSong(Song Song) {
		return repo.save(Song);
	}
	

	public Song updateSong(Song Song) {
		return repo.save(Song);
	}
	
	public void deleteSong(Long id) {
		repo.deleteById(id);
	}

	
	
	
	

}
