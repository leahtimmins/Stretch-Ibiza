import Image from "next/image";
import Container from "@/components/elements/Container";
import Hero from "@/components/blocks/Hero";
import React from 'react';

import {
  getStoryblokApi,
} from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";

export default async function Home() {
  const { storyblokData } = await fetchData();
  return <StoryblokStory story={ storyblokData.data.story} />;
}

export async function fetchData() {
  // Fetch Storyblok data
  let sbParams = { 
    version: "published",
    resolve_links: "url",
    cv: +new Date(),
  };

  const storyblokApi = getStoryblokApi();
  const storyblokData = await storyblokApi.get(`cdn/stories/home`, sbParams);

  // Fetch Supabase data
  

  // Return both Storyblok with revalidation
  return {
    storyblokData,
    revalidate: 60, // Revalidate every 60 seconds
  };
}