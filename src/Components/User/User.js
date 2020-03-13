import React, { useState, useEffect } from 'react';
import '../User/User.css'
import Members from '../Members/Members';



const User = () => {

    const [users, setUsers]= useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(result=> setUsers(result))
    },[])
    
    users[0].img = 'https://www.pexels.com/photo/man-crossed-arms-1516680/';
    users[1].img = 'https://www.pexels.com/photo/photography-of-a-guy-wearing-green-shirt-1222271/';
    users[2].img = 'https://www.pexels.com/photo/business-businessman-contemporary-corporate-532220/';
    users[3].img = 'https://www.pexels.com/photo/man-wearing-a-jacket-sitting-on-brown-wooden-crate-594610';
    users[4].img = 'https://www.pexels.com/photo/portrait-photo-of-smiling-man-with-his-arms-crossed-standing-in-front-of-white-wall-2379004/';
    users[5].img = 'https://www.pexels.com/photo/face-facial-hair-fine-looking-guy-614810/';
    users[6].img = 'https://www.pexels.com/photo/men-s-wearing-black-suit-jacket-and-pants-937481/';
    users[7].img = 'https://www.pexels.com/photo/man-holding-white-teacup-in-front-of-gray-laptop-842567/';
    users[8].img = 'https://www.pexels.com/photo/adult-black-and-white-dark-face-412840/';
    users[9].img = 'https://www.pexels.com/photo/man-wearing-brown-dress-shirt-holding-white-fedora-hat-1036627/';
    users[10].img = 'https://www.pexels.com/photo/man-doing-pose-1496647/';

    users[0].salary=100000;
    users[1].salary=200000;
    users[2].salary=25456322;
    users[3].salary=21541;
    users[4].salary=4554456;
    users[5].salary=2548541;
    users[6].salary=5154541;
    users[7].salary=524574;
    users[8].salary=5478542;
    users[9].salary=1216454;
    users[10].salary=9645421;


    return (
        <div className='user-container'>
            <div className='user'>
                {
                   users.map(users=><Members member={users} >{users.name}</Members>)
                }
            </div>

            <div className='selected-user'>
                <h2>Selected Members:</h2>
            </div>
        </div>
    );
};

export default User;