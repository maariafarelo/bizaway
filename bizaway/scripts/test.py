from pytokr import pytokr
from numpy import sin, cos, arccos, pi, round
from dataclasses import dataclass
import array as arr

def rad2deg(radians):
    degrees = radians * 180 / pi
    return degrees

def deg2rad(degrees):
    radians = degrees * pi / 180
    return radians

def getDistanceBetweenPoints(latitude1, longitude1, latitude2, longitude2, unit = 'kilometers'):
    
    theta = longitude1 - longitude2
    
    distance = 60 * 1.1515 * rad2deg(
        arccos(
            (sin(deg2rad(latitude1)) * sin(deg2rad(latitude2))) + 
            (cos(deg2rad(latitude1)) * cos(deg2rad(latitude2)) * cos(deg2rad(theta)))
        )
    )
    
    if unit == 'miles':
        return round(distance, 2)
    if unit == 'kilometers':
        return round(distance * 1.609344, 2)


class Coord:
    def __init__(self, x, y):
        self.x = x
        self.y = y

item, items = pytokr(iter = True)
num_persones = item()
desti_X, desti_Y = item(), item()

desti = Coord(desti_X, desti_Y)

coords = [] 
for i in range(int(num_persones)):
    coordenada_x, coordenada_y = item(), item()
    coords.append(Coord(coordenada_x, coordenada_y))

distancia_desti = []
distancias_pers = []

for i in range(int(num_persones)):
    #x_factor = abs(int(coords[i].x) - int(desti_X))
    #y_factor = abs(int(coords[i].y) - int(desti_Y))
    distancia_desti.append(getDistanceBetweenPoints(int(coords[i].x), int(coords[i].y), int(desti_X), int(desti_Y)))
    print(distancia_desti[i])

    dist_pers = []
    for j in range(int(num_persones)):
        if j!=i:
            dist_pers.append(getDistanceBetweenPoints(int(coords[j].x), int(coords[j].y), int(coords[i].x), int(coords[i].y)))
    distancias_pers.append(dist_pers)

