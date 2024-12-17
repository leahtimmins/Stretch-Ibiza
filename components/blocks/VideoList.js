import Container from "../elements/Container";
import VideoCard from "@/components/blocks/VideoCard";

const VideoList = ({blok}) => {
    const {
        _uid,
        videos
    } = blok;

    return (
        <>
            <section id={`video-list_${_uid}`}>
                <div className="py-16">

                    <Container>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-12">
                            {videos.map((video, index) => {
                                return <VideoCard key={video._uid} video={video} />
                            })}
                        </div>
                    </Container>

                </div>
            </section>
        </>
    )
}

export default VideoList;