import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";

const Page = ({ blok }) => {
    return (
        <main {...storyblokEditable(blok)} className="pt-20">
            {blok.body.map((nestedBlok) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
            ))}
        </main>
    )
};

export default Page;