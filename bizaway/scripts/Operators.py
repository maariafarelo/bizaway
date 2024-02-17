class Operators(object):
    pass

class AddCar(Operators):
    def __init__(self, id_car : int, x_factor : int, y_factor : int):
        self.id_car = id_car
        self.x_factor = x_factor
        self.y_factor = y_factor

class AddBike(Operators):
    def __init__(self, id_bike : int, x_factor : int, y_factor : int):
        self.id_bike = id_bike
        self.x_factor = x_factor
        self.y_factor = y_factor

class AssignedCar(Operators):
    def __init__(self, id_car, id_person):
        self.id_car = id_car
        self.id_person = id_person

class AssignedBike(Operators):
    def __init__(self, id_bike, id_person):
        self.id_bike = id_bike
        self.id_person = id_person

class ChangeCar(Operators):
    def __init__(self, id_car, id_person):
        self.id_car = id_car
        self.id_person = id_person

class ChangeBike(Operators):
    def __init__(self, id_bike, id_person):
        self.id_bike = id_bike
        self.id_person = id_person