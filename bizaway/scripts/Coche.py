from bizaway.scripts.Coordenadas import Coord


class Coche:
    def __init__(self, id, x, y):
        self.id = id
        self.capacidad = 5
        self.cord = Coord(x,y)
        self.assigned = False