import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from 'react-router-dom'
import { Video } from './Video'
import './static/videos.scss'
import useVideoList from '../hooks/useVideoList'

const Videos = () => {

  const [page, setPage] = useState(1);
  const { loading, error, videos, hasMore } = useVideoList(page);
  console.log(videos)

  return (
    <div className='videos'>
      {videos.length > 0 && (
        <InfiniteScroll
        className="video-box"
        dataLength={videos.length}
        hasMore={hasMore}
        loader="Loading..."
        next={() => setPage(page + 8)}
      >
        {videos.map((video) =>
          video.noq > 0 ? (
            <Link
              to='/quiz'
              key={video.youtubeID}
            >
              <Video
                title={video.title}
                id={video.youtubeID}
                noq={video.noq}
              />
            </Link>
          ) : (
            <Video
              title={video.title}
              id={video.youtubeID}
              noq={video.noq}
              key={video.youtubeID}
            />
          )
        )}
      </InfiniteScroll>
      )}
      {!loading && videos.length === 0 && <div>No data found!</div>}
      {error && <div>There was an error!</div>}
      {loading && <div>Loading...</div>}
    </div>
  );
}

export default Videos
