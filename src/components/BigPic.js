import React from 'react'

export const BigPic = ({photo}) => {

      return <div className="modal-body">
                  <img src={photo[0].url} alt="big picture"/>
                  <h1>{photo[0].title}</h1>
             </div>
}
