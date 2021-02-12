import React from 'react'

export const BigPic = ({photo}) => {

      return <div className="modal-body">
                <h1>Modal title</h1>
                <p>I am awesome modal!</p>
                <img src={photo[0].url} alt="big picture"/>
             </div>
}
