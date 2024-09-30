export default function taskBlock(trueOrFalse) {
  const task = false; // Declare with const since these should not be reassigned in the outer scope
  const task2 = true;

  if (trueOrFalse) {
    const task = true; // These are block-scoped within the if statement
    const task2 = false;
    return [task, task2]; // Return from inside the block if true
  }

  return [task, task2]; // Return from outside the block if false
}

