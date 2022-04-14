import React from 'react'
import {metaverseObjDiscord, metaverseObjReddit, metaverseObjInstagram} from './Data';
import Platform from './Platform'
import {MetaverseContainer, MetaverseH1, MetaverseWrapper} from './MetaverseElements'
const Metaverse = () => {

  return (
    <MetaverseContainer id='metaverse'>
      <MetaverseH1>Our Metaverse</MetaverseH1>
      <MetaverseWrapper>
        <Platform {...metaverseObjDiscord}/>
        <Platform {...metaverseObjReddit}/>
        <Platform {...metaverseObjInstagram}/>
      </MetaverseWrapper>
    </MetaverseContainer>
  )
}

export default Metaverse
