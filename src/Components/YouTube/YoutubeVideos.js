import React, { useEffect, useState } from "react";
import "../YouTube/YoutubeVideos.css";

function YoutubeVideos() {
  const [youtubeVideos, setYoutubeVideos] = useState([]);

  useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=10&order=date&key=AIzaSyBGmuqkylWdbZAe22JqPQaGiF9fZzVttn4"
    )
      .then((response) => {
        // console.log(res);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        return setYoutubeVideos(data.items);
      });
  }, []);

  return (
    <div className="allVideosWrapper">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-12">
            <div className="title-Wrapper">
              <br />
              <h1> Latest Videos</h1>
              <br />
            </div>
          </div>

          {youtubeVideos.map((singleVideo, i) => {
            let vidId = singleVideo.id.videoId;
            let vidLink = `https://youtube.googleapis.com/youtube/v3/Watch?v=${vidId}`;
            let videoWrapper = (
              <div key={i} className="col-sm-12 col-md-6 col-lg-4">
                <div className="singleVideoWrapper">
                  <div className="videoThumbnail">
                    <a href={vidLink} target="_blank" rel="noreferrer">
                      <img
                        src={singleVideo.snippet.thumbnails.high.url}
                        alt="thumbnails"
                      />{" "}
                    </a>
                  </div>
                  <div className="videoInfoWrapper">
                    <div className="VideoTitle">
                      <a href={vidLink} target="_blank" rel="noreferrer">
                        {singleVideo.snippet.title}
                      </a>
                    </div>
                    <div className="videoDesc">
                      {singleVideo.snippet.description}
                    </div>
                  </div>
                </div>
              </div>
            );
            return videoWrapper;
          })}
        </div>
      </div>
    </div>
  );
}

export default YoutubeVideos;
