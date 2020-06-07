import React from 'react';

export default function CalButton(props : {text: string; onClick(): void }){
    return (
        <div>
            <button className="btn" onClick= {props.onClick}>{props.text}</button>
        </div>
    );
};
