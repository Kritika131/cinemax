import React, { useState } from 'react'
import './style.scss'

const SwitchTabs = ({data,onTabChange}) => {

    const [selectedTab,setSelectedTab] = useState(0);
    const [left ,setLeft] =useState(0);
    const activeTab = (tab,idx)=>{
       setLeft(idx*100);
       setTimeout(()=>{
        setSelectedTab(idx);
       },300);
       onTabChange(tab,idx);
    }
  return (
    <div className='switchingTabs'>
        <div className="tabItems">
            {data.map((tab,idx)=>(
                <span key={idx} className= {`tabItem ${selectedTab===idx?"active" :""}`} 
                 onClick={()=>activeTab(tab,idx)}>
                    {tab}
                </span>
            ))}
            <span className="movingBg" style={{left}}/>
        </div>
    </div>
  )
}

export default SwitchTabs            