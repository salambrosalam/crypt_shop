import React from "react";
import {Redirect} from "react-router-dom";

const Profile = (props) => {
    if(props.isAuthenticated === true) {
        return (
            <div>
                <span>This is profile page</span>
            </div>
        )
    }
    return <Redirect to="/login"/>
}
export default Profile;
