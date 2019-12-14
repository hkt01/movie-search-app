import React, { useState, useEffect } from 'react';

import "./spinner.css";

/**
 * Spinner component to display data being loaded (with hooks).
 */
function Spinner() {
  // Set state
  const [show, setShow] = useState(false);

  // Set timeout on mounting
  useEffect(() => {
    const timer = setTimeout(enableSpinner, 250);

    // Cleanup after unmounting
    return () => {
      clearTimeout(timer);
    };
  });

  function enableSpinner() {
    setShow(true);
  }

  if (!show) {
    return null;
  }
  return <div className="loader">Loading...</div>;
}

export default Spinner;
