// needs a GET route to /survey which should display survey.html page
// needs a default / route that displays home.html page

const path = require('path')

// needs to include functions from friends.js in between curly braces
const {} = require ('../app/data/friends.js')

module.exports = app => {
    // GET survey
    app.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/survey.html'))
    })
    // res.json()

    // default route for home page
    app.use(function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/home.html'))
    })
}