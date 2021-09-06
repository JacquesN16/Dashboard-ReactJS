import "./widgetSm.css";
import {Visibility} from '@material-ui/icons';

export default function WidgetSm() {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New joined Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img className="widgetSmImg" src="http://placekitten.com/g/200/300" alt="profile-pic" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">John Smith</span>
                        <span className="widgetSmUserTitle">Developer Web</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img className="widgetSmImg" src="http://placekitten.com/g/200/300" alt="profile-pic" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">John Smith</span>
                        <span className="widgetSmUserTitle">Developer Web</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img className="widgetSmImg" src="http://placekitten.com/g/200/300" alt="profile-pic" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">John Smith</span>
                        <span className="widgetSmUserTitle">Developer Web</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img className="widgetSmImg" src="http://placekitten.com/g/200/300" alt="profile-pic" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">John Smith</span>
                        <span className="widgetSmUserTitle">Developer Web</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img className="widgetSmImg" src="http://placekitten.com/g/200/300" alt="profile-pic" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">John Smith</span>
                        <span className="widgetSmUserTitle">Developer Web</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
            </ul>

        </div>
    )
}
