# Tic-Tac-Toe

[1.0 Description](#10-description)  
[2.0 Requirement](#20-requirements)  
[2.1 Install Node JS and NPM](#21-install-node-js-and-npm)   
[3.0 Setup](#30-setup)  
[3.1 Clone project](#31-clone-project)  
[3.2 Install dependencies](#32-install-dependencies)  
[3.3 Execute in the browser browser](#33-execute-in-the-browser)
[4.0 Implementation thoughts](#40-implementation-thoughts)

## 1.0 Description ##
This is a web application featuring the famous game of Tic-Tac-Toe.

## 2.0 Requirements ##
This project requires the following software:

* Node JS/NPM
* Git

### 2.1 Install Node JS and NPM ###
Download Node JS from: https://nodejs.org/en/

After the installation, check whether node works in the terminal or not by executing the following command:
```shell
node -v
```

## 3.0 Setup ##
In order to setup the project the following steps have to be made.

### 3.1 Clone project ###
Clone the project with Git by executing the following command:
```shell
git clone https://github.com/rickgoemans/tictactoe
```

### 3.2 Install dependencies ###
Install dependencies by executing the following command:
```shell
npm install
```
### 3.3 Execute in the browser ###
Run the app (in developer mode) by executing the following command:
```shell
npm start
```

Now open the following url in the browser: http://localhost:4200

## 4.0 Implementation thoughts  ##
* For this assignment I first stored all possible winning combinations
* Each time a player makes a move I check:
  * if they at least have made 3 moves
  * Then check for each winning combination if the current player has all 3 fields in their history
* If a player matches a winning combination I apply the "win" class to the fields
* After all fields are filled in (no winner) or if there is a winner, if you click a field, the game resets. 
