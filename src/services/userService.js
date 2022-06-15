export async function getUsers() {
    const response = await fetch(`${process.env.REACT_APP_API_PREFIX}/users`);
    const users = await response.json();
    return users;
}