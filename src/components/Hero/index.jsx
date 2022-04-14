import React, {useState} from 'react'
import Video1 from '../../videos/video1.mp4'
import Video2 from '../../videos/video2.mp4'
import Video3 from '../../videos/video3.mp4'
import Video4 from '../../videos/video4.mp4'
import Video5 from '../../videos/video5.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'
import { Button } from '../ButtonElements' 

const Hero = () => {
  const videos = [
    Video1,
    Video2,
    Video3,
    Video4,
    Video5
  ];
  
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover)
  }
  
  const getVideo = ()  => {
    const randomNumber = Math.floor(Math.random() * videos.length);
    return videos[randomNumber];
  }

  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg autoPlay loop muted src={getVideo()} type='video/mp4' />
      </HeroBg>
    </HeroContainer>
  )
}

export default Hero
