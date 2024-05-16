'use client';

import FirstBlogCategory from '@/components/FirstBlogCategory';
import BlogPosts from '@/components/BlogPosts';
import BlogService from '@/components/BlogService';
import BlogMarketing from '@/components/BlogMarketing';
import BlogHero from '@/components/BlogHero';
import SecondBlogCategory from '@/components/SecondBlogCategory';
import Supercharge from '@/components/Supercharge';

export default function Blog() {
  
    return (
        <>
            <BlogHero />
            <BlogService />
            <BlogPosts />
            <FirstBlogCategory />
            <BlogMarketing />
            <SecondBlogCategory />
            <Supercharge />
        </>
    );
}