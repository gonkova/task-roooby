'use server';
export async function getComments() {
    try {
        let response = await fetch('http://jsonplaceholder.typicode.com/comments?_limit=10');
        let data = await response.json();
        return data;
    }catch (e: any) {
        return {
            message: e.message,
        };
    }
    
 
}