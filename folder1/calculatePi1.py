# Monte Carlo method
def calculatePi(darts = 5000):
	import random
	circle = 0
	for i in range(darts):
		if (random.random()**2 + random.random()**2) ** 0.5 < 1:
			circle += 1
	return(circle/darts * 4)
print(calculatePi(10**6))
