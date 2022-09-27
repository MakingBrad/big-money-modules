# Big Money Modules

In this challenge, you will use Node.js modules to build a lottery game!

## `play.js`

Start with a `play.js` file -- this will be your main entry point for running your Node scripts! **Use this file as you go to import and test each module**, before moving on to the next:

```sh
node play.js
```

## Module 1: `randomNumber.js`

This first module will **export** a function that returns a random number after taking in a min and max value as arguments (hint: search google for "JS random number min max"). 

### Module 2: `person.js`

The second module should export an object representing the person who is playing the lottery, with `firstName` and a `lastName` properties.
 
### Module 3: `lotteryTicket.js`

The third module should **import** the functions from the other two modules, and **export** a new function which:

1. Get a random number between `100` and `1000000`
2. Pass that number to the second function, to convert it to a USD string
3. Return the USD string

## Tying it all together, in `play.js`

Finally, the `play.js` file should use the other modules to print the results of the lottery ticket to the console. For example

```
Congratulations, Jane Doe! You just won $156,301
```
