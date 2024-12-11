# Oppgave 1
tall1 = 8
tall2 = 4
print(tall1, "+", tall2, "=", tall1 + tall2)
print(tall1, "-", tall2, "=", tall1 - tall2)
print(tall1, "*", tall2, "=", tall1 * tall2)
print(tall1, "/", tall2, "=", tall1 / tall2)

# Oppgave 2
lengde = 6
bredde = 8
print(lengde, "*", bredde, "=", lengde * bredde)

# Oppgave 3
navn = input("Skriv inn navnet ditt: ")
alder = int(input("Skriv inn alderen din: "))
print("Det er", 100 - alder, "år", "til du er 100 år gammel.")

# Oppgave 4
tall = 4
if tall > 0:
  print("Tall", tall, "er et positivt tall")
elif tall < 0:
  print("Tall", tall, "er et negativt tall")
else:
  print("Tall", tall, "er bare 0 (null)")

# Oppgave 5
brukerTall = int(input("Skriv inn et tall: "))
sum = 0
for x in range(1, brukerTall):
  sum = sum + x
print(sum)

# Oppgave 6
navn1 = input("Skriv inn et navn: ")
navn2 = input("Skriv inn et navn: ")
navn3 = input("Skriv inn et navn: ")
navn4 = input("Skriv inn et navn: ")
navn5 = input("Skriv inn et navn: ")

thisList = []
thisList.append(navn1)
thisList.append(navn2)
thisList.append(navn3)
thisList.append(navn4)
thisList.append(navn5)
print(thisList)

# Oppgave 7
thisList2 = []

for x in range(0, 5):
  etNavn = input("Skriv et navn: ")
  thisList2.append(etNavn)

print(thisList2)

# Oppgave 8
functionList = []

for x in range(0, 6):
  funcTall = int(input("Skriv inn et tall: "))
  functionList.append(funcTall)
  functionList.sort()
print(functionList)
sum = 0
for x in functionList:
  sum = sum + x

print(sum/5)

# Oppgave 9

snuList = []

for x in range(0, 6):
  snuTall = int(input("Skriv inn et tall: "))
  snuList.append(snuTall)
  snuList.sort()
  snuList.reverse()
print(snuList)