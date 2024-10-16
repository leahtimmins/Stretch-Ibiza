import StoryblokClient from 'storyblok-js-client';
import {
  getStoryblokApi, apiPlugin
} from "@storyblok/react/rsc";

const Storyblok = new StoryblokClient({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
});

export async function fetchSettings() {
  const { data } = await Storyblok.get('cdn/stories/global/settings');
  return data.story.content;
}

export const fetchSiteMapEntries = async () => {

  const home = await Storyblok.get('cdn/stories/home', {
    version: 'published', // Use 'published' for production
  });
  const pages = await Storyblok.get('cdn/stories', {
    starts_with: 'pages/',
    version: 'published',
  });
  const articles = await Storyblok.get('cdn/stories', {
    starts_with: 'articles/',
    version: 'published',
  });
  return {
    homepage: home.data.story,
    pages: pages.data.stories,
    articles: articles.data.stories,
  };
};