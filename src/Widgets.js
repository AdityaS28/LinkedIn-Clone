import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className='widgets__article'>
            <div className='widgets__articleLeft'>
            <FiberManualRecordIcon />
            </div>

            <div className='widgets__articleRight'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

  return (
    <div className='widgets'>
      <div className='widgets__header'>
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Biden, Sunak and Albanese announce nuclear-powered submarine plan for Australia", "Top news - 9099 readers")}
      {newsArticle("Ukrainian soldiers wrap up Leopard tank training in Spain", "Top news - 8000 readers")}
      {newsArticle("UK: Crypto lender loses USD 200 million to hackers", "Crypto - 7504 readers")}
      {newsArticle("In China, ChatGPT logins being sold in black market", "Top news - 1002 readers")}
      {newsArticle("Tesla hits new heights", "Car & auto news - 5709 readers")}
    </div>
  )
}

export default Widgets
