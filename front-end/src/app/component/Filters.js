import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FilterDriversAndTeams from './FilterDriversAndTeams';
import { connect, useDispatch ,useSelector } from 'react-redux';
import './css/Filters.css';
import '../../App.css';
import { years, races } from '../redux/data';
import { onChangesearchCurrent } from '../redux/mainSlice';


function Filters(props) {
    const [activeOption, setActiveOption] = useState(false);
    const [showOption, setShowOption] = useState();

    const { year, race, driver } = useSelector(state => state.data.search);
const dispatch = useDispatch();
    const [optionCurrentYears, setOptionCurrentYears] = useState(year);
    const [optionCurrentRaces, setOptionCurrentRaces] = useState(race);
    const [optionCurrentDrivers, setOptionCurrenDrivers] = useState(driver);
    const [optionCurrentTeams, setOptionCurrenTeams] = useState();

    useEffect(()=>{
        let year = optionCurrentYears;
        let race = optionCurrentRaces;
        let driver = optionCurrentDrivers;
        dispatch(onChangesearchCurrent({year, race, driver} ))
    },[optionCurrentYears, optionCurrentRaces, optionCurrentDrivers])

    const listItems = (type, datas) => datas.map((data) =>
        <li key={data}
            className={`${props.data.year == data && "active"} 
            ${props.data.race === data && "active"}`}
            onClick={() => {
                switch (type) {
                    case 'years':
                        setOptionCurrentYears(data)
                        break;
                    case 'races':
                        setOptionCurrentRaces(data)
                        break;
                    default:
                        break;
                }

            }}
        >
            {data}</li>
    );
    return (
        <div className='filter container'>
            <div className='option'>
                <div className='option-head'>
                    <FontAwesomeIcon icon="fa-solid fa-filter" size="2x" />
                    <span>
                        Filters:
                    </span>
                </div>
                <div className='option-item'>
                    <span
                        className={`${activeOption === 'years' && "active"}`}
                        onClick={() => {
                            activeOption === 'years' ? setActiveOption() : setActiveOption('years');
                            showOption === 'years' ? setShowOption() : setShowOption('years');
                        }
                        }>
                        years
                    </span>
                    <span
                        className={`${activeOption === 'races' && "active"}`}
                        onClick={() => {
                            activeOption === 'races' ? setActiveOption() : setActiveOption('races');
                            showOption === 'races' ? setShowOption() : setShowOption('races');
                        }}>
                        races
                    </span>
                    <span
                        className={`${activeOption === 'drivers' && "active"}`}
                        onClick={() => {
                            activeOption === 'drivers' ? setActiveOption() : setActiveOption('drivers')
                            showOption === 'drivers' ? setShowOption() : setShowOption('drivers');
                        }
                        }>
                        drivers
                    </span>
                    <span
                        className={`${activeOption === 'teams' && "active"}`}
                        // onClick={() => {
                        //     activeOption === 'teams' ? setActiveOption() : setActiveOption('teams')
                        //     showOption === 'teams' ? setShowOption() : setShowOption('teams');
                        // }}
                        >
                        teams
                    </span>
                    <span
                        className={`${activeOption === 'DHL' && "active"}`}
                        // onClick={() => {
                        //     activeOption === 'DHL' ? setActiveOption() : setActiveOption('DHL');
                        //     showOption === 'DHL' ? setShowOption() : setShowOption('DHL');
                        // }}
                        >
                        DHL FASTEST LAP AWARD
                    </span>
                </div>

            </div>
            <div className='option-current'>
                {!optionCurrentYears == '' &&
                    <span >
                        {props.data.year}
                    </span>
                }
                {!optionCurrentRaces == '' &&
                    <span >
                    Races: {props.data.race}
                    </span>
                }
                {!optionCurrentDrivers == '' &&
                    <span >
                    Drivers: {optionCurrentDrivers}
                    </span>
                }
                {!optionCurrentTeams == '' &&
                    <span >
                    Teams: {optionCurrentTeams}
                    </span>
                }
            </div>
            <div className='list-option-item'>
                {activeOption === 'years' &&
                    <ul>
                        {listItems('years', years)}
                    </ul>
                }

                {activeOption === 'races' &&
                    <ul>
                        {listItems('races', races(props.data.year))}
                    </ul>
                }
                {activeOption === 'drivers' &&
                <FilterDriversAndTeams type='drivers' 
                optionCurrentDrivers={optionCurrentDrivers} 
                setOptionCurrenDrivers={setOptionCurrenDrivers}/>
            }

            {activeOption === 'teams' &&
            <FilterDriversAndTeams type='teams'
                optionCurrentTeams = {optionCurrentTeams} 
                setOptionCurrenTeams = {setOptionCurrenTeams}
            />
                } 
            </div>
           


        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
 let data= state.data.search
    return {data};
  };
export default connect(mapStateToProps) (Filters);