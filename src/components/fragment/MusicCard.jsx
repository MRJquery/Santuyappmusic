import React, {useState} from 'react';
import '../assets/scss/MusicCard.scss';
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import {useDispatch} from "react-redux";
import {increaseTimesPlayed, setCurrentPlaying} from "../../actions/actions";
import Name from "./Name";

function MusicCard(props) {
    const {name, img, author_name} = props.music;

    const [isHovered, setHovered] = useState(false);

    function handleResponse() {
        setHovered(!isHovered);
    }

    const dispatch = useDispatch();

    function handlePlay() {
        dispatch(setCurrentPlaying(props.music))
        dispatch(increaseTimesPlayed(props.music.id));
    }

    return (
        <div className={"music-card"}>
            <div onClick={handlePlay}  className={"music-card-cover"} onMouseOver={handleResponse}>
                <img src={require("../assets/img/" + img).default} alt={name}/>
                <div className="play-circle">
                    <PlayCircleFilledWhiteIcon/>
                </div>
            </div>
            <React.Fragment>
                <Name name={name} className={"song-name"} length={name.length}/>
                <Name name={author_name} className={"author-name"} length={author_name.length}/>
            </React.Fragment>
        </div>
    );
}

export default MusicCard;