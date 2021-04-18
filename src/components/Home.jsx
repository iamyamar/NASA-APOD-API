import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';

export default function Home() {
    return(
        <div className="home">
            <Link className="home-link" to="/nasaphoto">NASA Astronomy Picture Of The Day</Link>
            <ReactPlayer 
                className="video"
                url="video/bgvideo.mp4"
                loop="true"
                playing="true"
                muted="true"
                width="720"
                height="480"
            />
        </div>
    );
}
