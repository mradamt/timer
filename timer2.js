const { SIGINT } = require('constants');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const launchInteractive = function() {
  rl.question("Enter 'b', a number, or quit using ctrl + c --->  ", (userInput) => {
    // Act on user input
    if (userInput === 'b') {
      beep();
    } else if (Number(userInput) && userInput > 0) {
      console.log(`... setting timer for ${userInput} seconds`)
      setTimeout(() => {
        beep()
      }, userInput * 1000);
    } else {
      console.log(`invalid instruction: '${userInput}'`);
      launchInteractive();
    }
    
  })
}

const beep = () => {
  process.stdout.write('\x07');
  process.stdout.write('.\n');
  
  // Re-launch input function, until user cancels i.e. userInput = ctrl + c
  launchInteractive()
}

// If user wants to quit
rl.on('SIGINT', () => {
  console.log('\nThanks for using me, ciao!')
  // rl.close()
  process.exit()
})


launchInteractive()
