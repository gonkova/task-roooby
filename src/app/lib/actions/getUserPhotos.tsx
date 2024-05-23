'use server';
export async function getUserPhotos(id) {
   
    try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/photos?userId=${id}`);
        let data = await response.json();
        return data;
    }catch (e: any) {
        return {
            message: e.message,
        };
    }
    
 
}

