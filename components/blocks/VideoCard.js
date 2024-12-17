import YouTubePlayer from "../global/youtubeEmbed";

const VideoCard = ({ video }) => {
    const {
        _uid,
        videoTitle,
        videoURL
    } = video;
    return (
        <>
            <div id={_uid} data-component="video-card" className="my-12">
                <YouTubePlayer videoId={videoURL} />
                {videoTitle && <p className="text-md">{videoTitle}</p>}
            </div>
        </>
    )
}

export default VideoCard;