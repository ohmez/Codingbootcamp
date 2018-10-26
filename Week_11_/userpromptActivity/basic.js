var inq = require('inquirer');

// inq.prompt({type:"",
// message: "what is your name?",
// name: "username",}).then (answers => {
//     console.log("you say your name is "+ answers.username + " but what are you to me?");
// }).then( inq.prompt({
//     type: "list",
//     name:"friends",
//     message: "are you my?",
//     choices: ["pall", "friend", "buddy"]}).then (answers => {
//         if(answers.friends == "pall") {
//             console.log("I aint your pall friend");
//         }
//         if(answers.friends == "friend") {
//             console.log("I aint your friend buddy");
//         }
//         if(answers.friends == "buddy") {
//             console.log("I aint your buddy pall");
//         }
    // }));
inq.prompt([
    {type:"",
    message: "what is your name?",
    name: "username",
    },
    {type: "input",
    message:"Can I call you buddy?",
    name: "first_answer",
    },
    {
        type: "list",
        name:"friends",
        choices: ["pall", "friend", "buddy"]
    },
    {
        type: "checkbox",
        name: "checked",
        message: "What do you prefer?",
        choices: ["apples", "oranges", "strawberries"]

    }
]).then (answers => {
    if(answers.first_answer == "dont call me buddy pall") {
        console.log("You just get me, we're definitely going to be friends");
        return;
    }
    console.log("you say your name is "+ answers.username + " but what are you to me?");
    
    if(answers.friends == "pall") {
        console.log("I aint your pall friend");
    }
    if(answers.friends == "friend") {
        console.log("I aint your friend buddy");
    }
    if(answers.friends == "buddy") {
        console.log("I aint your buddy pall");
    }
    if(answers.friends == "buddy" && answers.first_answer == "no") {
        console.log("Wait seriously, you said I can't call you buddy, but you're saying thats what you are to me? GTFO");
    }
    console.log("You like "+ answers.checked + " I like those too");
    
    
    

})