# Country Challenge

## Author

Ameen Noor

## Introduction

Welcome to "Country Challenge" – a fun and engaging online game where you get to guess the names of 5-letter countries! Similar to Wordle, you have 6 chances to figure out the correct country. It's a great way to test your geography knowledge. "Country Challenge" caters to all age groups and geography enthusiasts who love a good puzzle. The website offers three windows: the settings part allows you to change the website theme, the information part explains how to play the game, and the statistics part records the number of games played, wins, and losses. Moreover, the website is responsive, making it easy to play on any device. 

![Am I Responsive](https://github.com/AmeenNoor/country-challenge/blob/main/assets/responsive/am-i-responsive.png)

Click [here](https://ameennoor.github.io/country-challenge/) to visit the website.

## Table of Contents

- [Country Challenge](#country-challenge)
  - [Author](#author)
  - [Introduction](#introduction)
  - [Table of Contents](#table-of-contents)
  - [User Experience (UX)](#user-experience-ux)
    - [Design](#design)
    - [Wireframes](#wireframes)
  - [Features](#features)
    - [Implemented Features](#implemented-features)
    - [Future Features](#future-features)
  - [Technologies Used](#technologies-used)
    - [Languages Used](#languages-used)
    - [Frameworks, Libraries and Programs Used](#frameworks-libraries-and-programs-used)
  - [Deployment](#deployment)
  - [Testing](#testing)
    - [Validation Testing](#validation-testing)
    - [Compatibility and Responsive Testing](#compatibility-and-responsive-testing)
    - [Manual Testing](#manual-testing)
    - [Accessibility](#accessibility)
    - [Fixing Bugs](#fixing-bugs)
    - [Open Bugs](#open-bugs)
  - [Credits](#credits)
    - [Code](#code)
    - [Content](#content)
    - [Media](#media)
    - [Mentor](#mentor)

## User Experience (UX)

### Design

- #### Colors

  The design colors used in the "Country Challenge" game create a visually appealing. The primary color scheme features a soft and warm background color (#f5cac2) with dark heading text color (#303179), this contrast enhances readability. The color-coded feedback for correct and incorrect guesses (green, pink, and gray) provides clear visual cues, helping players understand their progress. Additionally, the dark mode feature offers an alternative color scheme (#303179 background and #f5cac2 text) for a unique experience.
  
  ![colors](https://github.com/AmeenNoor/country-challenge/blob/main/assets/ux/design/colors.png)

- #### Icons

  The navigation area in the "Country Challenge" game is enhanced with well-chosen design icons, adding both functionality and visual appeal. Three icons represent distinct sections: the gear icon represents the "Settings" section, the circle-info icon represents information section, and the chart-simple icon represents the "Statistics" section. Icons provide a user-friendly way for players to access essential game information, customize settings, and view their progress and statistics.

  <div align="center">
    <img src="https://github.com/AmeenNoor/country-challenge/blob/main/assets/ux/design/icons.png" alt="icons">
  </div>

- #### Typography

  The 'Rye' font was chosen for the title to give a nice appearance and clear visual. 'Nanum Myeongjo' was selected for its readability, ensuring clear body text.
  
  <div align="center">
    <img src="https://github.com/AmeenNoor/country-challenge/blob/main/assets/ux/design/rye-font.png" alt="rye-font">
    <img src="https://github.com/AmeenNoor/country-challenge/blob/main/assets/ux/design/nanum-myeongjo-font.png" alt="nanum-myeongjo-font">
  </div>

### Wireframes

- #### Desktop

<div align="center">
    <img src="https://github.com/AmeenNoor/country-challenge/blob/main/assets/ux/wireframes/wireframe-desktop.png" alt="Desktop 1">
</div>

- #### Tablet

<div align="center">
    <img src="https://github.com/AmeenNoor/country-challenge/blob/main/assets/ux/wireframes/wireframe-tablet.png" alt="Tablet 1">
</div>

- #### Mobile

<div align="center">
    <img src="https://github.com/AmeenNoor/country-challenge/blob/main/assets/ux/wireframes/wireframe-mobile.png" alt="Mobile 1">
</div>

## Features

### Implemented Features

1. Country Guessing Game: Players can enjoy a word-guessing game where they try to guess a 5-letter country name. They have 6 chances to make correct guesses.

![Country Guessing Game](https://github.com/AmeenNoor/country-challenge/blob/main/assets/features/country-guessing.png)

2. Color Feedback: After each guess, the spots change color to provide feedback on the accuracy of the guessed country name, making it easier for players to identify correct and incorrect letters.

![Color Feedback](https://github.com/AmeenNoor/country-challenge/blob/main/assets/features/color-feedback.png)

3. Navigation Icons: The navigation area features intuitive design icons representing "Settings," "How to Play," and "Statistics," allowing users to access relevant information and sections of the game efficiently.

![Navigation Icons](https://github.com/AmeenNoor/country-challenge/blob/main/assets/features/navigation-icons.png)

4. Theme Settings: Users can customize the website's theme with a dark mode option, offering a visually appealing interface and allowing users to choose their preferred color scheme.

![Theme Settings](https://github.com/AmeenNoor/country-challenge/blob/main/assets/features/theme-settings.png)

5. Information Section: The "How to Play" window explains the rules of the game, guiding users on how to make guesses and feedback colors.

![Information Section](https://github.com/AmeenNoor/country-challenge/blob/main/assets/features/information-section.png)

6. Statistics Tracking: The "Statistics" window records the number of games played, games won, and games lost, allowing users to track their progress and performance.

![Statistics Tracking](https://github.com/AmeenNoor/country-challenge/blob/main/assets/features/statistics-tracking.png)

7. Congratulatory and Oops Messages: Upon winning or losing the game, users receive congratulatory or oops messages.

![Congratulatory Messages](https://github.com/AmeenNoor/country-challenge/blob/main/assets/features/congratulatory-message.png)

![Oops Messages](https://github.com/AmeenNoor/country-challenge/blob/main/assets/features/oops-message.png)

8. Play Again Functionality: Users can easily restart the game by clicking the "Play Again" button in the respective win or lose message window.

![Play Again Functionality](https://github.com/AmeenNoor/country-challenge/blob/main/assets/features/play-again-functionality.png)

8. Responsive Design: The website appears to be designed with a responsive layout, ensuring optimal viewing and functionality across different devices and screen sizes.

### Future Features

1. API Auto Generate Word: Instead of using a static WordList, a dynamic API can be integrated into the game to automatically generate country names as the secret word for each round. This would add variety and ensure that players get a unique challenge with each attempt.

2. API Word Validation: An API that checks if the guessed word is a valid country name in the first place can enhance the game's integrity. It would prevent players from entering random or incorrect words, providing them with immediate feedback if their guess is not a valid country name.

3. Difficulty Levels: Adding a Difficulty Level feature in the settings section would allow users to choose the level of challenge they prefer.

4. Custom Word Length: Implementing a "Custom Word Length" feature would offer players the ability to choose the length of the country name they want to guess. Rather than being restricted to a fixed 5-letter word.

## Technologies Used

### Languages Used

1. HTML

2. CSS

3. JavaScript

### Frameworks, Libraries and Programs Used

1. [Balsamiq](https://balsamiq.com/):
   Balsamiq was used to create the mockup design for the website.

2. [GitHub](https://github.com/):
   GitHub was utilized to store the project file and folder remotely.

3. [Git](https://git-scm.com/):
   Git was used in the Gitpod terminal to add, commit, and then push the changes to GitHub.

4. [Font Awesome](https://fontawesome.com/):
   Font Awesome was used to incorporate social media and contact information icons, including icons for Facebook, Twitter, Youtube, Instagram, TikTok, email and phone number, as well as the address.

5. [Google Fonts](https://fonts.google.com/):
   Google fonts were used to import 'nanum myeongjo' & 'Rye' fonts into the style.css file which are used on all pages throughout the project.

6. [HTML Validator](https://validator.w3.org/):
   The HTML code of the website was tested using the HTML Validator that provided by The World Wide Web Consortium (W3C).

7. [Jigsaw](https://jigsaw.w3.org/css-validator/):
   The CSS code of the website was tested using Jigsaw that provided by The World Wide Web Consortium (W3C).

8. [Jshint](https://jshint.com/):
   Jshint was used to validate javascript code.

## Deployment

To deploy the project from GitHub, follow the steps below:

1. Click on the "Settings" tab located near the top-right corner of the repository page (see screenshot below):

![Deployment_1](https://github.com/AmeenNoor/country-challenge/blob/main/assets/deployment/deployment-image1.png)

2. Scroll down the settings page and click "Pages", on the left side (see screenshot below):

![Deployment_2](https://github.com/AmeenNoor/country-challenge/blob/main/assets/deployment/deployment-image2.png)

3. In the "Source" dropdown menu, select "main" and click "Save" (see screenshot below):

![Deployment_3](https://github.com/AmeenNoor/country-challenge/blob/main/assets/deployment/deployment-image3.png)

4. Scroll back up to the "GitHub Pages" section, and you will find a URL . (Note: It may take a few moments for GitHub Pages to build and deploy the project.) (see screenshot below):

![Deployment_4](https://github.com/AmeenNoor/country-challenge/blob/main/assets/deployment/deployment-image4.png)

## Testing

### Testing User Stories

### Validation Testing

The code of the website was tested using the HTML & CSS Validator provided by The World Wide Web Consortium (W3C).
- #### HTML Validation
  
  1. Home page:

  ![Home Page Test1](https://github.com/AmeenNoor/country-challenge/blob/main/assets/testing/home-page1.png)

  ![Home Page Test2](https://github.com/AmeenNoor/country-challenge/blob/main/assets/testing/home-page2.png)

  ![Home Page Test3](https://github.com/AmeenNoor/country-challenge/blob/main/assets/testing/home-page3.png)

  ![Home Page Test4](https://github.com/AmeenNoor/country-challenge/blob/main/assets/testing/home-page4.png)

- #### CSS Validation
  
  ![CSS Test](https://github.com/AmeenNoor/country-challenge/blob/main/assets/testing/css-test.png)

- #### JSHint JavaScript Validator
  
  ![JavaScript Test](https://github.com/AmeenNoor/country-challenge/blob/main/assets/testing/css-test.png)

### Compatibility and Responsive Testing

The website was tested on various browsers and devices to ensure compatibility and optimal user experience. The testing process yielded successful results for most browsers and devices.

<div align="center">

| Device                    | Browser         | OS       | Screen Width | Status |
| ------------------------- | --------------- | -------- | ------------ | ------ |
| dev tools: iPhone SE      | Chrome          | iOS      | 375 x 667    | ✔      |
| dev tools: iPhone 12      | Chrome          | iOS      | 390 x 844    | ✔      |
| dev tools: iPad Air       | Chrome          | iOS      | 820 x 1180   | ✔      |
| dev tools: Galaxy S8      | Chrome          | Android  | 362 x 740    | ✔      |
| real computer: Toshiba    | Microsoft Edge  | Windows 10 | 1366 x 768  | ✔      |
| real computer: Toshiba    | Firefox         | Ubuntu 22.04 | 1920 x 1080 | ✔      |
| real computer: MacBook Pro 13" | Safari    | iOS      | 1920 x 1080  | ✔      |
| real mobile phone: iPhone 7 Plus | Safari    | iOS      | 1920 x 1080  | ✔      |

</div>


### Manual Testing

View manual testing results [here!](https://docs.google.com/spreadsheets/d/1W85h9iMh3DuUlf6qbAEOJAGxEFdf0eHEZkcWL2YOVOw/edit#gid=119546409)

![Manual Testing Image](https://github.com/AmeenNoor/activeBeat-center/blob/main/assets/testing/manual-testing-image.png)

### Accessibility

- #### Accessibility Audits

  Accessibility testing was done on the website, and Lighthouse, a testing tool, was used for this purpose. The Lighthouse report, displayed in the provided screenshot, indicates a successful outcome of the accessibility testing.

  ![Accessibility Test](https://github.com/AmeenNoor/activeBeat-center/blob/main/assets/testing/accessibility-test.png)


### Fixing Bugs

- #### Validation Bug
  
  1. Home Page:
  The errors in the HTML code were fixed by adjusting the nesting of elements. The inappropriate placement of `<h2>` and `<p>` tags inside `<span>` elements was rectified. Proper closing of `<div>` elements and `<span>` elements was ensured, and comment syntax issues were addressed. These corrections eliminated the errors and resulted in error-free HTML code.

  ![Home Page Bug Fixed](https://github.com/AmeenNoor/country-challenge/blob/main/assets/testing/bug-fixed-home-page.png)

### Open Bugs

The "Country Challenge" code does not currently validate user input for valid words/countries, potentially accepting incorrect entries. To improve this, an API should be integrated in the future to verify whether the player's guessed word/country is real or not. If an invalid entry is detected, the game should prompt the player to provide a valid word/country for a better user experience.

## Credits

### Code

1. The GitHub repository was created using the "Code Institute template." You can find the template at: [Code Institute Template](https://github.com/Code-Institute-Org/ci-full-template).

2. The part "Wait for the DOM to finish loading before running the game" and the statistic functions have been adopted from the "love-maths" project. You can view the project at: [Love Maths](https://ameennoor.github.io/love-math/).

3. The keyboard letters and spots display utilize the concept of Flexbox, which was adopted from the W3Schools CSS Flexbox tutorial. You can learn more about Flexbox here: [W3Schools - CSS Flexbox](https://www.w3schools.com/css/css3_flexbox.asp).

### Content

1. The settings and information section have been rephrased and adapted from Mind games website. You can find their website at: [Mind games](https://www.mindgames.com/game/Word+Guess).

2. The idea of statistic section have been adopted from Love Maths project. You can find the project at: [Love Maths](https://github.com/Code-Institute-Solutions/readme-love-maths).

### Media

1. The color scheme image is sourced from [Coolors](https://coolors.co/).

2. The social media icons are sourced from [FontAwesome](https://fontawesome.com/).

3. The fonts 'Rye' and 'Nanum Myeongjo' are sourced from [Google Fonts](https://fonts.google.com/).

4. The responsive image is generated using the [Am I Responsive](https://ui.dev/amiresponsive) tool.

### Mentor

Huge thanks to my mentor "Malia Havlicek" for her support and guidance.
