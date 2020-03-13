import React from 'react';
import '../Members/Members.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPlus } from '@fortawesome/free-solid-svg-icons'


const Members = (props) => {
    
    //console.log(props);

     return (
        <div className='members'>
            <div className='serial-num'>
                <h4>{props.users.id}</h4>
            </div>
            <div className='images'>
                <img src={props.users.image} alt=""/>
            </div>
            <div className='details'>
                <h3>Name: {props.users.name} </h3>
                <h4>Yearly Salary: {props.users.yearlysalary}</h4>
                <h4>Phone: {props.users.phone} </h4>
                <h4>Email: {props.users.email} </h4>
                <h4>Website: {props.users.website} </h4>
                <h4>Address: {props.users.address} </h4>
                <button className='add-btn'
                onClick={()=>props.handleAddMember(props.users) }
                ><FontAwesomeIcon icon={faPlus} /> Add</button>
            </div>
        </div>    
    );
};

export default Members;