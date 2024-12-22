import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    // Fetch channel details
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]));

    // Fetch channel videos
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data?.items));
  }, [id]);

  return (
    <Box minHeight="95vh">
   <Box>
    <div style={{ background:' rgb(2,0,36)',background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);'}}
    
    />
    <ChannelCard channelDetail={channelDetail} marginTop='-30px'/>
   </Box>
   <Box display='flex' p='2'>
     <Box sx={{mr:{sm:'100px'}}}/>
      <Videos videos={videos}/> 
   </Box>
    </Box>
  );
};

export default ChannelDetail;
 