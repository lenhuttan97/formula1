import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getResultsPitStop, getResultsPractive } from '../redux/mainSlice';

function Practice(props) {
    const data = useSelector(state => state.data.practice);
    const { year, race, driver } = useSelector(state => state.data.search);
    const dispatch = useDispatch();
    const obj = () => {
        let objs = []
        let practice;
        data.forEach(element => {
            switch (props.practice) {
                case 1:
                    practice = element.practive.q1
                    break;
                case 2:
                    practice = element.practive.q2
                    break;
                case 3:
                    practice = element.practive.q3
                    break;
                default:
                    break;
            }
            if(practice !== undefined){
                objs.push({
                    no: element.no,
                    pos: element.pos,
                    driver: element.driver,
                    team: element.team,
                    practice: practice
                })
            }
           
        });
        objs.sort((a,b) => (a.practice.time > b.practice.time) ? 1 : ((b.practice.time > a.practice.time) ? -1 : 0))

        return objs

    }
    useEffect(() => {
        dispatch(getResultsPractive({ year, race, driver }));

    }, [year, race, driver])
    return (
        <div className='listItem'>
            <ul>
                <li>no</li>
                <li>pos</li>
                <li>driver</li>
                <li>team</li>
                <li>time</li>
                <li>gap</li>
                <li>laps</li>
            </ul>
            {

                obj().map((obj) => {
                    if (obj.practice !== undefined) {
                        return <ul key={obj.no}>
                            <li>{obj.no}</li>
                            <li>{obj.pos}</li>
                            <li>{obj.driver}</li>
                            <li>{obj.team}</li>
                            <li>{obj.practice.time}</li>
                            <li>{obj.practice.gap}</li>
                            <li>{obj.practice.laps}</li>
                        </ul>
                    }
                }
                )
            }

        </div>
    );
}

export default Practice;