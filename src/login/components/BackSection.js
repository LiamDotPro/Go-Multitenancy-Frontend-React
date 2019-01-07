import React from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons/faArrowLeft'

const BackSection = () => {

    return (
        <div className="BackSection">
            <Link to={'./'}><FontAwesomeIcon color={'#fff'} icon={faArrowLeft}/> Back to homepage</Link>
        </div>
    );

};

BackSection.propTypes = {};

export default BackSection;
