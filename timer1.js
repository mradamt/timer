
const [ , , ...timers] = process.argv

for (const timer of timers) {
  // Check if timer is number and > 0
  if (!Number(timer) || timer < 0) {
    continue;
  }

  setTimeout(() => {
    process.stdout.write('\x07');
    process.stdout.write('.\n');
  }, timer * 1000);
}


