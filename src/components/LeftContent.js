import React, { useEffect, useState } from 'react';
import { AiFillCopy } from "react-icons/ai";
import $ from 'jquery';
import '../scss/leftContent.scss'

function LeftContent() {

  
  useEffect(() => {
    const copyAlert = document.querySelector('.copy-done');
    document.addEventListener('mousemove', (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      
      copyAlert.style.left = mouseX + 'px';
      copyAlert.style.top = mouseY + 'px';
    })
  
    return () => {
    }
  }, [])
  

  function fncClickBoardApi(){ 
    if (!navigator.clipboard) { 
      // Clipboard API not available 
      return; 
    } 
    var copyArea = $(".email").val(); 
    navigator.clipboard.writeText(copyArea)
      .then(resultText => { 
        document.querySelector('.copy-done').style.visibility = 'visible'
        document.querySelector('.copy-done').style.opacity = '1';
        console.log("Text copied to clipboard..."); 
        copyArea += resultText; 
        setTimeout(() => {
          document.querySelector('.copy-done').style.opacity = '0';
          document.querySelector('.copy-done').style.visibility = 'hidden'
        }, 500)
      })
      .catch(err => { 
        console.log('Something went wrong', err); 
      }); 
  }

  



  return (
    <div className='left-content'>
      <div className="copy-done">복사완료</div>
      
      <div className='left-cont-box'>
        <img src={`${process.env.PUBLIC_URL}/images/mm2.png`} alt="" />
        <h1 className='txt-brt'>LEE YOUSANG <br />&#183;</h1>
        <p>Web-Publisher<br />Front-End Developer</p>

        <div>
          <input type="text" value='ysmarco12@gmail.com' readOnly className='email' />
          <AiFillCopy className='btn-copy' onClick={fncClickBoardApi} />
        </div>
      </div>    
    </div>
  )
}

export default LeftContent