function checkOoutput(data) {
    const output = (
        data % 3 === 0 && data % 5 === 0 ? "FizzBuzz"
        : data % 3 === 0 ? "Fizz"
        : data % 5 === 0 ? "Buzz"
        : data
    );
    return output
}

function fizzbuzz() {
  for (let i = 1; i <= 100; i++) {
    const response = checkOoutput(i)
    console.log(response)
  }
}

fizzbuzz();