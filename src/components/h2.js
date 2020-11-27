import React from "react";

export default function H2({title, ...props}) {
    return <div className={'h2-container'}>
        <h2>{title}</h2>
        <div className='heading-line'> </div>
    </div>;
}