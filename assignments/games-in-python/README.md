# 📘 Assignment: Games in Python

## 🎯 Objective

Build a text-based Hangman game to practice core Python skills such as loops, conditionals, functions, and working with strings. By the end of this assignment, you will create a complete game loop with clear win and lose conditions.

## 📝 Tasks

### 🛠️ Build the Core Hangman Game Loop

#### Description
Create a playable Hangman game that selects a word from a predefined list and asks the player to guess one letter at a time.

#### Requirements
Completed program should:

- Randomly select a word from a predefined list.
- Show hidden letters using underscores (for example: `_ _ _ _`).
- Accept one letter guess per turn using `input()`.
- Update the displayed word when a correct letter is guessed.

### 🛠️ Add Rules and End Conditions

#### Description
Complete the game logic so the player can win by revealing the full word or lose by running out of incorrect guesses.

#### Requirements
Completed program should:

- Track and display remaining incorrect guesses.
- Prevent repeated guesses from reducing attempts.
- End the game with a win message when all letters are revealed.
- End the game with a lose message and reveal the full word when attempts reach zero.
