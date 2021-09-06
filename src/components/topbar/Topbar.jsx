import React from 'react'
import "./topbar.css"
import {NotificationsNone, Language, Settings} from '@material-ui/icons';
import { Link } from 'react-router-dom';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <Link to="/" className="link">
                <div className="topLeft">
                    <span className="logo"> JN</span>
                    <img className="logoImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjKHYOtJR5wFT6lUFet2SA4Uq4j0Xkbzt7JQ&usqp=CAU" alt="logo" />

                </div>
                </Link>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <Language/>
                        <Settings/>
                        <NotificationsNone/> <span className="topIconBadge">2</span>
                    </div>
                    <img src="http://placekitten.com/g/200/300" alt="profile picture" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}
