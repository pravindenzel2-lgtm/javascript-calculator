const { select, input } = require("@inquirer/prompts");

const {
  add,
  subtract,
  multiply,
  divide,
} = require("./calculator");

const history = [];

async function main() {
  let running = true;

  while (running) {
    const action = await select({
      message: "Welcome to JavaScript Calculator!",
      choices: [
        { name: "Addition (+)", value: "add" },
        { name: "Subtraction (-)", value: "subtract" },
        { name: "Multiplication (*)", value: "multiply" },
        { name: "Division (/)", value: "divide" },
        { name: "View History", value: "history" },
        { name: "Quit", value: "quit" },
      ],
    });

    if (action === "quit") {
      console.log("Thank you for using the calculator!");
      running = false;
      continue;
    }

    if (action === "history") {
      console.log("\nCalculation History:");

      if (history.length === 0) {
        console.log("No calculations yet.");
      } else {
        history.forEach((item, index) => {
          console.log(
            `${index + 1}. ${item.num1} ${item.operation} ${item.num2} = ${item.result}`
          );
        });
      }

      continue;
    }

    const num1 = Number(await input({ message: "Enter the first number:" }));
    const num2 = Number(await input({ message: "Enter the second number:" }));

    if (!Number.isFinite(num1) || !Number.isFinite(num2)) {
      console.log("Please enter valid numbers.");
      continue;
    }

    try {
      let result;

      switch (action) {
        case "add":
          result = add(num1, num2);
          break;
        case "subtract":
          result = subtract(num1, num2);
          break;
        case "multiply":
          result = multiply(num1, num2);
          break;
        case "divide":
          result = divide(num1, num2);
          break;
      }

      console.log(`Result: ${result}`);

      history.push({
        num1,
        operation: action,
        num2,
        result,
      });
    } catch (error) {
      console.log(error.message);
    }
  }
}

main().catch(console.error);