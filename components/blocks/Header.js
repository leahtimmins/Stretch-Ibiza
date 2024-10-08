import Container from "@/components/elements/Container";
import Link from 'next/link';


import {
    getStoryblokApi,
  } from "@storyblok/react/rsc";
import HeaderNavigation from "./HeaderNavigation";

export default async function Header() {

    const { props } = await fetchData();

    const {
        navigation,
        uid,
        altNavigation,
        background
    } = props.document;

    return (
        <header id={uid} className="fixed w-full z-10">
            <HeaderNavigation navigation={navigation} altNavigation={altNavigation} />
        </header>
    )
}

export async function fetchData() {
    let sbParams = { 
      version: "published",
      resolve_links: "url",
      cv: +new Date(),
      //resolve_relations: 'footer.legalLinks', 
    };
    const storyblokApi = getStoryblokApi();

    let entry = await storyblokApi.get(`cdn/stories/global/header`, sbParams);
    
    const document = {
        uid: entry.data.story.content._uid,
        navigation: entry.data.story.content.navigation,
        altNavigation: entry.data.story.content.altNavigation
    };

    return {
      props: {
        document: document || null
      },
      revalidate: 60,
    }
  }

//   <div className="h-16 border-b flex items-center">
//                 <Container>
//                     <div className="flex justify-between">
//                         {/* <div>{settings?.websiteName}</div> */}
//                         <div>Stretch Ibiza</div>
//                         <div>
//                             {navigation && (
//                                 <ul className="flex">
//                                     {navigation.map((navItem, index) => {
                                        
//                                         const navItemStory = navItem?.link?.story ?? null;
//                                         if (navItemStory == null || navItem.label == '' ) {
//                                             return null;
//                                         }
//                                         return (
//                                             <li key={index}>
//                                                 <LinkRef link={navItem.link} className="px-2 mx-2">{navItem.label}</LinkRef>
//                                             </li>
//                                         )
                                        
//                                     })}
//                                 </ul>
//                             )}
//                         </div>
//                         {altNavigation && (
//                             <ul className="flex">
//                                 {altNavigation.map((buttonNav, index) => {
//                                     const buttonNavStory = buttonNav?.link?.story ?? null;
//                                     if (buttonNavStory == null || buttonNav.label == '' ) {
//                                         return null;
//                                     }
//                                     return (
//                                         <li key={index}>
//                                                 <LinkRef link={buttonNav.link} className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{buttonNav.label}</LinkRef>
//                                         </li>
//                                     )
//                                 })}
//                             </ul>
//                         )}
                        
//                     </div>
//                 </Container>
//             </div>