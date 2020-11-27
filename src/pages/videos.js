import React from "react";
import Video from '../components/video';
import H2 from '../components/h2';

const videoData = [
  {
    url: 'https://www.youtube.com/embed/fvwCiQWibd8',
    title: 'Salty by Xing'
  },
  {
    url: 'https://www.youtube.com/embed/pmkN6K6-0i4',
    title: 'Own The Gold by Xing'
  },
  {
    url: 'https://www.youtube.com/embed/mcFZ5Zl4pp4',
    title: 'Dizzy by Lucid Kid'
  },
  {
    url: 'https://www.youtube.com/embed/JRN_BVNB7-M',
    title: 'Restart by Lou Asril Live'
  },
  {
    url: 'https://www.youtube.com/embed/jI9lINf_cYo',
    title: 'Berlin Pretty City by Lou Asril Live'
  },
];

export default function Videos() {
  return <section className="body" id="video">
        <H2 title='Videos' />
        {videoData.map(x => <Video videoSrcURL={x.url} videoTitle={x.title} key={x.title} />)}
        {/* <iframe
          title='XING on Spotify'
          src="https://open.spotify.com/embed/artist/56YRiQwXTCOKkls3onowKd"
          width="300"
          height="80"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
          style={{height: '180px'}}
        ></iframe> */}
      </section>;
}