import { useState, useRef } from 'react'
import ReactPlayer from 'react-player/lazy'

import { VideoPlayer } from './Video.styled'
import { useSockets } from '../../state/SocketContext'

export default function Video() {
  const { playlist } = useSockets()
  const ref = useRef<ReactPlayer>(null)
  const player = ref.current ? ref.current.getInternalPlayer() : undefined
  const urls = playlist?.map((item) => item.url)

  const youtubeConfig = {
    youtube: {
      playerVars: {
        disablekb: 1,
        fs: 0,
        modestbranding: 1,
        iv_load_policy: 3,
        loop: 0,
        controls: 0
      }
    }
  }

  if (player) player.allowFullscreen = 0
  const [isPlaying, setIsPlaying] = useState(false)
  return (
    <>
      <div style={{ position: 'relative' }}>
        <VideoPlayer
          url={urls}
          ref={ref}
          playing={isPlaying}
          config={youtubeConfig}
        />
        {/* {!isPlaying && (
          <PauseOverlay>The host has paused this video</PauseOverlay>
        )} */}
      </div>
      <button onClick={() => setIsPlaying((prev) => !prev)}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </>
  )
}
