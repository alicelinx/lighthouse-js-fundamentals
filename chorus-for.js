const chorus = "Let's dance!";
for (let repeat = 0; repeat < 10; repeat++) {
  if (repeat === 5) {
    console.log("*change key*");
  } else if (repeat === 8) {
    console.log("*change key again*");
  } else {
    console.log(chorus);
  }
}
console.log("Until the sun comes up!")