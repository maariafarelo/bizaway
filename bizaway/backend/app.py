from flask import Flask, jsonify, request, json
from numpy import sin, cos, arccos, pi, round
app = Flask(__name__)

def rad2deg(radians):
    degrees = radians * 180 / pi
    return degrees

def deg2rad(degrees):
    radians = degrees * pi / 180
    return radians

def getDistanceBetweenPoints(latitude1, longitude1, latitude2, longitude2):
    
    theta = longitude1 - longitude2
    
    distance = 60 * 1.1515 * rad2deg(
        arccos(
            (sin(deg2rad(latitude1)) * sin(deg2rad(latitude2))) + 
            (cos(deg2rad(latitude1)) * cos(deg2rad(latitude2)) * cos(deg2rad(theta)))
        )
    )
    return round(distance * 1.609344, 2)



@app.route('/', methods=['POST'])
def function_response():
        num_pers = request.json['numPers']
        coord_finals = request.json['destination'] #latitude / longitude
        persons = request.json['users'] #name / latitude / longitude
        distancia_desti = []
        data = {}
        goes_with_friend = []

        for i in range(int(num_pers)):
            goes_with_friend.append(False)

        for i in range(int(num_pers)):
            distancia_desti.append(getDistanceBetweenPoints(float(persons[i].get('latitude')), float(persons[i].get('longitude')), float(coord_finals.get('latitude')), float(coord_finals.get('longitude'))))

            for j in range(int(num_pers)):
                if j!=i:
                    dist_pers = getDistanceBetweenPoints(float(persons[i].get('latitude')), float(persons[i].get('longitude')), float(persons[j].get('latitude')), float(persons[j].get(('longitude'))))
                    if (not goes_with_friend[j] and dist_pers < distancia_desti[i]):
                        distancia_desti[i] = dist_pers
                        goes_with_friend[i] = True
                        
if __name__ == '__main__':
    app.run()