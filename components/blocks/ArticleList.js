'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Container from '../elements/Container';

const ArticleList = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        // Fetch articles from Storyblok API
        const fetchArticles = async () => {
            try {
                const res = await fetch(`https://api.storyblok.com/v2/cdn/stories?starts_with=articles&token=${process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN}`);
                const data = await res.json();
                setArticles(data.stories);
            } catch (error) {
                console.error('Error fetching articles:', error);
            }
        };

        fetchArticles();
    }, []);

    return (
        <section className="w-full py-16">
            <Container>
                <div className="text-center">
                    <ul className="mt-4 space-y-4">
                        {articles.length > 0 ? (
                            articles.map((article) => (
                                <li key={article.uuid}>
                                    <Link 
                                        href={`/${article.full_slug}`} 
                                        className="text-2xl text-black text-glacialBold underline my-4"
                                    >
                                        {article.name}
                                    </Link>
                                </li>
                            ))
                        ) : (
                            <p className="text-2xl text-black text-glacialBold font-semibold">No articles found.</p>
                        )}
                    </ul>
                </div>
            </Container>
        </section>
    );
};

export default ArticleList;
