import React from 'react';
import "./newUser.css";

export default function NewUser() {
    return (
        <div className="newUser">
            <h1 className="newUserTitle">New User</h1>
            <form  className="newUserForm">
                <div className="newUserItem">
                    <label >Username</label>
                    <input type="text" placeholder="Username"/>
                </div>
                <div className="newUserItem">
                    <label >Full Name</label>
                    <input type="text" placeholder="Full Name"/>
                </div>
                <div className="newUserItem">
                    <label >Email</label>
                    <input type="email" placeholder="Email"/>
                </div>
                <div className="newUserItem">
                    <label >Password</label>
                    <input type="password" placeholder="Password"/>
                </div>
                <div className="newUserItem">
                    <label >Telephone</label>
                    <input type="text" placeholder="Telephone"/>
                </div>
                <div className="newUserItem">
                    <label >Address</label>
                    <input type="text" placeholder="Address"/>
                </div>
                <div className="newUserItem">
                    <label >Gender</label>
                    <div className="newUserGender">

                        <input type="radio" name="gender" id="male" value="male"placeholder="Username"/>
                        <label for="Male">Male</label>
                        <input type="radio" name="gender" id="female" value="female"placeholder="Username"/>
                        <label for="Female">Female</label>
                        <input type="radio" name="gender" id="other" value="other"placeholder="Username"/>
                        <label for="Other">Other</label>
                    </div>
                </div>
                <div className="newUserItem">
                    <label htmlFor="">Active</label>
                    <select className="newUserSelect" name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className="newUserButton">Create</button>
            </form>
        </div>
    )
}
