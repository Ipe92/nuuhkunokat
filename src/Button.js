import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Library } from '@fortawesome/fontawesome-svg-core'
import { fab, faRProject } from '@fortawesome/free-brands-svg-icons'
import { faHeartBroken, faHeart } from '@fortawesome/free-solid-svg-icons'

const Button = ({ icon }) => {
    return (
        <div className={icon} />
    );
};

export default Button;