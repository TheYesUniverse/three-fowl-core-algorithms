# Three-fowl Core Algorithms
Learners Guild core algorithms project,
<br/>
created by Mike and theYesUniverse - with algorithm generated teamname: three-fowl

![alt tag](https://s-media-cache-ak0.pinimg.com/736x/95/00/db/9500db1e1e3722ac29a07368bd1c76a8.jpg)

## Running Code and Tests

To run the app in your browser, clone down the repo, in the directory run 'npm install' and simply start the app.
```
$ npm start
```

To run functions do the following (in place of star include the name of the src file)

```
$ node *
```

To run unit test cases do the following (in place of star include the name of the test)

```
$ mocha test/*.js 
```

## Description

_Provide a brief, high-level overview of what the final product (artifact) of this goal is. Include any relevant resources or dependencies here._

Write tests and implementations for algorithms commonly used in job interviews.

Fork the [core-algorithms][core-algorithms] repository and use the fork as your project artifact.

### Classic

#### makeChange

Given a price and an amount paid, return the number of coins in each denomination that should be given as change.

```javascript
makeChange({ price: 1.00, amountGiven: 1.00 })
// => { quarters: 0, dimes: 0, nickels: 0, pennies: 0 }

makeChange({ price: 1.59, amountGiven: 2.00 })
// => { quarters: 1, dimes: 1, nickels: 1, pennies: 1 }

makeChange({ price: 4.32, amountGiven: 5.00 })
// => { quarters: 2, dimes: 1, nickels: 1, pennies: 3 }
```

#### fizzBuzz

Return an array of numbers from 1 to 100.

For multiples of three, use the string `Fizz` instead of the number and for multiples of five replace with `Buzz`.

For numbers which are multiples of both three and five replace with `FizzBuzz`.

```javascript
fizzBuzz()
// => [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz', ...]
```

#### isPalindrome

Determine if a string is a palindrome. Return `true` or `false`.

Ignore punctuation, spacing, and case sensitivity.

```javascript
isPalindrome('radar')
// => true

isPalindrome('bananas')
// => false

isPalindrome('A man, a plan, a canal: Panama')
// => true
```

### Numeric

#### factorial

Return the factorial of a number.

```javascript
factorial(5)
// => 120
```

#### fibonacci

Return an array of Fibonacci numbers to the _nth_ position.

```javascript
fibonacci(10)
// => [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
```

#### collatzConjecture

Return the Collatz sequence for a given number.

The Collatz sequence for any positive integer `n` is defined as follows:

> If `n` is even, divide it by 2 to get `n / 2`. If `n` is odd, multiply it by 3 and add 1 to obtain `3n + 1`. Repeat the process until you reach 1.

```javascript
collatzConjecture(1)
// => [1]

collatzConjecture(7)
// => [7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1]
```


### Set Operations

#### setUnion

Return the union of two sets.

```javascript
const a = [1, 2, 3, 4]
const b = [2, 4, 6, 8]
setUnion(a, b)
// => [1, 2, 3, 4, 6, 8]
```

#### setIntersection

Return the intersection of two sets.

```javascript
const a = [1, 2, 3, 4]
const b = [2, 4, 6, 8]
setIntersection(a, b)
// => [2, 4]
```

#### setCompliment

Return the compliment of two sets.

```javascript
const a = [1, 2, 3, 4]
const b = [2, 4, 6, 8]
setCompliment(a, b)
// => [6, 8]
```

#### setSymmetricDifference

Return the symmetric difference of two sets.

```javascript
const a = [1, 2, 3, 4]
const b = [2, 4, 6, 8]
setSymmetricDifference(a, b)
// => [1, 3, 6, 8]
```


### Sorting and Searching

#### mergeSort

Sort an array of numbers using the **merge sort** algorithm.

```javascript
mergeSort([10, 2, 7, 5, 8, 3, 6, 1, 4, 9])
// => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

#### bubbleSort

Sort an array of numbers using the **bubble sort** algorithm.

```javascript
bubbleSort([10, 2, 7, 5, 8, 3, 6, 1, 4, 9])
// => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

#### binarySearch

Search for a number within an array using the **binary search** algorithm.

```javascript
const numbers = [10, 2, 7, 5, 8, 3, 6, 1, 4, 9]
binarySearch(numbers, 4)
// => 8
```


### Graphing and Geometry

#### closestPair

Given a set of points on a 2-dimensional plane, return the pair of points with the least distance between them.

Reference: [Wikipedia](https://en.wikipedia.org/wiki/Closest_pair_of_points_problem)

```javascript
const points = [
  [2,1],
  [4,0],
  [-1,0],
  [5,3],
  [-2,5],
  [3,-3],
  [-2,0],
  [3,4],
  [5,-4],
  [0,-2]
]
closestPair(points)
// => { pair: [[-1, 0], [-2, 0]], distance: 1 }
```

#### isConnectedGraph

Check if a graph is connected or disconnected. Return `true` or `false`.

A graph is connected when there is a path between every pair of vertices.

Reference: [Wikipedia](https://en.wikipedia.org/wiki/Connectivity_(graph_theory))

```javascript
const graphA = {
  'a': ['b', 'c'],
  'b': ['a', 'd'],
  'c': ['a', 'd'],
  'd': ['b', 'c'],
}
isConnectedGraph(graphA)
// => true

const graphB = {
  'a': ['b'],
  'b': ['a'],
  'c': ['d'],
  'd': ['c'],
}
isConnectedGraph(graphB)
// => false
```

## Specifications

- [X] Artifact produced is a fork of the core-algorithms repo.
- [ ] Can run all tests with npm test.
- [ ] All tests are passing.
- [ ] For each algorithm identified above, there exists:
- [ ] a test file with at least 2 unit tests using valid inputs, and at least 1 unit test using invalid inputs.
- [ ] an implementation file with a correct implementation of the algorithm.
- [ ] The artifact produced is properly licensed, preferably with the MIT license.

## Stretch

Pick a different programming language from JavaScript (e.g. Ruby, Swift, Python, C, Java...) and write tests & implementations for each.

- [ ] Can run all non-JavaScript tests with a single command.
- [ ] For each algorithm identified above, there exists:
- [ ] a test file with multiple unit tests for each algorithm in a language other than JavaScript.
- [ ] an implementation file with a correct implementation of the algorithm in a language other than JavaScript.

## Quality Rubric

### Well formatted code

Code uses a linter, which can be invoked with a command (e.g. npm run lint). [50 points]
Running the linter on all source code files generates no linting errors. [50 points]

### Clear and useful README

Repository includes a README file with installation and setup instructions. [25 points]
Repository includes a README file with usage instructions and at least one example use case. [25 points]

### Proper dependency management

There is a command to install dependencies (e.g. npm install) and it is specified in the installation and setup instructions of the README. [50 points]

### Good project management

Commit messages are concise and descriptive. [25 points]
All features are added via pull requests. [25 points]
Every pull request has a description summarizing the changes made. [25 points]
Every pull request has been reviewed by at least one other person. [25 points]

<!-- LICENSE -->

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png" /></a>
<br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.
