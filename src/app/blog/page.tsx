'use client';
import FirstBlogCategory from '@/components/FirstBlogCategory';
import BlogService from '@/components/BlogService';
import BlogMarketing from '@/components/BlogMarketing';
import BlogHero from '@/components/BlogHero';
import SecondBlogCategory from '@/components/SecondBlogCategory';
import Supercharge from '@/components/Supercharge';
import { useAppContext } from '@/context';
import PostList from '@/components/PostList';

export default function Blog() {
    const { posts, photos, currentPage, totalPages, handleNextPage, handlePreviousPage } = useAppContext();


    return (
        <>
            <BlogHero />
            <BlogService />
            <PostList
                posts={posts}
                photos={photos}
                currentPage={currentPage}
                totalPages={totalPages}
                handleNextPage={handleNextPage}
                handlePreviousPage={handlePreviousPage}
            />
            <FirstBlogCategory />
            <BlogMarketing />
            <SecondBlogCategory />
            <Supercharge />
        </>
    );
}