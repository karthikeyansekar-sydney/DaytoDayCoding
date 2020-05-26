async function fivePromise() {
  return 5;
}

fivePromise()
.then(resolvedValue => {
    console.log(resolvedValue);
  })
//In the example above, even though we return 5 inside the function body, what’s actually returned when we invoke
//fivePromise() is a promise with a resolved value of 5.
