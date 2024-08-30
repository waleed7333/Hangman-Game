# Hangman Game

## Overview

This is a simple Hangman game built with HTML, CSS, and JavaScript. The game challenges players to guess a hidden word by selecting letters, with a limited number of incorrect guesses allowed. The game features dynamic difficulty levels, hints, and an interactive design.

## Features

- **Dynamic Difficulty Levels**: Choose between easy, medium, and hard difficulty levels that affect the number of attempts.
- **Hints**: Get hints to help guess the word.
- **Visual Hangman**: A series of images display the hangman progression as incorrect guesses are made.
- **End Game Modal**: Displays a message and the correct word when the game ends.
- **Restart Game**: Option to restart the game after it ends.

## Installation

1. **Clone the Repository**

To set up the project on your local machine, clone the repository using the following commands:

```bash
git clone https://github.com/waleed7333/hangman-game.git
cd hangman-game 
```
2. **Open the Project**

To start playing the game:

1. **Open the Project**: Open the `index.html` file in your web browser.

## Usage

1. **Select Difficulty**: Choose the desired difficulty level (Easy, Medium, Hard) from the dropdown menu.
2. **Play the Game**: Click on the letter buttons to guess the hidden word.
3. **View Hints**: Use the provided hint to help with guessing the word.
4. **Track Lives**: Monitor the remaining number of attempts to guess the word correctly.
5. **End Game**: The game ends when you either guess the word correctly or exhaust all attempts. A modal will appear showing the result and the correct word.

## File Structure

- **`index.html`**: The main HTML file that structures the game's user interface.
- **`style.css`**: The CSS file responsible for styling the game's visual elements.
- **`script.js`**: The JavaScript file that contains the game logic, manages user interactions, and updates the game state.
- **`data.json`**: A JSON file containing an array of words and associated hints for gameplay.
- **`images/`**: Directory containing images representing the stages of the hangman figure.

## How It Works

1. **Word Selection**: The game fetches words from `data.json`, filters them according to the selected difficulty level, and randomly chooses one.
2. **Game Logic**: Manages letter guesses, updates the display of the word, and handles the hangman progression based on incorrect guesses.
3. **End Game Handling**: Displays a modal with a win or loss message and reveals the correct word.

## Contributing

Contributions to this project are welcome! To contribute:

1. **Fork the Repository**: Create a personal copy of the repository.
2. **Create a Branch**: Develop your feature or fix in a new branch (`git checkout -b feature/your-feature`).
3. **Commit Changes**: Save your changes with a descriptive commit message (`git commit -am 'Add new feature'`).
4. **Push to GitHub**: Push your branch to the repository (`git push origin feature/your-feature`).
5. **Open a Pull Request**: Submit a pull request for review.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions, feedback, or issues, please reach out through GitHub Issues or contact me directly via [GitHub](https://github.com/waleed7333).
