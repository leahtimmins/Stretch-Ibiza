'use client';

import Container from "../elements/Container";
import UpcomingEvents from '@/components/elements/UpcomingEvents';
import UpcomingSessions from "@/components/elements/UpcomingSessions";

const EventDisplay = ({blok, position}) => {

    const {
        background,
        heading,
        description,
        eventHeading,
        eventImage,
        showEvents,
        sessionHeading,
        sessionImage,
        showSessions,
        _uid
    } = blok;

    return (
        <section id={_uid} data-name="event-display" className={`overflow-auto ${background} py-16`}>
            <Container>
                {heading && <h2 className="text-2xl sm:text-4xl font-glacialBold font-semibold leading-7 mb-2 text-center">{heading}</h2>}
                {description && <p className="text-lg text-center max-w-3xl mx-auto">{description}</p>}
                {showEvents && (
                    <div className="my-6">
                        {eventHeading && <h3 className="capitalize font-semibold">{eventHeading}</h3>}
                        <UpcomingEvents />
                    </div>
                )}
                {showSessions && (
                    <div className="my-6">
                        {sessionHeading && <h3 className="text-2xl capitalize font-semibold mb-6">{sessionHeading}</h3>}
                        <UpcomingSessions />
                    </div>
                )}
            </Container>

        </section>
    )
}

export default EventDisplay;