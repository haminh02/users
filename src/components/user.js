import React from 'react';
import './user.css';
import email from '../img/email.svg';
import address from '../img/address.svg';
import phone from '../img/phone.svg';
import website from '../img/website.svg';

var size=35;

class User extends React.Component {
    render(){
        const {user}= this.props;
        return (
            <div className="user">
                <h1 className="name"> { user.name } </h1>
                <p className="username"> { user.username } </p>
                <h2 className="company"> { user.company.name } </h2>
                <p className="email">  
                    <img src={email} width = {size} height={size}/>
                    { user.email }
                </p>
                <p className="adress">
                    <img src={address} width = {size} height={size}/>
                    { user.address.street+", "+user.address.suite+", "+user.address.city+", "+user.address.zipcode }
                </p>
                <p className="phone">  
                    <img src={phone} width = {size} height={size}/>
                    { user.phone }
                </p>
                <p className="website">  
                    <img src={website} width = {size} height={size}/>
                    { user.website }
                </p>
            </div>
        );
    }
}
  
export default User;