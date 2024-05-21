'use server';

export async function getUsers() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        let data = await response.json();
        return data;
    } catch (e) {
        return { message: e.message };
    }
}