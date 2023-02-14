const sentence = "hello there from lighthouse labs";
let timer = 1000;
for (const char of sentence) {
  // process.stdout.write(char);
  setTimeout(() => {
    process.stdout.write(char);// print the char here
  }, timer); // <= 1s delay to make it noticeable. Can dial it down later.
  timer += 50;
}

