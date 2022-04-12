import React from 'react';
import YouTube from 'react-youtube';
import './Youtube.css';

const Youtube = (url) => {
    const _onReady = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
    const opts = {
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            origin: window.location.host,
            enablejsapi: '1',
        },
        };

        return <YouTube className='youtube-video' videoId={url.url} opts={opts} onReady={_onReady} />;
}

export default Youtube