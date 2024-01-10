package com.kylet.zookeeper;

public class Mammal {
	public Integer energy = 100;
	public Mammal() {
		
	}

	public Integer getEnergy() {
		return energy;
	}
	public void setEnergy(Integer energy) {
		this.energy = energy;
	}
	
	public void displayEnergy(Integer energy) {
		System.out.println("Energy level: ");
		System.out.println(energy + "\n");
	}
	
}
