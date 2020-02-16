# Energy Australia

## Component Outline

This is a React app written in typescript which allows user to view the music festival data organized by Record Label name

## Running

### Install packages.

`npm install`

### Set up settings

#### Locally

1. You will need to have the api running locally for this to work
2. npm start is all you need to start this app
3. The API will start at port 5000 and UI will connect to the API 
4. Please create a .env file at the top level directory with the following entry
MUSIC_FESTIVALS_URL=/music-festivals

### Run the application:

`npm start`

## Tech Stack

- Typescript
- Jest for unit tests
- Typestyle for CSS
- React
- Enzyme for unit tests

## CLI Commands

``` bash
# install dependencies
npm install

# start server
npm start

# run tests with jest
npm test
Please note that you will see warnings when you run the test, this is because enzyme does not support newer React features like Hooks. This will be addressed in Reacts next release. But all the tests do pass
https://github.com/airbnb/enzyme/issues/2073 - Issue that is being tracked
```