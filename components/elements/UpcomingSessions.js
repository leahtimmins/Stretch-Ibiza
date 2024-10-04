'use client';
import {
    getStoryblokApi,
  } from "@storyblok/react/rsc";
  import { useEffect, useState } from 'react';
  import { render, NODE_PARAGRAPH } from 'storyblok-rich-text-react-renderer';
import Image from 'next/image';
import dimensions from "@/utils/dimensions";
import Link from 'next/link';

const UpcomingSessions = () => {
    const [sessionsData, setSessionsData] = useState(null);
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSessionsData = async () => {
      try {
        const storyblokApi = getStoryblokApi();

        // Fetch the Sessions story from Storyblok
        const response = await storyblokApi.get('cdn/stories', {
            starts_with: 'sessions/', // Fetches stories starting with 'sessions/'
            version: 'published',
            excluding_fields: "longDescription,background",
            cv: +new Date(),
          });

        let filteredSessions = [];

        const isFutureEvent = (startDate) => {
            const eventDate = new Date(startDate);  // Convert the startDate string to a Date object
            const today = new Date();               // Get today's date
            return eventDate > today;               // Check if the eventDate is in the future
        };

        response.data.stories.map((session, index) => {
            
            let size = dimensions(session.content.images[0].filename);
            // define the returned object of the session here.
            filteredSessions.push({
                url: "/" + session.full_slug,
                heading: session.content.heading,
                shortDescription: session.content.shortDescription,
                dates: session.content.dates,
                image: {
                    filename: session.content.images[0].filename,
                    width: size.width,
                    height: size.height
                }
            });
        })

        

        
        // Store the fetched data in the state
        setSessionsData(filteredSessions);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    // Trigger the data fetch
    fetchSessionsData();
  }, []);



  // Loading state
  if (loading) {
    return <div>Loading...</div>;
  }

    return (
        <>
            <div className="flex flex-wrap justify-start -mx-3">
                {sessionsData.map((session, index) => {

                    return (
                        <div key={index} className="relative w-full sm:w-1/2 lg:w-1/3">
                            <div className="m-3 relative">
                                <Link href={session.url} title={session.heading} className="underline font-glacialRegular">
                                    <Image src={session.image.filename} width={session.image.width} height={session.image.height} className="min-h-80 w-auto" />
                                    <div className="absolute z-10 bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent text-white pb-2 pt-4 px-4">
                                        <h4 className="font-glacialBold font-semibold mb-2 text-lg">{session.heading}</h4>
                                    </div>
                                </Link>
                            </div>
                            {/* <h4 className="font-glacialBold font-semibold mb-2 text-lg">{session.heading}</h4>
                            {render(session.shortDescription, {
                                nodeResolvers: {
                                    [NODE_PARAGRAPH]: (children, props) => <p className="text-md font-glacialRegular mb-4">{children}</p>
                                }
                            })}
                            <Link href={session.url} title={session.heading} className="underline font-glacialRegular">View Session</Link> */}
                            {/* If we want to display dates and times in the future */}
                            {/* {session.dates.map((date, dateIndex) => {
                                return (
                                    <div key={dateIndex} className="py-2">
                                        {date.startDate && <div className="">{date.startDate}</div>}
                                        {date.cost && <div className="">&#8364;{date.cost}</div>}
                                        {date.location && <div className="">{date.location}</div>}
                                    </div>
                                )
                            })} */}
                        </div>
                    )
                   
                    return (
                        <div key={index} className="bg-white p-6 border">
                            <Image src={session.image.filename} width={session.image.width} height={session.image.height} className="mb-4" />
                            <h4 className="font-glacialBold font-semibold mb-2 text-lg">{session.heading}</h4>
                            {render(session.shortDescription, {
                                nodeResolvers: {
                                    [NODE_PARAGRAPH]: (children, props) => <p className="text-md font-glacialRegular mb-4">{children}</p>
                                }
                            })}
                            <Link href={session.url} title={session.heading} className="underline font-glacialRegular">View Session</Link>
                            {/* If we want to display dates and times in the future */}
                            {/* {session.dates.map((date, dateIndex) => {
                                return (
                                    <div key={dateIndex} className="py-2">
                                        {date.startDate && <div className="">{date.startDate}</div>}
                                        {date.cost && <div className="">&#8364;{date.cost}</div>}
                                        {date.location && <div className="">{date.location}</div>}
                                    </div>
                                )
                            })} */}
                        </div>
                    )
                })}
            </div>
            
        </>
    )
}
export default UpcomingSessions;