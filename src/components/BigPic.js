import React from 'react'

export const BigPic = ({bigPic}) => {

      return <div className="modal-body">
                <h1>Modal title</h1>
                <p>I am awesome modal!</p>
                <img src={bigPic[0].url} alt="big picture"/>
             </div>
}
