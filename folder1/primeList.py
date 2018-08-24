def primes(items):
	primeList = [2]
	n = 3
	while len(primeList) < items:
		isPrime = True
		for prime in primeList:
			if not n % prime:
				isPrime = False

		if isPrime == True: primeList.append(n)
		else: n += 1
	return(primeList)

print(primes(6))

def rubSuccesion1(items):
	primeList = primes(items)
	succ = [1]
	n = 0
	while len(succ) < items:
		succ.append(succ[-1] * primeList[n])
		n += 1
	return(succ)

print(rubSuccesion1(10))