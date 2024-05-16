'use client';
import { createContext, useState, useEffect, useContext } from 'react';
import { getPosts } from '@/app/lib/actions/posts';
import { getUsers } from '@/app/lib/actions/users';
import { getPhotos } from '@/app/lib/actions/photos';
import { getComments } from '@/app/lib/actions/comments';
import FirstBlogCategoryComponent from '@/components/FirstBlogCategory';
import SecondBlogCategoryComponent from '@/components/SecondBlogCategory';

const AppContext = createContext({});

export function AppWrapper({ children }: { children: React.ReactNode; }) {
    const [firstBlogPosts, setFirstBlogPost] = useState([
        {
            category: 'NEWS',
            imageSrc: 'images/joshua-post.png',
            title: 'Learn from My Mistakes: 7 Digital Course Pitfalls to Skip',
            date: '29 Jun 2024',
            author: 'Joshua Nash'
        },
        {
            category: 'SALES',
            imageSrc: 'images/bill-post.png',
            title: 'How To Do Representation in Marketing the Right Way',
            date: '20 Mar 2022',
            author: 'Bill Holloway'
        },
        {
            category: 'SALES',
            imageSrc: 'images/stephen-post.png',
            title: 'The Psychology of Short-Form Content: Why We Love...',
            date: '07 Jun 2024',
            author: 'Stephen Henderson'
        },
        {
            category: 'SALES',
            imageSrc: 'images/nash-post.png',
            title: 'The Challenger Sale model: How to lead the conversation',
            date: '09 Jan 2024',
            author: 'by Joshua Nash'
        },
        {
            category: 'PRODUCT',
            imageSrc: 'images/leroy-post.png',
            title: '3 ways To automate your lead generation process',
            date: '08 Jul 2024',
            author: ' by Leroy Figueroa'
        },
        {
            category: 'PRODUCT',
            imageSrc: 'images/jn-post.png',
            title: 'Marketplace Monthly Apps Spotlight: Aug 2023',
            date: '05 Aug 2024',
            author: 'by Joshua Nash'
        },
    ]);

    const [secondBlogPosts, setSecondBlogPost] = useState([
        {
            category: 'SERVICE',
            imageSrc: 'images/edith-post.png',
            title: 'Sales Funnels: Definition, Process, Stages and Examples',
            date: '01 Dec 2022',
            author: 'by Edith Rose'
        },
        {
            category: 'SALES',
            imageSrc: 'images/amanda-post.png',
            title: 'What is a sales and how do you build one?',
            date: '29 Mar 2022',
            author: 'by Amanda Brooks'
        },
        {
            category: 'SERVICE',
            imageSrc: 'images/roxie-post.png',
            title: '10 real estate cold calling scripts to increase lead',
            date: '27 Dec 2022',
            author: 'by Roxie Sandoval'
        }
    ]);
   

    let [posts, setPosts] = useState([]);
    let [users, setUsers] = useState([]);
    let [photos, setPhotos] = useState([]);
    let [comments, setComments] = useState([]);

    useEffect(() => {
        getPosts().then((data: any) => {
            if (data.error) {
                return console.error(data.error);
            }
            setPosts(data);
        });
    }, []);

    useEffect(() => {
        getUsers().then((data: any) => {
            if (data.error) {
                return console.error(data.error);
            }
            setUsers(data);
        });
    }, []);

    useEffect(() => {
        getPhotos().then((data: any) => {
            if (data.error) {
                return console.error(data.error);
            }
            setPhotos(data);
        });
    }, []);

    useEffect(() => {
        getComments().then((data: any) => {
            if (data.error) {
                return console.error(data.error);
            }
            setComments(data);
        });
    }, []);

    return (
        <AppContext.Provider value={{ posts,photos,firstBlogPosts, secondBlogPosts }}>
            <div>
                
                {children}
            </div>
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}
