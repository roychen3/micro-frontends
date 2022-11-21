import axios from 'axios';

export const fetchTodoListApi = async () => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/todos'
  );

  return response.data;
};

export const addItemApi = async (title) => {
  const response = await axios.post(
    'https://jsonplaceholder.typicode.com/todos',
    { title, completed: false }
  );

  return response.data;
};

export const updateItemApi = async (updTodo) => {
  const response = await axios.put(
    `https://jsonplaceholder.typicode.com/todos/${updTodo.id}`,
    updTodo
  );

  return response.data;
};

export const deleteItemApi = async (id) => {
  const response = await axios.delete(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );

  return response;
};
