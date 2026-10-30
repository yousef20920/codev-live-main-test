export function openTodos(list) {
  return list.filter((item) => !item.done);
}

export function doneTodos(list) {
  return list.filter((item) => item.done);
}
