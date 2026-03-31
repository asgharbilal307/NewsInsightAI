import React,{useState} from "react";

export function ScoreInput({score,onChange}){

    return(
        <div>
            <input type="number" value={score} onChange={(e)=>onChange(e.target.value)} />
        </div>
    );
}

export function ScoreDisplay({score}){

    return(
        <div>
            <h2>Current Score: {score}</h2>
        </div>
    );
}