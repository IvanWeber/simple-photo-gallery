import React from 'react'

export const BigPic = ({photo}) => {

      return <div className="modal-body">
                  <img className="modal-body__img" src={photo[0].url} alt="big picture"/>
                  <h1 className="modal-body__header">{photo[0].title}</h1>
             </div>
}
