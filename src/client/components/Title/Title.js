import React from 'react';
import PropTypes from 'prop-types';
import './Title.styles.css';

import icon from '../../assets/images/logo/logo-treasure-hunt-brown.svg';
import shareicon from '../../assets/images/icons/share-icon.svg';

export default function HeaderTitle({ title }) {
  const content = (
    <h2>
      <span>
        <img src={icon} alt="App Icon" />
      </span>
      <span>{title}</span>
      <span>
        <img src={shareicon} alt="Share Icon" />
      </span>
    </h2>
  );
  return <div className="header-heading">{content}</div>;
}

HeaderTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
