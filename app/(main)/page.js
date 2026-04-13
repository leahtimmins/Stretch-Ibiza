import React from 'react';

import {
  getStoryblokApi,
} from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const id = params.id
 
  // fetch data
  const { storyblokData } = await fetchData();

  const {
    image,
    title,
    description,
   
  } = storyblokData.data.story.content;
 
  return {
    title: title,
    image: image.filename || "",
    description: description,
    openGraph: {
      images: [image.filename],
    },
  }
}

export default async function Home() {
  const { storyblokData } = await fetchData();

  const {
    image,
    title,
    telephone,
    postalCode,
    priceRange,
    description,
    businessName,
    businessType,
    foundingDate,
    addressRegion,
    businessEmail,
    streetAddress,
    addressCountry,
    addressLocality,
    currenciesAccepted,
    businessDescription,
  } = storyblokData.data.story.content;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': businessType,
    "name": businessName,
    "image": image.filename,
    "description": businessDescription,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": streetAddress,
      "addressLocality": addressLocality,
      "addressRegion": addressRegion,
      "postalCode": postalCode,
      "addressCountry": addressCountry
    },
    "url": "https://www.stretchibiza.com",
    "telephone": telephone,
    "priceRange": priceRange,
    "currenciesAccepted": currenciesAccepted,
    "email": businessEmail,
    "foundingDate": foundingDate
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <StoryblokStory story={ storyblokData.data.story} />
    </>
  )
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