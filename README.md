# VendEx Front-End Test

In this repository you will find a simple setup with React, Webpack, Babel, and Apollo.

With the help of a wrapper of The Star Wars API (https://swapi.dev/) your task is to finish the simple app. You will use
a GraphQL wrapper of the API with the endpoint: https://swapi-graphql.netlify.app/.netlify/functions/index

In ```components/movies.js``` all the movies in the API is listed in a table. Use any styling package to make it look nice.

If you click on a movie title a modal ```components/movieInfo.js``` is shown. Your tasks are:

1. Add a column that displays how old the movie is in years
2. Style the modal to float on top of the main page (so it becomes an actual modal)
3. Add more information to the modal:
    - The opening crawl
    - A list of planets in the movie

You can find a reference to the GraphQL API here: https://studio.apollographql.com/public/star-wars-swapi/variant/current/explorer


## Submitting the test

1. Fork this repository
2. Solve as many tasks as you can and commit them in a fitting manner
3. Upload the forked repository and
4. Share the repository with us by either making it public and send us the repository link _or_ inviting us to the forked project.




## Errors

Trying to create a CSS file I got some babel errors with the loader so I decided to do an inline CSS to make the project work. It isnt pretty mas it is functional.

These are the solutions that I've tried:

- https://stackoverflow.com/questions/37934147/you-may-need-an-appropriate-loader-to-handle-this-file-type-with-webpack-and-c

- https://stackoverflow.com/questions/66335821/how-do-i-add-babel-preset-react-to-the-presets-section-of-babel-config-js

- https://github.com/babel/babel/issues/9351

- https://babeljs.io/blog/2015/10/31/setting-up-babel-6

And those are the errors:

- ![error](/src/image/error.png)

- ![error](/src/image/error2.png)
