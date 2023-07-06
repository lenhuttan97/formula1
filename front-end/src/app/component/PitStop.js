import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getResultsPitStop } from '../redux/mainSlice';

function PitStop(props) {
    const data = useSelector(state => state.data.pitStop);
    const {year, race, driver} = useSelector(state => state.data.search);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getResultsPitStop({year, race, driver}));
       
    }, [year, race, driver])
  
    return (
        <div className='listItem'>
            <ul>
                <li>no</li>
                <li>pos</li>
                <li>driver</li>
                <li>team</li>
                <li>stop</li>
                <li>lap</li>
                <li>time of day</li>
                <li>time</li>
                <li>total</li>
            </ul>
            {

                data.map((obj) => {
                   if(obj.pit !== undefined){
                    return <ul key={obj.no}>
                    <li>{obj.no}</li>
                    <li>{obj.pos}</li>
                    <li>{obj.driver}</li>
                    <li>{obj.team}</li>
                    <li>{obj.pit.stops}</li>
                    <li>{obj.pit.lap}</li>
                    <li>{obj.pit.timeOfDay}</li>
                    <li>{obj.pit.time}</li> 
                    <li>{obj.pit.total}</li>
                </ul> 
                   }
                }
                )
            }

        </div>
    );
}
export default PitStop;