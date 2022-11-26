import "./LightSwitch.scss"
import React from 'react'
import { useDispatch } from "react-redux";
import { setSunset as setSunsetActions } from "../Sunset/SunsetSlice";


export default function LightSwitch() {
const [disabled, setDisabled] = React.useState(false);
const [checked, setChecked] = React.useState(false);
const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(setSunsetActions(checked));
    }, [checked]);


    function handleClick({currentTarget}){
        setDisabled(true);
        setChecked(currentTarget.checked);

        setTimeout(()=> setDisabled(false), 16000);
    }

  return (
    <div className="LightSwitch">
          <label className='button'>
            <input disabled={disabled} onClick={handleClick} type='checkbox'/>
            <span></span>
            <span></span>
        </label>
    </div>
  )
}
