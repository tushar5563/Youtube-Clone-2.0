import { Stack, Box } from "@mui/material";
import { VideoCard } from './';
import { ChannelCard } from './';

const Videos = ({ videos ,direction}) => {
  // console.log(videos);

  // Safeguard to ensure `videos` is an array before mapping
  if (!videos || !Array.isArray(videos)) {
    return <p>Loading or No videos available</p>;
  }

  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
