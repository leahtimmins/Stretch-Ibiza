import React from 'react';

import {
  getStoryblokApi,
} from "@storyblok/react/rsc";

import StoryblokStory from "@storyblok/react/story";

export async function generateMetadata({ params, searchParams }, parent) {
 
  // fetch data
  const { document } = await fetchData(params.slug);

  const {
    image,
    title,
    description,
   
  } = document.data.story.content;
 
  return {
    title: title,
    image: image?.filename || "",
    description: description,
    openGraph: {
      images: [image?.filename] || [],
    },
  }
}

export default async function Pages({ params }) {
    const { slug } = await params;
    const { document } = await fetchData(slug);
    return <StoryblokStory story={document.data.story} />;
}

export async function fetchData(slug) {
  let sbParams = { 
    version: "published",
    resolve_links: "url",
    cv: +new Date(),
    // resolve_relations: 'grid_articles.articles', 
  };

  const storyblokApi = getStoryblokApi();

  let document = await storyblokApi.get(`cdn/stories/pages/${slug}`, sbParams);

  return {
    document,
    revalidate: 60,
  }
}