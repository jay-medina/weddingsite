import * as React from 'react';


export interface OverlayProps {
  always?: boolean
}

export default function Overlay(props: OverlayProps) {
  function displayAlways() {
    if(props.always) {
      return 'overlay--always';
    }
    
    return '';
  }

  return (
    <div className={'overlay ' + displayAlways()} ></div>
  );
};