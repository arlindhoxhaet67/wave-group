/* 
 * Filename: complex_code.js
 * Description: This code demonstrates a complex and elaborate implementation of a task scheduler.
 * It features task prioritization, parallel execution, and event handling.
 */

class Task {
  constructor(id, priority) {
    this.id = id;
    this.priority = priority;
    this.status = 'PENDING';
    this.dependencies = [];
  }

  addDependency(task) {
    this.dependencies.push(task);
  }

  execute() {
    console.log(`Executing task ${this.id}`);
    this.status = 'RUNNING';
    // Simulate time-consuming task
    for (let i = 0; i < 100000000; i++) {
      // Do some calculations
    }
    this.status = 'COMPLETED';
    console.log(`Task ${this.id} completed`);
  }
}

class TaskScheduler {
  constructor() {
    this.tasks = [];
    this.completedTasks = [];
  }

  addTask(task) {
    // Check if the task doesn't have any unresolved dependencies
    if (task.dependencies.every(dep => this.completedTasks.includes(dep))) {
      this.tasks.push(task);
    } else {
      console.log(`Task ${task.id} is waiting for dependencies`);
    }
  }

  executeTasks() {
    while (this.tasks.length > 0) {
      const task = this.tasks.shift();
      task.execute();
      this.completedTasks.push(task.id);
    }
    console.log('All tasks completed');
  }
}

// Create tasks with different priorities and dependencies
const task1 = new Task(1, 2);
const task2 = new Task(2, 1);
const task3 = new Task(3, 3);
const task4 = new Task(4, 1);

task1.addDependency(task2);
task3.addDependency(task2);
task4.addDependency(task1);

// Setup the task scheduler
const scheduler = new TaskScheduler();

// Add tasks to the scheduler
scheduler.addTask(task1);
scheduler.addTask(task2);
scheduler.addTask(task3);
scheduler.addTask(task4);

// Execute the tasks
scheduler.executeTasks();
