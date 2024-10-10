import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";

const Article = ({ blok }) => {
    return (
        <main {...storyblokEditable(blok)} className="bg-base pt-20">
            {blok.body.map((nestedBlok) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
            ))}
        </main>
    )
};

export default Article;