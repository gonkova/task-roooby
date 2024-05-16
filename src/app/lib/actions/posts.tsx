'use server';
export async function getPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
        let data = await response.json();
        return data;
    }catch (e: any) {
        return {
            message: e.message,
        };
    }
    
 
}