import React from 'react'

export default function PageTitle(props) {
    return (
        <div className='pagetitle_wrapper'>
            <div className="page_title">{props.title}</div>
        </div>
    )
}
