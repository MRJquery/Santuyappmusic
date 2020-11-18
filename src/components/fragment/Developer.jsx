import React from 'react';
import '../assets/scss/Developer.scss';
import {IconButton} from "@material-ui/core";
import AvatarImage from "../assets/img/avatar3.jpg";
import {Facebook, Instagram, LinkedIn, Portrait, Twitter} from "@material-ui/icons";

const Developer = () => {
    return (
        <div className={"Developer"}>
            <h3 className={"Developer-head"}>The developer</h3>
            <div className="Developer-profile">
                <div className="Developer-profileCard">
                    <img src={AvatarImage} alt="Profile"/>
                    <div className={"Card-details"}>
                        <h3>RyanPrawira</h3>
                        <p>Front End Developer</p>
                    </div>
                </div>
                <div className="Developer-profileDetails">
                    <p>Seorang Mahasiswa Ilmu Komputer di IndraPrasta University, Jakarta.</p>
                    <p>Pengembang web tumpukan penuh dan pembuat kode Kompetitif.</p>
                    <p>Saya suka mendesain situs web yang sepenuhnya responsif.</p>
                    <p>Saya memiliki minat yang besar dalam mengembangkan proyek, kapan pun saya ingin mempelajari sesuatu yang baru.</p>
                    <div className="Card-btn">
                        <IconButton target={"_blank"}  href={"https://www.facebook.com/"} title={""}>
                            <Facebook/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://twitter.com/heloword_"}  title={"heloword_"}>
                            <Twitter/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://www.linkedin.com/"}  title={""}>
                            <LinkedIn/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://www.instagram.com/ryanprw/"}  title={"ryanprw"}>
                            <Instagram/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://"}  title={"Web Portfolio"}>
                            <Portrait/>
                        </IconButton>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Developer;