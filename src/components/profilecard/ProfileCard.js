import React from 'react';
import Interior from "../../images/interior_0.jpg";
import "./ProfileCard.css";
import { host } from "../../data/host.js";

function Button(props) {
    const className = [
        props.animation,
        'w-48 border-2 hover:border-white text-sm border-orange text-white rounded p-4'
    ].join(' ');
    
    return (
        <button className={className}>
            <div className='button-children'>
                {props.children}
            </div>
        </button>
    );
}


function ProfileCard() {

    return(
        <div className="profilecard container-fluid">
            <div class="charts__left__title">
                <div>
                <h1>New Host</h1>
                <p>{host[0].city}</p>
                <h4>Type: {host[0].roomsavailable}</h4>
                <h4>Size: {host[0].roomsize}</h4>
                <h4>Cost: {host[0].cost}</h4>
                <br/>
                <Button animation='animate-bottom-top'>Open Chat</Button>
                </div>
                <img src={Interior} alt="Interior of rental" width={400} height={250} className="center"/>
            </div>

        </div>
    );
}

export default ProfileCard;