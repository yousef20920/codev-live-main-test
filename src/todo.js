export function addTodo(list, text) {
  return [...list, { text, done: false }];
}

export function toggleTodo(list, index) {
  return list.map((item, i) => (i === index ? { ...item, done: !item.done } : item));
}
