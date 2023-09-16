// Create an Express app that returns a Promise and returns the app at the end

const saySomething = (something: string) => console.log(something);

export function sayHelloWorld() {
  saySomething('Hello World!!');
}
