import React from 'react';

import {
  getStoryblokApi,
} from "@storyblok/react/rsc";

import StoryblokStory from "@storyblok/react/story";

export default async function Session({ params }) {
    const { slug } = params;
    const { props } = await fetchData(slug);
    return <StoryblokStory story={props.document.data.story} />;
}

export async function fetchData(slug) {
  let sbParams = { 
    version: "published",
    resolve_links: "url",
    cv: +new Date(),
    // resolve_relations: 'grid_articles.articles', 
  };

  const storyblokApi = getStoryblokApi();

  let document = await storyblokApi.get(`cdn/stories/sessions/${slug}`, sbParams);
  console.log('doc', document.data.story.content);
  return {
    props: {
      document
    }
  }
}