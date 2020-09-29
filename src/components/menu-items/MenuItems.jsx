import React from 'react'
import '../menu-items/menu-item.styles.scss'

const MenuItems = ({title, imageUrl, size}) => {
    return (
      
               <div className={`${size} menu-item`}>
                        <div className="background-image" style={{backgroundImage: `url(${imageUrl})`
                    }} />
                    <div className="content">
                        <h1 className="title">{title.toUpperCase()}</h1>
                        <p className="subtitle">Show Now</p>
                    </div>
                </div>
        
    )
}

export default MenuItems;
