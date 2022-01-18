import type { NextPage } from "next";
import { useState } from "react";
import { Button } from "../components/Button";
import { List, ListItem } from "../components/List";
import { TextField } from "../components/TextField";

interface ITodo {
  title: string;
  description: string;
  state: string;
}

const Home: NextPage = () => {
  const [todo, setTodo] = useState<ITodo>({
    description: "",
    state: "",
    title: "",
  });
  const [todos, setTodos] = useState<Array<ITodo>>([]);


  const onAddTodo = (todo: ITodo) => {
    setTodos([...todos, todo]);
  };

  const onDeleteTodos = (todoIndex: number) => {
    const tempTodos = todos;
    tempTodos.splice(todoIndex, 1);
    setTodos([...tempTodos]);
  };

  const onEdit = (index: number) => {
    const tempTodos = todos;
    const editedTodo = todos[index];

    tempTodos.splice(index, 1);

    setTodo({
      title: editedTodo.title,
      description: editedTodo.description,
      state: editedTodo.state,
    });

    setTodos([...tempTodos]);
  };

  // const [todos, setTodos] = useState<Array<ITodo>>([]);
  return (
    <main>
      <h1 className="text-center text-3xl py-8 uppercase font-bold">
        todos page
      </h1>
      <section
        className="container mx-auto shadow-lg py-4 px-4"
        style={{ width: "40%" }}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onAddTodo(todo);
            setTodo({ title: "", description: "", state: "" });
          }}
        >
          <div>
            <TextField
              type="text"
              placeholder="title"
              className="mx-auto"
              name="title"
              onChange={(e: any) => setTodo({ ...todo, title: e.target.value })}
              value={todo.title}
            />
          </div>
          <div className="mt-4">
            <TextField
              name="description"
              type="text"
              placeholder="description"
              className="mx-auto"
              onChange={(e: any) =>
                setTodo({ ...todo, description: e.target.value })
              }
              value={todo.description}
            />
          </div>
          <div className="mt-4">
            <TextField
              name="state"
              type="text"
              placeholder="state"
              className="mx-auto"
              onChange={(e: any) => setTodo({ ...todo, state: e.target.value })}
              value={todo.state}
            />
          </div>
          <div>
            <Button type="submit" className="block w-full" onClick={() => ""}>
              save
            </Button>
          </div>
        </form>
        <List>
          {todos.map((t, index) => {
            return (
              <ListItem
                title={t.title}
                description={t.description}
                state={t.state}
                onDelete={() => onDeleteTodos(index)}
                onEdit={() => onEdit(index)}
              />
            );
          })}
        </List>
      </section>
    </main>
  );
};


export default Home;
