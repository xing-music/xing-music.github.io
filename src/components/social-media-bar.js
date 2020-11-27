import React from "react";
import fbIcon from '../components/icons/Facebook_2';
import igIcon from '../components/icons/Instagram_2';
import ytIcon from '../components/icons/Youtube_2';
import spIcon from '../components/icons/Spotify';

const icons = [
  {symbol: fbIcon, url: 'https://www.facebook.com/XINGLYCHEE/', key: 'facebook'},
  {symbol: igIcon, url: 'https://www.instagram.com/xing_music_/', key: 'instagram'},
  {symbol: ytIcon, url: 'https://www.youtube.com/channel/UCF1a0GVK1IwaxvJmA3unI_Q/', key: 'youtube'},
  {symbol: spIcon, url: 'https://open.spotify.com/artist/56YRiQwXTCOKkls3onowKd?si=T8TPZnx4TMCsE4Zgl-N-_g', key: 'spotify'},
];

export default function SocialMediaBar() {
  return <div className='social-media-link-section'>
    {icons.map(x =>
      <div key={x.key}>
          <svg width={33} height={33} className='social-media-icon' role='img' xmlns="http://www.w3.org/2000/svg">
            <a href={x.url} className='social-media-link' target="_blank" rel="noreferrer">
            {x.symbol}
            </a>
          </svg>
      </div>
    )}
  </div>
}
