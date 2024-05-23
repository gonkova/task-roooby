'use client';
import React, { useEffect } from 'react';
import { useAppContext } from '@/context';
import PostList from '@/components/PostList';

export default function UsersPage() {
    const { posts, photos, currentPage, totalPages, handleNextPage, handlePreviousPage } = useAppContext();

    useEffect(() => {
     
        handleNextPage();
    }, []);

    return (
        <PostList
            posts={posts}
            photos={photos}
            currentPage={currentPage}
            totalPages={totalPages}
            handleNextPage={handleNextPage}
            handlePreviousPage={handlePreviousPage}
        />
    );
}
