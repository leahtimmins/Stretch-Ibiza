import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";

const Page = ({ blok }) => {
    return (
        <main {...storyblokEditable(blok)} className="bg-base pt-20">
            {blok.body.map((nestedBlok, index) => (
            <StoryblokComponent blok={nestedBlok} position={index} key={nestedBlok._uid} />
            ))}
        </main>
    )
};

export default Page;