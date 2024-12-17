import ReactPlayer from 'react-player';

const VideoComponent = ({videoId}) => (
    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%' }}>
<ReactPlayer 
    url={`https://www.youtube.com/watch?v=${videoId}`}
    width="100%"
      height="100%"
      style={{ position: 'absolute', top: 0, left: 0 }}
  />
    </div>
);

export default VideoComponent;

