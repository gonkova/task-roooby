import { getPostById } from "@/app/lib/actions/getPostById";
import { getUserPhotos } from "@/app/lib/actions/getUserPhotos";
import { getUser } from "@/app/lib/actions/getUser";
import React from 'react';

export default async function PostDetailPage({ params: { id } }) {
    const post = await getPostById(id);
    const photos = await getUserPhotos(post.userId);
    const photo = photos.find(p => p.id == id);
    const user = await getUser(post.userId);

    if (!post || !photos || !user) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto py-20 px-4 sm:px-8">
            <div className=" flex flex-col w-1/2 mx-auto ">
                <div className="text-gray ml-5 ">POST</div>
                    <hr className=" my-4 border-gray" />
                    {photo && (
                        <img
                            src={photo.url}
                            alt="Full Size"
                            className="w-full h-auto rounded-lg mt-4"
                        />
                    )}
                    <p className="text-black text-sm md:text-lg font-bold mt-6 mb-6">
                        <span> 05 Sep 2024,</span><span className='text-gray ml-2'> {user.name}</span>
                    </p>
                    <h3 className='text-3xl font-bold text-center pb-10'>{post.title}</h3>
                    <p className="text-2xl text-center">{post.body}</p>
                </div>
            </div>
   
    );
}
