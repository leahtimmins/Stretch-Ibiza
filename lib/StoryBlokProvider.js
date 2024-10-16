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
import BannerText from "@/components/blocks/BannerText";
import IllustrationContent from "@/components/blocks/IllustrationContent";
import SectionHeading from "@/components/blocks/SectionHeading";
import PlainText from "@/components/blocks/PlainText";
import TextImageGrid from "@/components/blocks/TextImageGrid";
import IllustrationBanner from "@/components/blocks/IllustrationBanner";
import Article from "@/components/blocks/Article";
import RichText from "@/components/blocks/RichText";
import ContactForm from "@/components/blocks/ContactForm";
import TagEmbed from "@/components/blocks/TagEmbed";
import Review from "@/components/blocks/Review";
import ArticleList from "@/components/blocks/ArticleList";
import TabHeadings from "@/components/blocks/TabHeadings";

/** 3. Initialize it as usual */
storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components: {
    article: Article,
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
    bannerText: BannerText,
    illustrationContent: IllustrationContent,
    sectionHeading: SectionHeading,
    plainText: PlainText,
    textImageGrid: TextImageGrid,
    illustrationBanner: IllustrationBanner,
    richText: RichText,
    contactForm: ContactForm,
    tagEmbed: TagEmbed,
    review: Review,
    articleList: ArticleList,
    tabHeadings: TabHeadings,
  },
});

export default function StoryblokProvider({ children }) {
  return children;
}

export async function fetchSettings() {
    const { data } = await Storyblok.get('cdn/stories/settings');
    return data.story.content;
  }