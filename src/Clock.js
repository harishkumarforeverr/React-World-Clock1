import { useState, useEffect } from 'react';
import './Clock.css'

function getTime(d) {
    const ret = {

    };  

    //secs
    const secs = d.getSeconds().toString().padStart(2,'0');
    ret.firstSecond = secs.charAt(0);
    ret.secondSecond = secs.charAt(1);

    // mins
    const mins = d.getMinutes().toString().padStart(2,'0');
    ret.firstMinute = mins.charAt(0);
    ret.secondMinute = mins.charAt(1);

    // hours
    const hours = d.getHours().toString().padStart(2,'0');
    ret.firstHour = hours.charAt(0);
    ret.secondHour = hours.charAt(1);

    return ret;
}



const Clock = ({ country, timezone }) => {
const t = Date.now() + 3600 * timezone * 1000;
const dateIni = new Date(t);
const defaultTime = getTime(dateIni)
const [date, setDate] = useState(dateIni);

// secs
const [firstSecond,setFirstSecond] = useState(defaultTime.firstSecond);
const [firstSecondMove,setFirstSecondMove] = useState('')
const [secondSecond,setSecondSecond] = useState(defaultTime.secondSecond);
const [secondSecondMove,setSecondSecondMove] = useState('')

// mins
const [firstMinute,setFirstMinute] = useState(defaultTime.firstMinute);
const [firstMinuteMove,setFirstMinuteMove] = useState('')
const [secondMinute,setSecondMinute] = useState(defaultTime.secondMinute);
const [secondMinuteMove,setSecondMinuteMove] = useState('')


    // hours
    const [firstHour,setFirstHour] = useState(defaultTime.firstHour);
    const [secondHour,setSecondHour] = useState(defaultTime.secondHour);

useEffect(() => {
    const interval = setInterval(() => {
    const time = date.getTime() + 1000;
    const d = new Date(time);

    const defaultTime = getTime(dateIni)
    //secs
    if (firstSecond !== defaultTime.firstSecond) {
        setFirstSecondMove('move');
        setTimeout(()=>{ 
            setFirstSecond(defaultTime.firstSecond); 
        },950)
    } else{
        setFirstSecondMove(''); 
    }
    if (secondSecond !== defaultTime.secondSecond) {
        setSecondSecond(defaultTime.secondSecond);
    }
    // mins
    if (firstMinute !== defaultTime.firstMinute) {
        setFirstMinuteMove('move');
        setTimeout(()=>{
            setFirstMinute(defaultTime.firstMinute);
        },9500)
    } else {
        setFirstMinuteMove('');
    }
    if (secondMinute !== defaultTime.secondMinute) {
        setSecondMinuteMove('move');
        setTimeout(()=>{
            setSecondMinute(defaultTime.secondMinute);
        },950)
    } else {
        setSecondMinuteMove('');
    }
    // hours
    if (firstHour !== defaultTime.firstHour) {
        setFirstHour(defaultTime.firstHour);
    }    
    if (secondHour !== defaultTime.secondHour) {
        setSecondHour(defaultTime.secondHour);
    }
    setDate(d);

    }, 1000);
    return () => {
    clearInterval(interval);
    };
}, [date]);


return (
    <div className="clock">
        <div className="hours">
            <div className="first">
            <div className="number">{ firstHour }</div>
            </div>
            <div className="second">
            <div className="number">{ secondHour }</div>
            </div>
        </div>
        <div className="tick">:</div>
        <div className="minutes">
            <div className="first">
            <div className={'number ' + firstMinuteMove}>{ firstMinute }</div>
            </div>
            <div className="second">
            <div className={'number ' + secondMinuteMove}>{ secondMinute }</div>
            </div>
        </div>
        <div className="tick">:</div>
        <div className="seconds">
            <div className="first">
            <div className={'number ' + firstSecondMove}>{ firstSecond }</div>
            </div>
            <div className="second infinite">
            <div className={'number ' + secondSecondMove}>{ secondSecond }</div>
            </div>
        </div>
        </div>
);
};

export default Clock;