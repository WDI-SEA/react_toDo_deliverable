import React from 'react'

// const ListItem = (props) => {
//     return (
//         <li>{props.doThis}</li>
//     )
// }

const ListItem = props => {
    return (
        <li class="toDo">
            {props.doThis}
        </li>
    )
}

export default ListItem