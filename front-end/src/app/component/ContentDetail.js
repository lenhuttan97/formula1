import React, { useEffect, useState } from 'react';
import ResultsAll from './ResultsAll';
import './css/ContentDetails.css'
import RaceResultsCard from './RaceResultsCard';
import Fastest from './Fastest'
import { useDispatch, useSelector } from 'react-redux';
import { getResultsAllDriver } from '../redux/mainSlice';
import PitStop from './PitStop';
import StartingGrid from './StartingGrid';
import Quantify from './Quantify';
import Practice from './Practice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function ContentDetail(props) {
    const [activeSlide, setActiveSlide] = useState('race');
    const [activeCard, setActiveCard] = useState();
    const [activeMenu, setActiveMenu] = useState(false);
    const data = useSelector(state => state.data.dataRace);
    const { year, race, driver } = useSelector(state => state.data.search);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getResultsAllDriver( { year, race, driver }));
    }, [race, year, race, driver])
    return (
        <>
            {
                props.race === 'all' ? <ResultsAll setRace={props.setRace} />
                    :
                    <div className='content'>
                    <div className={`menu ${activeMenu && 'active'}`} onClick={()=>{
                        setActiveMenu(!activeMenu)
                    }}>
                    { activeMenu && <FontAwesomeIcon icon="fa-solid fa-xmark" />}
                    { !activeMenu && <FontAwesomeIcon icon="fa-solid fa-bars" />}
                    </div>
                       <div className={`content-sibar ${activeMenu && 'active'}`}>
                            <ul>

                                <li className={`${activeSlide === 'race' && 'active'}`}
                                    onClick={() => {
                                        setActiveSlide('race')
                                        setActiveMenu(!activeMenu)
                                    }}>
                                    <b></b>
                                    <b></b>
                                    <a href='#race'>
                                        <span>RACE RESULTS</span>
                                    </a>
                                </li>
                                <li className={`${activeSlide === 'fastestLaps' && 'active'}`}
                                    onClick={() => {
                                        setActiveSlide('fastestLaps')
                                        setActiveMenu(!activeMenu)
                                    }}>
                                    <b></b>
                                    <b></b>
                                    <a href='#fastestLaps'>
                                        <span> FASTEST LAPS</span>
                                    </a>

                                </li>
                                <li className={`${activeSlide === 'pitStop' && 'active'}`}
                                    onClick={() => {
                                        setActiveSlide('pitStop')
                                        setActiveMenu(!activeMenu)
                                    }}>
                                    <b></b>
                                    <b></b>
                                    <a href='#pitStop'>
                                        <span>PIT STOP SUMMARY</span>
                                    </a>
                                </li>
                                <li className={`${activeSlide === 'startingGrid' && 'active'}`}
                                    onClick={() => {
                                        setActiveSlide('startingGrid')
                                        setActiveMenu(!activeMenu)
                                    }}>
                                    <b></b>
                                    <b></b>
                                    <a href='#startingGrid'>
                                        <span>STARTING GRID</span>
                                    </a>
                                </li>
                                <li className={`${activeSlide === 'quantify' && 'active'}`}
                                    onClick={() => {
                                        setActiveSlide('quantify')
                                        setActiveMenu(!activeMenu)
                                    }}>
                                    <b></b>
                                    <b></b>
                                    <a href='#quantify'>
                                        <span>QUALIFYING</span>
                                    </a>
                                </li>
                                <li className={`${activeSlide === 'practive3' && 'active'}`}
                                    onClick={() => {
                                        setActiveSlide('practive3')
                                        setActiveMenu(!activeMenu)
                                    }}>
                                    <b></b>
                                    <b></b>
                                    <a href='#practive3'>
                                        <span>PRACTICE 3</span>
                                    </a>
                                </li>
                                <li className={`${activeSlide === 'practive2' && 'active'}`}
                                    onClick={() => {
                                        setActiveSlide('practive2')
                                        setActiveMenu(!activeMenu)
                                    }}>
                                    <b></b>
                                    <b></b>
                                    <a href='#practive2'>
                                        <span>PRACTICE 2</span>
                                    </a>
                                </li>
                                <li className={`${activeSlide === 'practive1' && 'active'}`}
                                    onClick={() => {
                                        setActiveSlide('practive1')
                                        setActiveMenu(!activeMenu)
                                    }}>
                                    <b></b>
                                    <b></b>
                                    <a href='#practive1'>
                                        <span>PRACTICE 1</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className='content-main'>
                            <div id='race' className='race'>
                            {
                                data.map((data)=>
                                    <RaceResultsCard isActive={activeCard === data.no}
                                    setActiveCard={setActiveCard}
                                    value={data.no}
                                    key={data.no}
                                    data={data}
                                ></RaceResultsCard>
                                )
                            }
                            </div>
                            <div id='fastestLaps' className='race' >
                               <Fastest></Fastest>
                            </div>
                            <div id='pitStop' className='race' >
                               <PitStop></PitStop>
                            </div>
                            <div id='startingGrid' className='race' >
                               <StartingGrid></StartingGrid>
                            </div>
                            <div id='quantify' className='race' >
                                <Quantify></Quantify>
                            </div>
                            <div id='practive3' className='race' >
                                <Practice practice={3}></Practice>
                            </div>
                            <div id='practive2' className='race' >
                            <Practice practice={2}></Practice>
                            </div>
                            <div id='practive1' className='race' >
                            <Practice practice={1}></Practice>
                            </div>
                        </div>
                    </div>
            }
        </>
        // 

    );
}

export default ContentDetail;