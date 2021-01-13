
import React from 'react'
import PropTypes from 'prop-types'

function Profile(props) {
  return (
    <div className ="content">
      <div>
        <span>My name is : {props.name}</span>
      </div>
      <div>
        <span>Let's talk about me : {props.bio} </span>
      </div>
      <div>
      <span>My profession is: {props.profession}</span>
      </div>
      <button className='btn' onClick={e => props.handleName(props.name)}>
     Click me
   </button>
    </div>);
    
    
}
Profile .defaultProps = {
  name :'inconnu',
  bio :'short text' ,
  profession :'any' 
}
Profile.propTypes = {
  name : PropTypes.string ,
  bio : PropTypes.string ,
  profession :PropTypes.string ,
  handleName  :PropTypes.func
 };

export default Profile 