'use client';
import React from 'react';
import Link from 'next/link';

const PostList = ({ posts, photos, currentPage, totalPages, handleNextPage, handlePreviousPage }) => {
    return (
        <div className="container mx-auto mt-12 p-10 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {posts.map((post) => {
                    const photo = photos.find(photo => photo.id === post.id);
                    return (
                        <div key={post.id} className="mb-6">
                            <div className="w-24 h-8 text-gray text-sm font-bold -mb-3">POST</div>
                            <hr className="my-4 mb-6 border-gray" />
                            <Link href={`/post/${post.id}`}>
                                <div>
                                    {photo && (
                                        <img
                                            src={photo.thumbnailUrl}
                                            alt="Thumbnail"
                                            className="w-full h-auto rounded-lg transition-transform ease-in-out mt-4"
                                        />
                                    )}
                                    <h2 className="text-sm md:text-2xl font-bold mt-6 mb-2 md:mb-6">{post.title}</h2>
                                    <p className="text-black text-sm md:text-lg font-bold mb-4">
                                        <span>05 Sep 2024,</span><span className='text-gray ml-2'>by Joshua Nash</span>
                                    </p>
                                </div>
                            </Link>
                        </div>
                    );
                })}
            </div>
            <div className="pagination flex justify-between items-center mt-6">
                <button onClick={handlePreviousPage} disabled={currentPage === 1} className="btn">
                    Previous page
                </button>
                <span>Page {currentPage} of {totalPages}</span>
                <button onClick={handleNextPage} disabled={currentPage === totalPages} className="btn">
                    Next page
                </button>

            </div>
        </div>
    );
};

export default PostList;
