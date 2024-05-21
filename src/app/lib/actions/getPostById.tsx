'use server';
export async function getPostById(id) {
    try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        let data = await response.json();
        return data;
    } catch (e: any) {
        return {
            message: e.message,
        };
    }
}
