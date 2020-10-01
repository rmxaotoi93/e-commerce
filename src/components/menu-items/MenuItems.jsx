import React from 'react'
import {withRouter} from 'react-router-dom'
import '../menu-items/menu-item.styles.scss'

const MenuItems = ({title, imageUrl, size, history, linkUrl, match}) => {
    return (
      
               <div className={`${size} menu-item`} 
               onClick={() => history.push(`${match.url}${linkUrl}`)}>
                        <div className="background-image" style={{backgroundImage: `url(${imageUrl})`
                    }} />
                    <div className="content">
                        <h1 className="title">{title.toUpperCase()}</h1>
                        <p className="subtitle">Show Now</p>
                    </div>
                </div>
        
    )
}

export default withRouter(MenuItems);
