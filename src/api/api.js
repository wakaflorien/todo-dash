const BASE_URL = "https://dummyjson.com";

export const fetchTodos = async () => {
  const response = await fetch(`${BASE_URL}/todos?limit=4`);
  if (!response.ok) throw new Error("Failed to fetch todos");
  return response.json();
};

export const addTodo = async (todo) => {
  const response = await fetch(`${BASE_URL}/todos/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todo),
  });
  if (!response.ok) throw new Error("Failed to add todo");
  return response.json();
};

export const fetchPosts = async () => {
  const response = await fetch(`${BASE_URL}/posts?limit=4`);
  if(!response.ok) throw new Error("Failed to fetch posts");
  return response.json();
}