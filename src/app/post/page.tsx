'use client';
import React from 'react';
import { useAppContext } from '@/context';
import PostList from '@/components/PostList';

export default function UsersPage() {
    const { posts, photos, currentPage, totalPages, handleNextPage, handlePreviousPage } = useAppContext();

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
