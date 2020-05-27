//Example 1
async function fivePromise() {
  return 5;
}

fivePromise()
.then(resolvedValue => {
    console.log(resolvedValue);
  })
//In the example above, even though we return 5 inside the function body, what’s actually returned when we invoke
//fivePromise() is a promise with a resolved value of 5.

function withConstructor(num){
  return new Promise((resolve, reject) => {
    if (num === 0){
      resolve ('zero');
    } else {
      resolve ('not zero');
    }
  })
}


//Example 2
withConstructor(0)
  .then((resolveValue) => {
  console.log(` withConstructor(0) returned a promise which resolved to: ${resolveValue}.`);
})


async function withAsync(num){
  if (num === 0){
      return 'zero';
    } else {
      return 'not zero';
    }
}

withAsync(100)
  .then((resolveValue) => {
  console.log(` withAsync(100) returned a promise which resolved to: ${resolveValue}.`);
})

/*async functions always return a promise. This means we can use traditional promise syntax,
like .then() and .catch with our async functions. An async function will return in one of three ways:

If there’s nothing returned from the function, it will return a promise with a resolved value of undefined.
If there’s a non-promise value returned from the function, it will return a promise resolved to that value.
If a promise is returned from the function, it will simply return that promise */
