package com.codingdojo.JavaExamPrep.repositories;

import java.util.ArrayList;

import org.springframework.data.repository.CrudRepository;

import com.codingdojo.JavaExamPrep.models.Song;

public interface SongRepository extends CrudRepository<Song, Long>{

	ArrayList<Song> findAll();
	
}
