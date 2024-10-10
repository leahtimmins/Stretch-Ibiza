import React from 'react';

import {
  getStoryblokApi,
} from "@storyblok/react/rsc";

import StoryblokStory from "@storyblok/react/story";

export default async function Article({ params }) {
    const { slug } = params;
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

  let document = await storyblokApi.get(`cdn/stories/articles/${slug}`, sbParams);

  return {
    document,
    revalidate: 60,
  }
}