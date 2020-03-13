import React from 'react';
import '../Members/Members.css'
const Members = (props) => {
 console.log(props);
    return (
        <div className='members'>
            <div className='serial-num'>
                <h4>{props.member.id}.</h4>
            </div>
            <div className='images'>
                {props.member.img}
            </div>
            <div className='details'>
                <h3>Name: {props.member.name}</h3>
                <h4>Phone: {props.member.phone}</h4>
                <h4>Email : {props.member.email}</h4>
                <h4>Website : {props.member.website}</h4>
                <h4>City : {props.member.address.city} </h4>
                <button className='add-btn'>Add</button>
            </div>
        </div>    
    );
};

export default Members;