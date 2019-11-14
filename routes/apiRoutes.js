// needs a GET route /api/friends that's used to dsiplay JSON of all possible friends
// needs a POST route /api/friends that's used to handle incoming survey results (used to handle compatability logic)

const {} = require ('../app/data/friends.js')

module.exports = app => {
    // GET display of all friends
    app.get('/api/friends', function(req, res) { 
    // friendList
    res.json()
    })

    // POST route for handling incoming survey results
    app.post('/api/friends', function (req, res) {
        const newScores = req.body.scores
        const scoresArr = []
        // to start friend count for array
        const friendCount = 0
        const bestMatch = 0

        // run through all current friends
        for(let i=0; i<friendsArr.length; i++){
            const scoresDiff = 0
            //run through scores to compare friends
            for(const x=0; x<newScores.length; x++){
            scoresDiff += (Math.abs(parseInt(friendsArr[i].scores[x]) - parseInt(newFriendScores[x])))
            }

            //push results into scoresArr
            scoresArray.push(scoresDiff)
            }
            
            //after all friends are compared, find best match
            for(const i=0; i<scoresArr.length; i++){
            if(scoresArr[i] <= scoresArr[bestMatch]){
            bestMatch = i
            }
        } 

        //return bestMatch data
        var bff = friendsArr[bestMatch]
        res.json(bff)

    //pushes new submission into the friendsList array
    friendsArr.push(req.body)
    })
}