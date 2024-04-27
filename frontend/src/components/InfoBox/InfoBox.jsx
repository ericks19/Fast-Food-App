import React, { useState } from 'react';
import classes from './InfoBox.module.css'

const InfoBox = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
     <div className={`${classes.user_info_window} ${isOpen ? classes.open : classes.closed}`}>
      <div className={classes.user_info_content}>
        {children}
      </div>
      <button onClick={handleClose} className={classes.close_btn} >Close</button>
    </div>
  );
};

export default InfoBox;
