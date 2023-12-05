'use client'
import React from 'react'
import {FacebookShareButton,FacebookIcon, InstagramIcon, InstapaperShareButton} from 'next-share'

export default function SocialMedia() {
  return (
    <>
       <FacebookShareButton 
        url={'https://www.facebook.com'} > 
        <FacebookIcon size={32} round className='me-4'/> 
      </FacebookShareButton> 
       <InstapaperShareButton 
        url={'https://www.facebook.com'} > 
        <InstagramIcon size={32} round /> 
      </InstapaperShareButton> 
    </>
  )
}
