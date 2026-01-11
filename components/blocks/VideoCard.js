import YouTubePlayer from "../global/youtubeEmbed";

const VideoCard = ({ video }) => {
    const {
        _uid,
        videoTitle,
        videoURL,
        anchorIdentity
    } = video;

    return (
        <>
            <div id={anchorIdentity ? anchorIdentity : _uid} data-component="video-card" className="my-12">
                <YouTubePlayer videoUrl={videoURL} videoTitle={videoTitle} />
            </div>
        </>
    )
}

export default VideoCard;