import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import video1 from '../../assets/videos/video-1.mp4'
import { Button, Buttons, H1, H5, MainS, Video } from './MainStyled'
const Main = () => {
  return (
<MainS>
        <Video src={video1} autoPlay loop muted />
        <H1>ADVENTURE AWAITS</H1>
        <H5>What are you waiting for?</H5>
        <Buttons>

        <Button>GET STARTED</Button>
        <Button color='white'>Watch Trailer <FontAwesomeIcon icon={faPlay} /> </Button>
        </Buttons>
</MainS>
  )
}

export default Main