from bizaway.scripts.Parameters import Parameters
from typing import List, Set, Generator
from Operators import Operators, AddCar, AddBike, AssignedCar, AssignedBike, ChangeCar, ChangeBike

class StateRepr (object):
    def __init__(self, params : Parameters, list_cars : list, list_bikes : list):
        self.params = params
        self.list_cars = list_cars
        self.list_bikes = list_bikes
    
    def copy(self):
        new_param = params
        new_list_cars = self.new_list_cars
        new_list_bikes = self.new_list_bikes
        newState = StateRepr(new_param, new_list_cars, new_list_bikes)

        return newState
    
    def __repr__(self) -> str:
        return f"Representación del estado (Parámetros = {self.params}, Lista coches = {self.list_cars}, Lista bicis = {self.list_bikes}"
    
    
    #def generate_actions(self) -> Generator[Operators, None, None]:
    #    for i, car in enumerate(self.list_cars):


    #def heuristica (self):
