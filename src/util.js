export function getRandomArray() {
  let randomArray = [];

  for (let index = 0; index < 10; index++) {
    randomArray.push(Math.floor(Math.random() * 101));
  }

  return randomArray;
}
