# Prisma application

## Description

Simple React.js application that allows to analyze a person's age, gender and cultural appearance based on the provided image URL

## Installation

```bash
    npm install

    npm run dev - Runs Prisma Application

    npm run client - Runs only React.js
    npm run server - Runs only small Node.js server
```

## Usage

- Fork and clone application
- Install dependencies

- Obtain API key from [Clarifi](https://docs.clarifai.com/getting-started/getting-started) to get access to AI-powered image recognition service

- To hide API key Prisma makes API call through a use of Node.js server app, so you need to include .env file in the root of the project (next to app.js) with your key from Clarifi e.g. `REACT_APP_CLARIFI_KEY=YOUR_SECRET_KEY_FROM_CLARIFI`

- Start Application
- Insert link URL with image of a person and click button analyze

## License:

Copyright © by Roman Pelikh. You are 100% allowed to use this application for both personal and commercial use, but NOT to claim it as your own project.
A credit to the original author, Roman Pelikh, is of course highly appreciated!
