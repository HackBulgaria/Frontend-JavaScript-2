# Week 2 : Task 1 : Bulls & Cows

Let's recreate the game where you have to guess a four-digit number whereby all digits are unique.

##  Dependencies
- npm
    - prompt
    - chalk 

## Premise
- generate a 4 digit number with unique digits
 - 4375 is ok
 - 5566 not ok
- prompt user for input
- if guess is successful end game
- if not prompt until successful

## Example
```sh
node bulls-n-cows.js
> 4582
1 bulls 2 cows
> 4735
2 bulls 2 cows
> 4375
you guessed it!
```