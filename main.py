 x = int(input("Enter the number of rows for the pyramid of odd numbers: "))
for i in range(1, x + 1):
  row = " ".join(str(2 * j + 1) for j in range(i))
  print(row)
