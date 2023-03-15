//create a new gameObject when called
function gameObject(){
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ['Black', 'White'],
            players:{
                'Alan Anderson': {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                'Reggie Evans': {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                'Brook Lopez': {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                'Mason Plumlee': {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                'Jason Terry': {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ['Turquoise', 'Purple'],
            players:{
                'Jeff Adrien': {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                'Bismak Biyombo': {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                'DeSagna Diop': {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                'Ben Gordon': {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                'Brendan Haywood': {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
                
            }
        }
    }
}
//console.log(gameObject())
//returns home team name
function homeTeamName(){
    return gameObject()["home"]["teamName"];
}
//console.log(homeTeamName());

//This function returns the number of points an inputted player name scored
function numPointsScored(name){
    const obj =gameObject();
    if(name in obj.home.players) return obj.home.players[name].points;
    else if (name in obj.away.players) return obj.away.players[name].points;
    else return "no player found";
}
//console.log(numPointsScored('Jeff Adrien'));

//This function returns the shoe size of an inputted player name
function shoeSize(name){
    const obj =gameObject();
    if(name in obj.home.players) return obj.home.players[name].shoe;
    else if (name in obj.away.players) return obj.away.players[name].shoe;
    else return "No player found with this name";
}
//console.log(shoeSize('Mason Plumlee'));

//This function returns an array of the team colors for the inputted team name
function teamColors(teamName){
    const obj = gameObject();
    if(obj.home.teamName == teamName) return obj.home.colors;
    else if (obj.away.teamName == teamName) return obj.away.colors;
    else return "Team name does not currently exist";
}
//console.log(teamColors("Brooklyn Nets"));

//This function returns all team names in gameObject
function teamNames(){
    const obj = gameObject();
    return [obj.home.teamName, obj.away.teamName];
}
console.log (teamNames());

//This function returns an array of player jersey numbers for the inputted team name
function playerNumbers(teamName){
    const obj = gameObject();
    function jerseyGenerator(obj, team){
        const nums =[];
        for (const player in obj[team].players) nums.push(obj[team].players[player].number);
        return nums;
    }
    if(obj.home.teamName == teamName) return jerseyGenerator(obj, "home");
    else if (obj.away.teamName == teamName) return jerseyGenerator(obj, "away");
    else return "Team name does not currently exist";
}
//console.log(playerNumbers("Brooklyn Nets"));

//This function returns an object containing the inputted player's stats.
function playerStats(pName){
    const obj = gameObject();
    if(pName in obj.home.players) return obj.home.players[pName];
    else if (pName in obj.away.players) return obj.away.players[pName];
    else return "No player found with this name";
}
//console.log(playerStats("Alan Anderson"));

//This function returns the number of rebounds made by the player with the largest shoe size 
function bigShoeRebounds(){
    const obj = gameObject();
    const pName = findNameWithMaxTrait("shoe");
    if(pName in obj.home.players) return obj.home.players[pName].rebounds;
    else return obj.away.players[pName].rebounds;
}
console.log(bigShoeRebounds() + " was the most rebounds made by a player in the game");

//This function returns the player name who scored the most points
function mostPointsScored(){
    return findNameWithMaxTrait("points");
}
console.log(mostPointsScored()+ " had the most points");

//This function calculates the total teams scores and returns (winning team name) win!
function winningTeam(){
    const obj = gameObject();
    const teamScores = [0,0];
    obj.home.score = 0;
    obj.away.score =0;
    for (const key in obj){
        for (const player in obj[key].players) {
            obj[key].score+=obj[key].players[player].points;
        }
    }
    //console.log(obj.home.score, obj.away.score);
    if(obj.home.score === obj.away.score) return "Tie game!";
    else return (obj.home.score>obj.away.score ? `${obj.home.teamName} win!` : `${obj.away.teamName} win!`);
}
console.log(winningTeam());

//This function returns the player with the longest name
function playerWithLongestName(){
    const obj = gameObject();
    const longestName = ["", 0];
    for (const key in obj){
        for (const player in obj[key].players) {
            nameLength = String(player).length;
            if (nameLength>longestName[1]) {
                longestName[0]=player;
                longestName[1]= nameLength;
            }
        }
    }
    return longestName[0];
}
console.log(playerWithLongestName() + " had the longest name");

//returns player with the most steals
function playerWithMostSteals(){
    return findNameWithMaxTrait("steals");
}
console.log(playerWithMostSteals() + " had the most steals");

//function reused too many times, created a generic return player with max (trait) function
function findNameWithMaxTrait(trait){
    const obj = gameObject();
    const maxTrait = ["", 0];
    for (const key in obj){
        for (const player in obj[key].players) {
            numTrait = obj[key].players[player][trait];
            if (numTrait>maxTrait[1]) {
                maxTrait[0]=player;
                maxTrait[1]= numTrait;
            }
        }
    }
    return maxTrait[0];
}