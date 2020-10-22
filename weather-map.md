# AJAX Assignment
The main focus of this assignment will be using AJAX to pull JSON data from the openweather.com API.

## Ajax jQuery resource
You all learned a whole lot today! good work! you're not expected to have all this suff memorized. Ff you want to refresh yourselves on the jQuery AJAX syntax go to the [documentation](http://api.jquery.com/jquery.ajax/)

## 1. NPM
[NPM](https://www.npmjs.com/) is a highly used javascript package manager. It automates the task of installing packages. We've touched on it but it's important to dive in a little deeper as it's going to make our lives much easier. Watch [this video playlist](https://www.youtube.com/playlist?list=PLQso55XhxkgBMeiYmFEHzz1axDUBjTLC6) to get a sense of what it can do.

## 2. Event Loop
Understanding the event loop is really key to undertstanding javascript. It's deeper than we've gone so far but this is an amazing video that explains it really clearly.
[event loop video](https://www.youtube.com/watch?v=8aGhZQkoFbQ)

## 3. Postman
[Postman](https://www.getpostman.com/) is a tool that allows you to access api's within a nice GUI.
It's a great way to test out API endpoints before you write your actual code. Go [here](https://www.getpostman.com/docs/) and follow the instructions to install the **native** app. Then read [this](https://www.getpostman.com/docs/requests) and [this](https://www.getpostman.com/docs/responses) to help you get started.

# 4. Building a weather app!!

Here's an exciting challenge: You'll be building a small weather app, using your newfound skills with APIs!

## Setting up

#### Make sure you follow all of these steps!

For this homework you'll be using the Open Weather Data API. In order to use it, please follow these steps:

1. Sign up for a free [Open Weather Map](https://home.openweathermap.org/users/sign_up) account!
2. Once you've signed up, you're given an [API key](https://home.openweathermap.org/api_keys). Copy that API key and keep track of it somewhere!
3. Open Postman to check out the data you're working with & to verify that your key works. Make a GET requrest to the following URL in postman, adding your API key to the end.

```
http://api.openweathermap.org/data/2.5/weather?q=10025,us?units=imperial&appid=[PUT YOUR API KEY HERE]
```
#### Your workflow should start with pseudocoding the app logic.
Although the homework submission completion status will be based on the code alone, if your code isn't up to par OR or you found the assignment too challenging to complete you can bet the first place were going to check is your pseudocode.

## Your page should have:
- An input field for a user to enter a zip code
- A submit button
- When the submit button is clicked:
    - A GET request should fetch the weather data from the API
    - The following data should be rendered on the page:
        - City name
        - Current temperature
        - Weather description
        - Min temp
        - Max temp
- Have the temperature turn blue if under 40, and red if above 90.

Here are some zip codes to test!
- 99501 (Anchorage)
- 99723 (Barrow, AK)
- 60605 (Chicago)
- 70124 (New Orleans)
- 77030 (Houston, TX)
- 00902 (San Juan, Puerto Rico)
- 46923 (Delphi, IN)
- 94123 (San Francisco, CA)

### Submit via a pull request to your own branch by Sunday, 20 August, at 11:00 PM
