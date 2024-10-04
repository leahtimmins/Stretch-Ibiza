import StoryblokClient from 'storyblok-js-client';

const Storyblok = new StoryblokClient({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN, // Replace with your Storyblok access token
});

export async function fetchSettings() {
  const { data } = await Storyblok.get('cdn/stories/global/settings');
  return data.story.content;
}