'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from '../elements/Container';

const ResourceList = ({blok}) => {
    const [resources, setResources] = useState([]);

    const {
        _uid,
        anchorIdentity
    } = blok;

    useEffect(() => {
        // Fetch articles from Storyblok API
        const fetchResources = async () => {
            try {
                const res = await fetch(`https://api.storyblok.com/v2/cdn/stories?starts_with=resources&token=${process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN}`);
                const data = await res.json();
                setResources(data.stories);
            } catch (error) {
                console.error('Error fetching resources:', error);
            }
        };

        fetchResources();
    }, []);

    return (
        <section id={anchorIdentity ? anchorIdentity : _uid} className="w-full py-16">
            <Container>
                <div className="text-center">
                    <ul className="mt-4 space-y-4">
                        {resources.length > 0 ? (
                            resources.map((resource) => {
                                if(!resource.full_slug && !resource?.content?.thumbnail?.filename && !resource?.name && !resource?.content?.description) {
                                    return null
                                }
                                if(resource.content.available != true) {
                                    return null;
                                }

                                return (
                                <li key={resource.uuid} className="mb-4">
                                    <div
                                        className="my-4"
                                    >
                                        <div className="flex max-w-4xl mx-auto">
                                            <Image src={resource?.content?.thumbnail?.filename} width={640} height={640} className="h-40 w-40 mr-6" />
                                            <div className="text-left">
                                                <div className="text-2xl text-black text-glacialBold mb-2">{resource?.content?.title}</div>
                                                <div>
                                                    <p className="text-glacial">{resource?.content?.description}</p>
                                                </div>
                                                {resource.content.link && resource.content.linkLabel && <a href={resource.content.link} title={resource?.content?.title} className="underline my-4 block">{resource.content.linkLabel}</a>}
                                            </div>
                                        </div>
                                       
                                        
                                        
                                    </div>
                                </li>
                                )
                                
                            })
                        ) : (
                            <p className="text-2xl text-black text-glacialBold font-semibold">No resources found.</p>
                        )}
                    </ul>
                </div>
            </Container>
        </section>
    );
};

export default ResourceList;
