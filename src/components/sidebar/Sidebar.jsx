import React from 'react';
import "./sidebar.css";
import {LineStyle, Timeline, TrendingUp, PersonOutline, Store, EuroSymbol, BarChart, MailOutline, DynamicFeed, ChatBubbleOutline, WorkOutline, Report} from "@material-ui/icons";
import { Link } from 'react-router-dom';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <Link to="/"  className="link">
                                <LineStyle className = "sidebarIcon"/> 
                                    Home
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <Link to="users" className="link"> 
                            <li className="sidebarListItem">
                            <PersonOutline className = "sidebarIcon"/> 
                                Users
                            </li>
                        </Link>
                        <Link to="products" className="link"> 
                            <li className="sidebarListItem">
                            <Store className = "sidebarIcon"/> 
                            Products
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}
