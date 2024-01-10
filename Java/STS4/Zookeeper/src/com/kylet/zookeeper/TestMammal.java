package com.kylet.zookeeper;

public class TestMammal {

	public static void main(String[] args) {
	// TODO Auto-generated method stub

		Gorilla george = new Gorilla();
		
		george.throwSomething();
		george.throwSomething();
		george.throwSomething();
		
		george.eatBananas();
		george.eatBananas();
		
		george.climb();
		
		george.displayEnergy();
		
		Bat chad = new Bat();
		
		chad.attackTown();
		chad.attackTown();
		chad.attackTown();
		
		chad.eatHumans();
		chad.eatHumans();
		
		chad.fly();
		chad.fly();
		
		chad.displayEnergy(chad.energy);
	}
	

}


