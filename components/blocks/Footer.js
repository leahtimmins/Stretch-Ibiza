import Container from "@/components/elements/Container";
import FooterColumn from "@/components/global/FooterColumn";
import Copyright from "@/components/elements/Copyright";
import { getStoryblokApi } from "@storyblok/react/rsc";
import LinkRef from "@/components/elements/LinkRef";
import Newsletter from "./Newsletter";
import Social from "./Social";
import Image from 'next/image';
import dimensions from "@/utils/dimensions";

export default async function Footer() {
    const { document } = await fetchData();
    if (!document) return null;

    const {
        social,
        legalLinks,
        columns,
        image,
        showBottomFooter,
        showNewsletterCapture,
        background
    } = document;

    let imageSize;

    if(image.filename) {
        imageSize = dimensions(image.filename);
    }

    return (
        <footer className={`border-t ${background}`}>
            <div className="py-6 sm:py-16">
                <Container>
                    <div className="sm:grid sm:grid-cols-4 sm:gap-2 sm:gap-12">
                        <Image src={image.filename} alt={image.alt} width={imageSize.width} height={imageSize.height} className="h-16 w-auto mb-6" />
                        {columns.map((column) => (
                            <FooterColumn key={column._uid} columnData={column} />
                        ))}
                        <div className="col-span-1 mt-8 sm:mt-0">
                            <div className="grid gap-4 grid-cols-1 lg:grid-cols-1">
                                {showNewsletterCapture && (<Newsletter className="lg:order-first"/>)}
                                <Social socialData={social}/>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            {showBottomFooter && (
                <div className="border-t h-16 flex items-center">
                    <Container>
                        <div className="flex justify-between">
                            <Copyright />
                            <ul id="legal-links" className="inline-block flex">
                                {legalLinks.map((item) => (
                                    <li key={item._uid} className="ml-4">
                                        <LinkRef link={item.link} className="underline text-sm glacialRegular">{item.label}</LinkRef>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Container>
                </div>
            )}
        </footer>
    );
}

export async function fetchData() {
    try {
        let sbParams = { 
            version: "published",
            resolve_links: "url",
            cv: +new Date(),
            resolve_relations: 'footer.legalLinks,footer.social', 
        };
    
        const storyblokApi = getStoryblokApi();
        let entry = await storyblokApi.get(`cdn/stories/global/footer`, sbParams);
    
        const document = entry.data.story.content;
    
        return { document, revalidate: 60 };
    } catch (error) {
        console.error("Failed to fetch footer content:", error);
        return { document: null };
    }
}
