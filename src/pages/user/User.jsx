import './user.css';
import {PermIdentity, CalendarToday, PhoneAndroid, MailOutline, LocationSearching, Publish} from '@material-ui/icons';
import { Link } from 'react-router-dom';

export default function User() {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser"> 
                
                    <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="http://placekitten.com/400/400" alt="profile-picture" 
                        className="userShowImg"/>
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">John Smith</span>
                            <span className="userShowUserTitle">Web Developer</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentity className="userShowInfoTitle"/>
                            <span className="userShowInfoTitle">JohnSmith99</span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarToday className="userShowInfoTitle"/>
                            <span className="userShowInfoTitle">31.Dec.1990</span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            <PhoneAndroid className="userShowInfoTitle"/>
                            <span className="userShowInfoTitle">+336.66.66.66.66</span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutline className="userShowInfoTitle"/>
                            <span className="userShowInfoTitle">JohnSmith99@gmail.com</span>
                        </div>
                        <div className="userShowInfo">
                            <LocationSearching className="userShowInfoTitle"/>
                            <span className="userShowInfoTitle">Lille | France</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form action="" className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input type="text" placeholder="JohnSmith99"
                                className="userUpdateInput"/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Full Name</label>
                                <input type="text" placeholder="John Smith"
                                className="userUpdateInput"/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input type="text" placeholder="JohnSmith99@gmail.com"
                                className="userUpdateInput"/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Telephone </label>
                                <input type="text" placeholder="+336.66.66.66.66"
                                className="userUpdateInput"/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input type="text" placeholder="Lille | France"
                                className="userUpdateInput"/>
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img src="http://placekitten.com/400/400" alt="" className="userUpdateImg" />
                               <label htmlFor="file"> <Publish className="userUpdateIcon"/> </label>
                               <input type="file" id="file" style={{display: "none"}}/>
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
