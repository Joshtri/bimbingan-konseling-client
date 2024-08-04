import React from 'react'

const CardComp = ({cardTitle, totalValue}) => {
  return (
    <>
      <div className="columns">
        <div className="column is-one-third"> {/* atau is-one-third, is-two-thirds, dll. */}
          <div className='card is-shadowless is-rounded mt-5'>
            <div className='card-content'>
              <div className='content'>
                <div className='title pb-4'>{cardTitle}</div>
                <p className='subtitle has-text-centered'>{totalValue}</p>
                <br />
                {/* <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardComp
