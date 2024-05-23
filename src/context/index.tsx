'use client';

import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { getUsers } from '@/app/lib/actions/getUsers';
import { getUserPosts } from '@/app/lib/actions/getUserPosts';
import { getUserPhotos } from '@/app/lib/actions/getUserPhotos';

interface Post {
    id: number;
    title: string;
    imageSrc: string;
}

interface Photo {
    id: number;
    thumbnailUrl: string;
}

interface AppContextType {
    posts: Post[];
    photos: Photo[];
    currentPage: number;
    totalPages: number;
    handleNextPage: () => void;
    handlePreviousPage: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppWrapper({ children }: { children: ReactNode }) {
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [posts, setPosts] = useState<Post[]>([]);
    const [photos, setPhotos] = useState<Photo[]>([]);
    const [totalPages, setTotalPages] = useState(10);

    const pageSize = 10;

    useEffect(() => {
        const fetchData = async () => {
            const usersData = await getUsers();
            setUsers(usersData);

            const postsResults = await Promise.all(usersData.map(async user => {
                const { posts, totalPosts } = await getUserPosts(user.id);
                return { posts, totalPosts };
            }));

            const allPosts = postsResults.flatMap(result => result.posts);
            const totalPosts = postsResults.reduce((acc, curr) => acc + curr.totalPosts, 0);
            setTotalPages(Math.ceil(totalPosts / pageSize));

            const startIndex = (currentPage - 1) * pageSize;
            const endIndex = startIndex + pageSize;
            const postsForPage = allPosts.slice(startIndex, endIndex);
            setPosts(postsForPage);

            const photoPromises = postsForPage.map(post => getUserPhotos(post.id));
            const photosData = await Promise.all(photoPromises);
            const allPhotos = photosData.flat();
            setPhotos(allPhotos);
        };

        fetchData();
    }, [currentPage]);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prevPage => prevPage - 1);
        }
    };

    return (
        <AppContext.Provider value={{ posts, photos, currentPage, totalPages, handleNextPage, handlePreviousPage }}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppWrapper');
    }
    return context;
}
