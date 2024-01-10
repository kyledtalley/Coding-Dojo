package com.kylet.zookeeper;

public class Bat extends Mammal{
	Integer energy = 300;
	public Bat() {
	}
	public void fly() {
		energy -= 50;
		System.out.println("\nBat is airborne! Take cover!\n");
		System.out.format("Bat has lost 50 energy!\nNew energy: %d", energy);
	}
	public void eatHumans() {
		energy +=25;
		System.out.println("\nBat has eaten humans! Bat is very happy and cute.\n");
		System.out.format("Bat has gained 25 energy!\nNew energy: %d", energy);
	}
	public void attackTown() {
		energy -= 100;
		System.out.println("\nBat has attacked the town center! Everyone but the important people have perished! Run away if you're important!!\n");
		System.out.format("Bat has lost 100 energy!\nNew energy: %d \n", energy);
	}
	
}
