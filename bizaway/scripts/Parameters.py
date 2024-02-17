from bizaway.scripts.Coordenadas import Coord


class Parameters(object):
    def __init__(self, n_cars: int, n_bikes: int, n_persons: int, desti : Coord):
        self.n_cars = n_cars
        self.n_bikes = n_bikes
        self.n_persons = n_persons
        self.desti = desti
        