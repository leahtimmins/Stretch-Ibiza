import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";

const Home = ({ blok }) => {
    return (
        <main {...storyblokEditable(blok)}>
            {blok.body.map((nestedBlok) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
            ))}
        </main>
    )
};

export default Home;