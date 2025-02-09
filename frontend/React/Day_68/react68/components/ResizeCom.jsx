import React,{useState,useEffect} from 'react'

const ResizeCom = () => {
    const [windowWidth,setWindowWidth]=useState(window,innerWidth);
    useEffect(()=>{
        const handleResize=()=>setWindowWidth(window,innerWidth);

        console.log("Event listener added");
        window.addEventListener('resize',handleResize);

        return ()=>{
            console.log("Event listener removed");
            window.removeEventListener('resize',handleResize);
        };
    },[])

  return (
    <div>
      <h1>Window width : {windowWidth}px</h1>
    </div>
  );
}

export default ResizeCom
