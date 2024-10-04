"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

/** 2. Import your components */
import Page from '@/components/blocks/Page'
import Hero from '@/components/blocks/Hero'
import LargeText from "@/components/blocks/LargeText";
import Wayfinder from "@/components/blocks/Wayfinder";
import EventDisplay from "@/components/blocks/EventDisplay";
import PageTitle from "@/components/blocks/PageTitle";
import Home from "@/components/blocks/Home";
import BodyText from "@/components/blocks/BodyText";
import FullWidthImage from "@/components/blocks/FullWidthImage";
import Session from "@/components/blocks/Session";
import BookCallToAction from "@/components/blocks/BookCallToAction";

/** 3. Initialize it as usual */
storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components: {
    home: Home,
    page: Page,
    hero: Hero,
    largeText: LargeText,
    wayfinder: Wayfinder,
    eventDisplay: EventDisplay,
    pageTitle: PageTitle,
    bodyText: BodyText,
    fullWidthImage: FullWidthImage,
    session: Session,
    bookCallToAction: BookCallToAction,
  },
});

export default function StoryblokProvider({ children }) {
  return children;
}

export async function fetchSettings() {
    const { data } = await Storyblok.get('cdn/stories/settings');
    return data.story.content;
  }