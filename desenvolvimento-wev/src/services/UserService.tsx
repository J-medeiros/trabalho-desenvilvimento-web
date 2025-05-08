const users: string[] = ["Joao Vitor", "Joao Paulo", "Beatriz", "TomasTurbando"];

export function getUsers() {
  return users;
}

export function addUser(name: string) {
  users.push(name);
}
