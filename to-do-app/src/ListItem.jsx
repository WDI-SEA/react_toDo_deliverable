import React from 'react'

const ListItem = (props) => {
    return (
       <div>
            {/* /* <li>Make the list!</li>*/
            /*<li>{props.doThis}</li> */ }
            <li>{props.text}</li>
       </div>
    )
}

export default ListItem