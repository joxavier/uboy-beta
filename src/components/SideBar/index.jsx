import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarRoute, SideBtnWrap } from './SidebarElements'

const Sidebar = ({isOpen,toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='about' onClick={toggle}>About</SidebarLink>
          <SidebarLink to='collaborators' onClick={toggle}>Collaborators</SidebarLink>
          <SidebarLink to='minters' onClick={toggle}>Minters</SidebarLink>
          <SidebarLink to='metaverse' onClick={toggle}>Join Us</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to='/mint'>Mint</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
