package com.codingdojo.review.models;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
@Table(name="sodas")
public class Soda {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@NotNull
	@NotBlank
	@NotEmpty
	@Size(min= 3, message= "Soda name must have more than at least 3 characters")
	private String name;
	
	@Min(value = 0, message = "Sorry, but our products don't take sugar from you")
	private Integer sugars;
	
	@NotNull
	private Boolean isCaffeinated;
	
	@DateTimeFormat(pattern="yyyy-MM-dd")
	@Column(updatable=false)
	private Date createdAt;
	
	@DateTimeFormat(pattern="yyyy-MM-dd")
	@Column(updatable=true)
	private Date updatedAt;
	
	public Soda() {
		
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Integer getSugars() {
		return sugars;
	}

	public void setSugars(Integer sugars) {
		this.sugars = sugars;
	}

	public Boolean getIsCaffeinated() {
		return isCaffeinated;
	}

	public void setIsCaffeinated(Boolean isCaffeinated) {
		this.isCaffeinated = isCaffeinated;
	}
	
	@PrePersist
	public void onCreate() {
		this.createdAt = new Date();
	}
	
	@PreUpdate
	protected void onUpdate() {
		this.updatedAt = new Date();
	}
}
