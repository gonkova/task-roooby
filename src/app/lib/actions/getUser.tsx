'use server';
export async function getUser(id) {
    try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        let data = await response.json();
        return data;
    }catch (e: any) {
        return {
            message: e.message,
        };
    }
    
 
}