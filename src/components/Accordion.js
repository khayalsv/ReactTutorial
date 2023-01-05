import React, { useState } from 'react'

const Accordion = ({ items }) => {

    const [expandedIndex, setExpandedIndex] = useState(-1);

    const handleClick = (nextIndex) => {
        (expandedIndex === nextIndex) ? setExpandedIndex(-1) : setExpandedIndex(nextIndex);
    }

    const renderedItems = items.map((item, index) => {

        //(index === expandedIndex) ? console.log('expanded') : console.log('collapsed');

        const isExpanded = index === expandedIndex;

        const icon = <span>{isExpanded ? 'down' : 'left'}</span>


        console.log(isExpanded);

        return (
            <div key={item.id}>
                <div onClick={() => handleClick(index)}>{icon} {item.label}</div>
                {isExpanded && <div>{item.content}</div>}
            </div>
        )
    })
    return (
        <div>{renderedItems}</div>
    )
}

export default Accordion