'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
                            articles.map((article) => {
                                if(!article.full_slug && !article?.content?.articleThumbnail?.filename && !article?.name && !article?.content?.articleSummary) {
                                    return null
                                }

                                return (
                                <li key={article.uuid} className="mb-4">
                                    <Link 
                                        href={`/${article.full_slug}`} 
                                        className="my-4"
                                    >
                                        <div className="flex max-w-4xl mx-auto">
                                            <Image src={article?.content?.articleThumbnail?.filename} width={640} height={640} className="h-40 w-40 mr-6" />
                                            <div className="text-left">
                                                <div className="text-2xl text-black text-glacialBold underline mb-2">{article?.name}</div>
                                                <div>
                                                    <p className="text-glacial">{article?.content?.articleSummary}</p>
                                                </div>
                                            </div>
                                        </div>
                                       
                                        
                                        
                                    </Link>
                                </li>
                                )
                                
                            })
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
