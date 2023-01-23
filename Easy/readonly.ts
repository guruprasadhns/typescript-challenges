interface Todo {
  title: string;
  description: string;
  completed: boolean;
  meta: {
    author: string;
  };
}

type MyReadonly<T> = {
  readonly [Key in keyof T]: T[Key];
};

const todo: MyReadonly<Todo> = {
  title: "test",
  description: "test description",
  completed: true,
  meta: {
    author: "test author",
  },
};
