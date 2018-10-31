var inquirer = require('inquirer');
var teamStarters = [];
var teamSubs = [];
var teamWins = 0;
function Player(name, position, offense, defense) {
    this.name = name;
    this.position = position;
    this.offense = parseInt(offense); // 1-10 limit
    this.defense = parseInt(defense); // 1-10 limit 
    this.goodGame = function () {
        if(Math.floor(Math.random()*2) === 0) {
            this.offense++;
        } else {
            this.defense++;
        }
        //coin flip to increase players offense or defense 
    };
    this.badGame = function () {
        if(Math.floor(Math.random()*2) === 0) {
            this.offense--;
        } else {
            this.defense--;
        }
        // coin flip to decrease players offense or defense 
    };
    this.printStats = function () {
        console.log("Player: " + this.name + "\nPosition: " + this.position + "\nOffense score: " +
         this.offense + "\nDefense score: " + this.defense)
     };
}; // end Player Constructor. 
var teamsize = 0;
function buildTeam() {
    if(teamsize === 0) { console.log(" your first two players are startes"); }
    if(teamsize < 3) {
    
inquirer.prompt([
    {type:'input',
    message: 'What is players name?',
    name: 'name'},
    {type:'input',
    message: 'What is players position?',
    name: 'position'},
    {type:'input',
    message: 'What is players offense score (limit 1-10)?',
    name: 'offense'},
    {type:'input',
    message: 'What is players defense score (limit 1-10)?',
    name: 'defense'}
    
]).then(answers => {
    var newPlayer = new Player(answers.name, answers.position, answers.offense, answers.defense);
    if(teamsize <2) {teamStarters.push(newPlayer); } else {
        teamSubs.push(newPlayer);
    }
    teamsize++;
    buildTeam();

})
} else {
    console.log("starters");
    for(var x=0; x<teamStarters.length; x++) {
        teamStarters[x].printStats();// end if teamsize less than 2 check. 
    }
    console.log("subs");
    for (var y=0; y<teamSubs.length; y++) {
        teamSubs[y].printStats();
    }
    playGame();
}
};// end build team function. 

buildTeam(); // global call to buildTeam function 
var games = 0;
function playGame() {
    var o = Math.floor(Math.random()*20) +1;
    var d = Math.floor(Math.random()*20) +1;
    if(games < 2) {
        var totalO = 0;
        var totalD = 0;
        for(var x=0; x<teamStarters.length; x++) {
           totalO += teamStarters[x].offense;
           totalD += teamStarters[x].defense;
        }
        // offense comparison
        if(o < totalO) {
            teamWins++;
            console.log(" total team wins: " + teamWins);
        }
        if(d > totalD) {
            teamWins--;
            console.log(" total team wins: " + teamWins);
        }
        // defense comparison
      
    games++
    if(games > 0 && games < 2) {
        inquirer.prompt({type:'list',
        message: 'Do you want to sub a player?',
        choices: teamStarters,
        name:'sub'
    }).then(answers => {
        console.log(answers);
        var totalD = 0;
        for(var x=0; x<teamStarters.length; x++) {
            if (answers.sub == teamStarters[x].name) {
                var hold = teamStarters[x];
                teamStarters[x] = teamSubs[0] 
                teamSubs[0] = hold; 
                console.log('starters');
                console.log(teamStarters);
                console.log('------')
                console.log('subs');
                console.log(teamSubs);
            }
        }
    });
    
    } // if round 1-last end 
    playGame();
}
};
// var starter = new Player;