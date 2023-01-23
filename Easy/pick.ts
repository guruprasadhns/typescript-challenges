interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type MyPick<T, K extends keyof T> = {
    [key in K]: T[key];
}

type Expected1 = MyPick<Todo, 'title'>;
type Expected2 = MyPick<Todo, 'title'|'completed'>
