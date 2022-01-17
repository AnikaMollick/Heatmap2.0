import React from 'react'
import detectObject from './player-postions.json'
import {mainFunction,endOfFirstHalf} from './FullHeatmap/FullHeatmap'
const ParentComponent = () => {
    const Ball1stHalf=()=>
    {
       mainFunction( detectObject, detectObject =>
            {return detectObject.type === 'ball' && detectObject.timestamp_ns <= endOfFirstHalf })
    }
    const Ball2ndHalf =()=>
    {
        mainFunction( detectObject, detectObject =>
            {return detectObject.type === 'ball' && detectObject.timestamp_ns >= endOfFirstHalf })
    }
    const TeamA1stHalf=()=>
    {
        mainFunction( detectObject, detectObject =>
            {return detectObject.type === 'player' && detectObject.team ==='0'&& detectObject.timestamp_ns <= endOfFirstHalf })
    }
    const TeamA2ndHalf=()=>
    {
        mainFunction( detectObject, detectObject =>
            {return detectObject.type === 'player' && detectObject.team ==='0'&& detectObject.timestamp_ns >= endOfFirstHalf })
    }

    const TeamB1stHalf =()=>
    {
        mainFunction( detectObject, detectObject =>
            {return detectObject.type === 'player' && detectObject.team ==='1'&& detectObject.timestamp_ns <= endOfFirstHalf })
    }
		const TeamB2ndHalf =()=>
    {
        mainFunction( detectObject, detectObject =>
            {return detectObject.type === 'player' && detectObject.team ==='1'&& detectObject.timestamp_ns >= endOfFirstHalf })
    }
    return (
        <div className='clearfix'>
        <div className ="Button">
        <button onClick={() => Ball1stHalf()}>Ball 1st Half</button>
        <button onClick={() => Ball2ndHalf()}>Ball 2nd Half</button>
		<button onClick={() => TeamA1stHalf()}>Team A 1st Half</button>
		<button onClick={() => TeamA2ndHalf()}>Team A 2nd Half</button>
		<button onClick={() => TeamB1stHalf()}>Team B 1st Half</button>
		<button onClick={() => TeamB2ndHalf()}>Team B 2nd Half</button>
        </div>
        </div>
    )
}

export default ParentComponent
