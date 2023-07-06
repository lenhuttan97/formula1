import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getResultsQuantify } from '../redux/mainSlice';

function Quantify(props) {

    const data = useSelector(state => state.data.quantify);
    const {year, race, driver} = useSelector(state => state.data.search);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getResultsQuantify({year, race, driver}));
       
    }, [year, race, driver])
  
    return (
        <div className='listItem'>
            <ul>
                <li>no</li>
                <li>pos</li>
                <li>driver</li>
                <li>team</li>
                <li>q1</li>
                <li>q2</li>
                <li>q3</li>
                <li>lap</li>
            </ul>
            {

                data.map((obj) => obj.quantify !== "" && <ul key={obj.no}>
                    <li>{obj.no}</li>
                    <li>{obj.pos}</li>
                    <li>{obj.driver}</li>
                    <li>{obj.team}</li>
                    <li>{obj.quantify.q1}</li>
                    <li>{obj.quantify.q2}</li>
                    <li>{obj.quantify.q3}</li>
                    <li>{obj.quantify.laps}</li>
                    
                </ul> 
                
              
                )
            }

        </div>
    );
}

export default Quantify;