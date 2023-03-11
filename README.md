# Social Network API

## Description

This app is the back end for an Social Network. MongoDB is used for the database, Mongoose is use to connect with the database, Express is used to build the RESTful API.

## User Story
```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Installation

First clone the repo to your local machine. You will need to have [node.js](https://nodejs.org/en/) installed. The from the root of the repo run ```npm install```, this will install all the dependencies needed.

## Usage
[Testing the routes in Insomnia](https://drive.google.com/file/d/1GXMjGtX9tiv2Ao5bZjt-FtlJYPRFqvR7/view)