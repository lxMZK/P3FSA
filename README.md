# Project 3: Full Stack Application
*Alex Mizak*

## How To

Most of the website can be viewed and accessed via the navbar located either at the top or left side of the browser. A link to the chat page will always be available, but will only direct to chat once logged in with a valid user.

A user can create a new account at any time. A link to the register page can be found on the login page. When creating an account, a unique username AND email must be provided.

### Routes

|Route Name|URL Path|Purpose|
|---|---|---|
|Index|/|Display home page|
|About|/about|Display about page|
|Projects|/projects|Display project page|
|Contact|/contact|Display contact page|
|Chat|/chat|Display chat page|
|Login|/auth/login|Display login page|
|Register|/auth/register|Display register page|

### REST API Routes

|Route Name|URL Path|HTTP Method|Purpose|
|---|---|---|---|
|Chat|/chat|GET|Get all chat messages|
|Chat|/chat|POST|Submit new message|
|Login|/auth/login|POST|Set current user|
|Register|/auth/register|POST|Submit new user|

## App inspiration

With all of the new knowledge I have been garnering, I wanted to create a platform on which I could experiment and let my creations free.

The idea is simple: build something to represent myself as a developer. But from there is where the fun begins. As stated, I want this to be an ever evolving platform to host small projects or other content. In a sense this will be the landing site for putting my name out there as an up and coming developer.

For the initial development stage I will be focusing on creating a general portfolio type website. Inclusion of a chat room type feature will help accomplish requirements set.

## Tech Used

React
React Router Dom
CSS
JS
Node/Express
PSQL/Postgres
Axios
JWT
Cookie-parser
Context-provider
tsParticles
Date

## WIP

Style improvements
User Profile Views
User Image
User Styles and other settings
Chat moderation functions

### Requirements

- [x] User Authentication
- [x] Python/Node backend
- [x] Flask/Django/Express backend
- [x] React or other frontend framework
- [x] Database with two collections/tables
- [x] Relational database
- [x] ORM/ODM
- [x] Runs in browser
- [x] Responsive to screen size changes
- [x] README.md includes:
  - [x] Application inspiration
  - [x] How to use application
  - [x] Technologies implemented
  - [x] Outstanding bugs/WIP
- [x] Track on github
- [ ] DEPLOY
