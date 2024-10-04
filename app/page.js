import Image from "next/image";
import Container from "@/components/elements/Container";
import Hero from "@/components/blocks/Hero";
import React from 'react';

import {
  getStoryblokApi,
} from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";

export default async function Home() {
  const { props } = await fetchData();
  return <StoryblokStory story={props.document.data.story} />;
}

export async function fetchData() {
  let sbParams = { 
    version: "published",
    resolve_links: "url",
    cv: +new Date(),
    // resolve_relations: 'grid_articles.articles', 
  };

  const storyblokApi = getStoryblokApi();

  let document = await storyblokApi.get(`cdn/stories/home`, sbParams);

  return {
    props: {
      document
    },
    revalidate: 60,
  }
}