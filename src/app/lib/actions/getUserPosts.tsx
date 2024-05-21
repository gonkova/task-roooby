'use server';

export async function getUserPosts(userId, page = 1, pageSize = 10) {
    try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}&_page=${page}&_limit=${pageSize}`);
        let posts = await response.json();
        
        response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        let totalPosts = (await response.json()).length;

        return { posts, totalPosts };
    } catch (e) {
        return {
            message: e.message,
        };
    }
}
