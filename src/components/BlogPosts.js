'use client';
import React from 'react';
import Link from 'next/link';
import { useAppContext } from "@/context";

const BlogPosts = () => {
    const { posts, photos } = useAppContext();
    const defaultCategory = "POST";
    const defaultDate = "01 Jan 2022";
    const defaultAuthor = "by Bill Holloway";

    return (
        <div className="container mx-auto mt-12 p-10 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
                {posts.map((post) => {
                    const postPhoto = photos.find(photo => photo.id === post.id);

                    return (
                        <Link key={post.id} href={`/blog/${post.slug}`}>
                            <div className="mx-auto">
                                <div className="w-24 h-8 text-gray text-sm font-bold -mb-3">{post.category || defaultCategory}</div>
                                <hr className="my-4 mb-6 border-gray" />
                                {postPhoto && (
                                    <div>
                                        <img
                                            src={postPhoto.url}
                                            alt="Изображение"
                                            className="w-full h-auto rounded-lg transition-transform ease-in-out mt-4"
                                        />
                                    </div>
                                )}
                                <h2 className="text-sm md:text-2xl font-bold mt-6 mb-2 md:mb-6">{post.title}</h2>
                                <p className="text-black text-sm md:text-lg font-bold mb-4">
                                    <span>{post.date || defaultDate},</span><span className='text-gray ml-2'>{post.author || defaultAuthor}</span>
                                </p>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

export default BlogPosts;
