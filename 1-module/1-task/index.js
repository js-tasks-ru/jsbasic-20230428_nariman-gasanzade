function factorial(n) {
  let result = 1;
  while(n > 0){
    result = result * n;
    n--;
  }
  return result;
}

factorial(0);
factorial(1);
factorial(2);
factorial(3);
factorial(4);
factorial(5);
