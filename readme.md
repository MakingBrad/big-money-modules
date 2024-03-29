# Big Money Modules

In this challenge, you will use [Node.js](https://nodejs.org/en) with [Node.js modules](https://nodejs.org/api/modules.html#modules-commonjs-modules) to build a lottery game!

## `play.js`

Start with a `play.js` file -- this will be your main entry point for running your Node scripts! **Use this file as you go to import and test each module**, before moving on to the next:

```sh
node play.js
```

## Modules

### Module 1: `randomNumber.js`

This first module will **export** a function that returns a random number after taking in a min and max value as arguments (hint: search google for "JS random number min max"). This module does not import anything.

### Module 2: `person.js`

The second module should export an object representing the person who is playing the lottery, with `firstName` and a `lastName` properties. This module does not import anything.

### Module 3: `lotteryTicket.js`

This third module should **import** the function from `randomNumber.js` and object from `person.js`, then **export** a new function which will:

1. Get a random number between `100` and `1,000,000`.
2. Get the person object from the `person.js` module.
3. Return a string like `Congratulations, Jane Doe! You just won $156,301.00`.

## Tying it all together, in `play.js`

Finally, the `play.js` file should use the `lotteryTicket` modules to `console.log`. For example:

```sh
node ./play.js
```

Running the above command should generate an output that looks similar to this:

```sh
> Congratulations, Jane Doe! You just won $156,301.00.
```
