import { ChangeEvent, Dispatch, SetStateAction } from 'react'

import NextImage from '../NextImage'
import VolumeSlider from './VolumeSlider'
import volumeIcon from '../../public/volume.png'
import volumeOff from '../../public/volumeOff.png'
import { ControlButton } from './Video.styled'

type VolumeProp = {
  volume: number
  setVolume: Dispatch<SetStateAction<number>>
  handleVolumeChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export default function VolumeController({
  setVolume,
  volume,
  handleVolumeChange
}: VolumeProp) {
  return (
    <div style={{ display: 'flex', gap: '5px' }}>
      <ControlButton
        onClick={() => {
          setVolume((prev) => (prev > 0 ? 0 : 0.4))
        }}
      >
        {volume === 0 ? (
          <NextImage src={volumeOff} width={30} height={30} />
        ) : (
          <NextImage src={volumeIcon} width={30} height={30} />
        )}
      </ControlButton>
      <VolumeSlider onChange={handleVolumeChange} volume={volume} />
    </div>
  )
}
