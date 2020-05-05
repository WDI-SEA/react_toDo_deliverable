import React from 'react'

const ListStuff = (props) => {
    let parseList = props.doThis.map( (todo, index) => {
        return (<li> {todo}! </li>)
      })
    return (
        <div>
            <ul>
                {parseList}
            </ul>
        </div>
    )
}

export default ListStuff