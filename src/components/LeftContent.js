import React, { useEffect, useState } from 'react';
import { AiFillCopy } from "react-icons/ai";
import $ from 'jquery';

function LeftContent() {

  function fncClickBoardApi(){ 
    if (!navigator.clipboard) { 
      // Clipboard API not available 
      return; 
    } 
    var copyArea = $(".email").val(); 
    navigator.clipboard.writeText(copyArea)
      .then(resultText => { 
        console.log("Text copied to clipboard..."); 
        copyArea += resultText; 
      })
      .catch(err => { 
        console.log('Something went wrong', err); 
      }); 
  }

  return (
    <div className='left-content'>
      <div className='left-cont-box'>
        <img src={`${process.env.PUBLIC_URL}/images/mm2.png`} alt="" />
        <h1 className='txt-brt'>Lee YouSang <br />&#183;</h1>
        <p>Web-Publisher, <br />Front-End Developer</p>

        <div>
          <input type="text" value='ysmarco12@gmail.com' readOnly className='email' />
          <AiFillCopy className='btn-copy' onClick={fncClickBoardApi} />
        </div>
      </div>    
    </div>
  )
}

export default LeftContent