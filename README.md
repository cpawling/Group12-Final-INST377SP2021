# NBA Info Insiders

## Description

NBA Info Insiders is a web application that will allow NBA fans to explore information on their favorite players and teams in the NBA.

This application will provide the NBA fans with information on random players, comparisons between teams, and top five season leaders in-game stats. By having the opportunity of exploring individual player stats and information, while having access to team information, users will be able to browse information in a more efficient, less time-consuming manner.

## Link to Heroku
[Heroku Link](http://sleepy-everglades-25152.herokuapp.com/api/)

### Target browser: 

While devloping NBA Info Insiders we aimed to......

## Link to User Manual: [User Manual Link](#user-manual)

## Link to Developer Manual: [Developer Manual Link](#developer-manual)

# User Manual
## Home Page
Begin by observing on the Home Page the Player Spotlight of a randomized NBA player. This information includes their alma mater, jersey number, current team they play for, and their height (in feet and inches) and weight (in pounds). Right next to the Player Spotlight is a comparison of two NBA teams, whether it be between their head coaches, general managers, and date of foundation. Below is a carousel of the NBA's top five leading players for six measured statistical categories, such as Assists per Game, Shooting Percentage, and 3PT Percentage. The carousel can be interacted with by clickling on either of the arrow buttons under.

## Player Info
In the search bar, input the first name of whichever NBA player you are looking for. One or more suggestions will appear, providing their personal information like their birthdate and official NBA information like their salary and career statistics.

## Team Info
Utilizing the search bar, users can input the names (excluding city names) of the thirty two NBA teams and access information such as the team owners, home stadiums, and home city.

## Record Update
The Record Updates allows users to either change an existing Player Record in the NBA Info Insiders' database or add an all new record entry into the database. The six requirements to changing or adding a record entry in the database are the player's first name, last name, salary, jersey number, postion of play, alma mater, and NBA career debut.

## About
The About Page details the implications that can be taken from the NBA dataset used, more specific background information related to the dataset, and the primary goal of the NBA Info Insiders.

# Developer Manual
### How to install your application and all dependencies
To download our project, using GitHub Desktop, select the code button and choose "Open with GitHub Desktop" to clone this repository to your local computer. Using GitHub desktop will be the simplest way to achieve this. You can find more information about cloning a repository here: https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository 

#### Bulma
Our project harnesses Bulma, a CSS framework for stylizing HTML in an easy manner. You can find the instructions on how to install Bulma here: https://bulma.io/documentation/overview/start/. The simplest way to do this is by using npm to install it. Open a new terminal and enter “npm install bulma”. For Bulma to work correctly a few things need to added. These are already included in our project, but if you are trying to recreate our work, make sure you include the following:
- A HTML doctype like so:
- Code in the HTML to make the viewport responsive:
- The following code in your "head" element:

### How to run our application on a server
1. Open repository in VSCode terminal or Terminal application.
2. Run ```npm install``` to download packeges and install dependencies into the directory.
3. Run ```npm start``` (No errors should occur) to gain access to the local host.
4. In a web browser, go to url: ```http://localhost:3000/```.

### How to run any tests you have written for your software
While we do not have formalized tests for our application, we have implemented multiple console logs to track whether the code is retrieving the correct content and performing tasks correctly. These can be accessed through inspecting our page as you run it in your browser.

### The API's for our application
/api - API route for course grades and GPA data. GET - Logs to console response query from URL. returns response 'Got a GET request from /api'. POST - obtains course name from request body to fetch url. fetch data json from PlanetTerp grades API and returns JSON response. PUT - returns response 'Got a PUT request at /api'.

### Known Bugs
- There may be incorrect data that needs to be updated.
- Some imbalances of how information is placed on pages, due to issues with Bulma

### Future Development
- Making sure all record entries are up-to-date and accurate
- Expanding the capabilities of the search bar within the Player Info page
- Have the search bar for the Team Info page include more base information for its seeking of suggestions
- Improvment of overall aesthetics (e.g., different color palette, equity in order of placed boxes)

* [Markdown guide](https://www.markdownguide.org/cheat-sheet/)