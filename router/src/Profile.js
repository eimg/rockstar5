import React from "react";
import { useParams } from "react-router-dom";

const Profile = props => {
    let { name } = useParams();

    return (
        <div>
            <h1>Profile</h1>
            <p>Profile page for {name}.</p>
        </div>
    );
};

export default Profile;
