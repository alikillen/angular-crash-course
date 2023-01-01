// creating an interface for tasks
// see research on interfaces vs classes

export interface Task {
  // id is optional because we wont have one until we save it with JSON server (fake rest API)
  id?: number;
  text: string;
  day: string;
  reminder: boolean;
}
