// 1. Update this function to use a short circuit evaluation to set a default value for `message` to "Hello World!"
// Think back to node and how we set a PORT 😉
let message = process.argv[2] || "";
const logMessage = () => message ? console.log(message) : console.log("Hello World!");

logMessage();

const logTired = (beenWorkingAllDay) => {
  let message = beenWorkingAllDay ? "I'm feeling really tired" : "I'm wide awake!";
  console.log(message);
};

logTired(false);
// below is the unsolved example
// const logMessage = message => {
//   if (!message) {
//     message = "Hello World!";
//   }
//   console.log(message);
// };

// logMessage();

// const logTired = (beenWorkingAllDay) => {
//   let message;

//   if (beenWorkingAllDay) {
//     message = "I'm feeling really tired";
//   } else {
//     message = "I'm wide awake!";
//   }

//   console.log(message);
// };

// logTired(true);

