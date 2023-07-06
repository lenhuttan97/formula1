import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getResultsStartingGrid } from '../redux/mainSlice';

function StartingGrid(props) {
    const data = useSelector(state => state.data.startingGrid);
    const {year, race, driver} = useSelector(state => state.data.search);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getResultsStartingGrid({year, race, driver}));
       
    }, [year, race, driver])
  
    return (
        <div className='listItem'>
            <ul>
                <li>no</li>
                <li>pos</li>
                <li>driver</li>
                <li>team</li>
                <li>time</li>
            </ul>
            {

                data.map((obj) => obj.startingGrid !== "" && <ul key={obj.no}>
                    <li>{obj.no}</li>
                    <li>{obj.pos}</li>
                    <li>{obj.driver}</li>
                    <li>{obj.team}</li>
                    <li>{obj.startingGrid}</li>
                    
                </ul> 
                
              
                )
            }

        </div>
    );
}

export default StartingGrid;