import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector , connect} from 'react-redux';
import { getRaceResults, onChangesearchCurrent } from '../redux/mainSlice';
import './css/ContentDetails.css'

function ResultsAll(props) {
    const winner = useSelector(state => state.data.data);
    let {year, race, driver} = useSelector(state => state.data.search);
    const [races , setRace] = useState(race)
    const dispatch = useDispatch()
    useEffect(() => {

         dispatch(getRaceResults({year, race, driver}))
        race = races;
        dispatch(onChangesearchCurrent({year, race , driver}))
    }, [races, year, race, driver])
    return (
        <div>
            <div className='content-caption'>
                <h2>2023 RACE RESULTS</h2>
            </div>
            <div className='content-table'>
                <ul>
                    <li>Grand Prix</li>
                    <li>Date</li>
                    <li>Winner</li>
                    <li>Car</li>
                    <li>Laps</li>
                    <li>Time</li>
                </ul>
                {
                    winner.map((win) => 
                        <ul key={win.grandPrix}>
                            <li onClick={() => {
                                console.log(win.grandPrix)
                               setRace(win.grandPrix)
                            }}>{win.grandPrix}</li>
                            <li>{win.year}</li>
                            <li>{win.driver}</li>
                            <li>{win.car}</li>
                            <li>{win.laps}</li>
                            <li>{win.time}</li>
                        </ul>
                    )
                }
            </div>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    let data= state.data.search
       return {data};
     };
   export default connect(mapStateToProps) (ResultsAll);
