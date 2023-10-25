#classes and static methods
#associating classes together

#OOP
#4 Pillars of OOP
    #Inheritance
    #Encapsulation
    #Polymorphism
    #Extraction

#D.R.Y.
    #Don't repeat yourself

class Animal:
    def __init__(self, name, species):
        self.name = name
        self.species = species
        self.warm_blooded = True

    def make_sound(self, sound):
        print(f"This {self.species} says {sound}!")

class Mammal(Animal):
    def __init__(self, name, species, legs):
        super().__init__(name, species)
        self.live_birth = True
        self.land = True
        self.num_legs = legs

    def make_sound(self, sound):
        super().make_sound(sound)
        print("ROAAAAAAR")

class Cat(Mammal):
    def __init__(self, name, species, legs, friendly):
        super().__init__ (name, species, legs)
        self.friendly = friendly



cow = Mammal('Bessy', 'cow', 4)

cow.make_sound('mooooo')


cat = Cat('Whiskers', 'cat', 4, False)

print(cat.friendly)
