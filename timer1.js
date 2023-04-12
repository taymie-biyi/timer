const time = process.argv.slice(2);

const setAlarm = (time) => {
  for (sec of time) {
    if (!sec){
      return;
    }
    if (isNaN(sec) || sec < 0) {
      continue;
    }

    setTimeout(() => process.stdout.write('\x07'), (sec * 1000));
  }
};

setAlarm(time);