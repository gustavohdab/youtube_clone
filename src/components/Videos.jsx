import { Stack, Box } from "@mui/material"

import { ChannelCard, Loader, VideoCard } from "./"

const Videos = ({ videos, direction, justifyContent }) => {
  if (!videos?.length) return <Loader />

  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent={justifyContent || "flex-start"}
      alignItems="start"
      gap={2}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos
