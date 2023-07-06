import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getResultsFastest } from '../redux/mainSlice';

function ListItems(props) {

    const data = useSelector(state => state.data.fastest);
    const {year, race, driver} = useSelector(state => state.data.search);
    const dispatch = useDispatch();
    // const objs =  data.sort((a,b) => (a.fastest.avgSpeed > b.fastest.avgSpeed) ? 1 : ((b.fastest.avgSpeed > a.practice.time) ? -1 : 0))
    useEffect(()=>{
        dispatch(getResultsFastest({year, race, driver}));
    }, [year, race, driver])
    return (
        <div className='listItem'>
            <ul>
                <li>no</li>
                <li>pos</li>
                <li>driver</li>
                <li>team</li>
                <li>lap</li>
                <li>time of day</li>
                <li>time</li>
                <li>avg time</li>
            </ul>
            {
                
                data.map((obj) => 
                <ul key={obj.no}>
                    <li>{obj.no}</li>
                    <li>{obj.pos}</li>
                    <li>{obj.driver}</li>
                    <li>{obj.team}</li>
                    <li>{obj.fastest.lap}</li>
                    <li>{obj.fastest.timeOfDay}</li>
                    <li>{obj.fastest.time}</li>
                    <li>{obj.fastest.avgSpeed}</li>
                </ul>
                )
            }

        </div>
    );
}

export default ListItems;