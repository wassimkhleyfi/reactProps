import React from 'react'
import PropTypes from 'prop-types'


const Picture = (props) => {
    return (
      <div>
        <img src={props.src} height={props.height} width ={props.with}/>
        {props.children}
      </div>
    )
  }

  Picture.propTypes = {
    src : PropTypes.string ,
    height : PropTypes.string ,
    width :PropTypes.string 
   };

  export default Picture 