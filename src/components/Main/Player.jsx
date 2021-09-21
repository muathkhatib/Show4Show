import {useContext} from 'react';
import ReactJWPlayer from 'react-jw-player';
import {Watcher} from '../../context'

const Player = () => {
    const { StreamLink } = useContext(Watcher);
    return <section style={{width: '50%', height: '50%'}}>
    <ReactJWPlayer
    playerId='my-unique-id'
    playerScript='https://cdn.jwplayer.com/libraries/ynxSe3tf.js'
    file= {StreamLink}
    isAutoPlay= {true}
    />
    </section> 

}

export default Player