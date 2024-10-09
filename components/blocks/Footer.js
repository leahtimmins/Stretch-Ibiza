import Container from "@/components/elements/Container";
import Link from 'next/link';
import FooterColumn from "@/components/global/FooterColumn";
import Copyright from "@/components/elements/Copyright";
import {
    getStoryblokApi,
  } from "@storyblok/react/rsc";
import LinkRef from "@/components/elements/LinkRef";
import Newsletter from "./Newsletter";
import Social from "./Social";

export default async function Footer() {
    const { props } = await fetchData();

    const {
        uid,
        component,
        social,
        legal,
        columns,
        background
    } = props.document;

    return (
        <footer className={`border-t ${background}`}>
            <div className="py-6 sm:py-16">
                <Container>
                    <div className="sm:grid sm:grid-cols-4 sm:gap-2 sm:gap-12">
                        {columns.map((column, index) => {
                            return <FooterColumn key={index} columnData={column} />
                        })}
                        <div className="col-span-2 mt-8 sm:mt-0">
                            <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
                                <Newsletter className="lg:order-last"/>
                                <Social socialData={social}/>
                            </div>
                        </div>
                        
                    </div>
                </Container>
            </div>
            <div className="border-t h-16 flex items-center">
                <Container>
                    <div className="flex justify-between">
                        <Copyright />
                        <ul id="legal-links" className="inline-block flex">
                            {legal.map((item, index) => {
                                return (
                                    <li key={index} className="ml-4">
                                        <LinkRef link={item.link} className="underline text-sm glacialRegular">{item.label}</LinkRef>
                                    </li>
                                )
                            })}
                            
                        </ul>
                    </div>
                    
                </Container>
            </div>
        </footer>
    )
}

export async function fetchData() {
    let sbParams = { 
      version: "published",
      resolve_links: "url",
      cv: +new Date(),
      resolve_relations: 'footer.legalLinks,footer.social', 
    };
  
    const storyblokApi = getStoryblokApi();
  
    let entry = await storyblokApi.get(`cdn/stories/global/footer`, sbParams);

    const document = {
        uid: entry.data.story.content._uid,
        social: entry.data.story.content.social,
        component: entry.data.story.content.component,
        legal: entry.data.story.content.legalLinks,
        columns: entry.data.story.content.columns,
        background: entry.data.story.content.background
    };

    return {
      props: {
        document
      },
      revalidate: 60,
    }
  }