import React from 'react';
// used below to handle scroll events
export function debounce(func, wait) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

export function addCustomProps(component, propDict) {
  return React.cloneElement(
    component,
    propDict,
  );
}
