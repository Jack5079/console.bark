declare global {
  interface Console {
    bark(bark: any, l?: number): void;
  }
}

console.bark = function (
  this: Console,
  bark: any,
  l = bark.toString().length / 1.66,
) {
  this.log(
    `
        /‾${`‾‾`.repeat(l)}‾
  🐶  < `,
    bark,
    `
        \\_${`__`.repeat(l)}_
  `,
  );
};

export default console.bark;
