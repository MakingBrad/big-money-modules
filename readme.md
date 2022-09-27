# Module Madness

In this challenge, you will need to spin up a new project (much like we did in lecture). You will create three modules as specified below, create a *server.js* that will use these modules!

## Modules

### Module One

The first module will **export** a function that returns a random number after taking in a min and max value as arguments (hint: you can use random number functions from previous assignments). When you call this module, use `100` as your min, and `1000000` as your max.

### Module Two

The second module should accept a number and convert it to a USD value as a string (eg, convert `10000` to `"$10,000"`). You can find some good implementations of this online.
 
### Module Three

The third module should **require** the other two modules (i.e. Module One and Module Two). It should export a new function which:

1. Gets a random number from the first function
2. Passes that number to the second function, to convert it to a USD string
3. Returns the USD string

## index.js
Finally, in the `server.js` file use the functions to console log the random dollar values, as:

```
Account balance:
$156,301
```
