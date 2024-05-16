'use server';
export async function getPhotos() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/photos');
        let data = await response.json();
        return data;
    }catch (e: any) {
        return {
            message: e.message,
        };
    }
    
 
}