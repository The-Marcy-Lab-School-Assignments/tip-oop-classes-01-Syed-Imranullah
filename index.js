/**
 * Task Class
 *
 * A class to manage tasks with title, priority, completion status, and time tracking.
 */

class Task {
  //write your code here
  #completed;
  #minuteSpent;
  static allTasks = [];
  constructor(title, priority) {
    this.title = title;
    this.priority = priority
    this.#completed = false;
    this.#minuteSpent = 0;

    Task.allTasks.push(this)
  }
  get completed() {
    return this.#completed;
  }
  get minuteSpent() {
    return this.#minuteSpent;
  }

  workOn(minute) {
    this.#minuteSpent += minute;
    console.log(
      `Worked on ${this.title} for ${minute} minutes. Total time: ${
        this.#minuteSpent
      }`
    );
  }
  complete() {
    this.#completed = true;
    console.log(`${this.title} has been completed!`);
  }
  isComplete() {
    return this.#completed;
  }

  static getTotalTasks() {
    return Task.allTasks.length
  }
  static findByTitle(title) {
    return Task.allTasks.find(tasks => tasks.title === title)
  }
}

//Test class with examples below:

// Export the Task class for testing
module.exports = { Task };
c;
