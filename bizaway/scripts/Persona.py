from bizaway.scripts.Coordenadas import Coord


class Persona:
    def __init__(self, id, x, y):
        self.id = id
        self.coord = Coord(x,y)
