var friendData = require('../data/friends.js');
var path = require('path');

// APIRequests - when users "visit" a page. 


var totalDifference = 0;

module.exports = function (app) {
    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

    //API POST Request-handles when user submits a form & submits data to the server.



    app.post('/api/friends', function (req, res) {

        var greatMatch = {
            name: "",
            image: "",
            matchDifference: 1000
        };
        var usrData = req.body;
        var usrName = usrData.name;
        var usrImage = usrData.image;
        var usrScores = usrData.scores;

        var totalDifference = 0;

        //loop through the friends data array of objects to get each friends scores
        for (var i = 0; i < [friends].length - 1; i++) {
            console.log(friends[i].name);
            totalDifference = 0;

            //loop through that friends score and the users score and calculate the 
            // absolute difference between the two and push that to the total difference variable set above
            for (var j = 0; j < 10; j++) {
                totalDifference += Math.abs(parseInt(usrScores[j]) - parseInt(friends[i].scores[j]));

                if (totalDifference <= greatMatch.friendDifference) {


                    greatMatch.name = friends[i].name;
                    greatMatch.photo = friends[i].photo;
                    greatMatch.matchDifference = totalDifference;
                }
            }
        }

        friends.push(usrData);

        res.json(greatMatch);
    });
};