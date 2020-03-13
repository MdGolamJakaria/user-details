import React, { useState } from 'react';
import '../User/User.css'
import Usersdata from '../../Usersdata/index'
import Members from '../Members/Members';
import Cart from '../Cart/Cart';

const User = () => {

    const [users, setusers]= useState(Usersdata);
    const [cart, setCart]=useState([]);

    const handleAddMember=(member)=>{
        const newCart = [...cart,member];
        setCart(newCart);
    }

    return (
        <div className='user-container'>
            <div className='user'>
                {
                    
                Usersdata.map(user=><Members
                handleAddMember={handleAddMember}
                users={user}> 
                </Members>)
                    
                }
            </div>

            <div className='selected-user'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default User;