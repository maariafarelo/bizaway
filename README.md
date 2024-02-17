# Bizaway - An aproach to enterprises travel optimizations

## What does it do?
Firstly, the client enters the number of employees that he wishes to mobilize and where they have to reunite (an airport, a train station...), as well as from which exact point each of them is starting the route. Once this is done, the algorithm computes the distance between each person and the reunion point, and the distance between every pair of people. From there, cars are assigned to groups of ideally 5 people (could be less) who live close to each other, minimizing the number of cars used and therefore the amount of CO2 emissions released into the environment.

## How we build it?
The first thing that popped into our minds when we heard about the challenge, were optimization and routing algorithms. From this starting point, we developed a frontend with Next.js framework and the backend with flask.
