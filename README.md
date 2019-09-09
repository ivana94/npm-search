# npm search

[See the live demo here!](https://matijevic-npm.herokuapp.com)


### what is this? how do I use it?

Many times I've found myself wanting to use an npm package, but couldn't figure out how to use it because of poor documentation or my own lack of experience.

This project aimed at trying to find specific files that use an npm package of your choice, and hopefully the file will demonstrate at least one way to use that npm package!

So let's say you want to see how to use `normalize.css`. You can go to this site, enter `normalize.css` into the input field, and you'll see a list of files that use `normalize.css`. Then you can view the files and hopefully one of them gives you a nice example of how to use `normalize.css`!


### tech stack

This project's built with React. Testing done with Jest and Enzyme. All data supplied by the Github's Search API.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). I chose Create React App because I didn't need see a need to configure my own Webpack for this project. I just needed something that would work directly out of the box.




### getting started

1. clone the repo: `git clone https://matijevic@bitbucket.org/matijevic/npm-search.git`

2. run `npm install` or `yarn install` in your Terminal

3. run `npm start` to start up the development server. it should automatically open `localhost:3000` in the browser

4. to run tests, run `npm test` in your Terminal




### limitations / hardships

One thing I hadn't noticed while reading the documentation was that the Github API severely rate limits clients making requests for code. [Without authentication you only get 10 requests per minute!](https://developer.github.com/v3/search/) Unfortunately I couldn't figure out how to get the Basic Auth working with axios. I tried setting a `Authorization` header and passed it my base-64 encoded username:password, but that didn't work. I tried axios's `auth` property as well, which sets the `Authorization` header for you but that didn't work. Because of this user's can only make 1 request a minute. While I render an error message if a request fails due to the client reaching the rate limit, I know this isn't a great experience for a user. I was unsure of how to best handle this situation.

Another limitation is that I can't search every repo for a given npm package. I have to choose the repos to search. I chose 10 of the most popular repos with `React` in either its title, description, or README, but this isn't the best experience either as many of these repos are the source code for various packages, and reading source code isn't necessarily the best way to figure out how to use a package. If I were to spend more time on this project I would have to figure out which repos to search.
