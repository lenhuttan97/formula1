import React, { useEffect, useState } from 'react';
import './css/Filters.css';
import '../../App.css';
import { drivers } from '../redux/data';




function FilterDriversAndTeams(props) {

    const [optionActive, setOptionActive] = useState(false);
    const [optionCurrentName, setOptionCurrentName] = useState(props.optionCurrentDrivers);


    const listItems = (datas) => datas.map((data) =>
        <li key={data.name}
            className={`${props.optionCurrentDrivers === data.name && "active"}`}
            onClick={() => {
                props.setOptionCurrenDrivers(data.name);
            }}
            onMouseOver={() => {
                setOptionCurrentName(data.name)
            }}
            onMouseLeave={() => {
                setOptionCurrentName(props.optionCurrentDrivers)
            }}
        >
            {data.name}
        </li>
    );

    const found = (datas) => datas.find(obj => {
        if (optionCurrentName !== "") {
            return obj.name === optionCurrentName;
        }
        return {
            "name": "all",
            "national": "VN",
            "img": "all.png"
        }

    });

    const backgrond = () => {
        return 'https://flagcdn.com/' + found(drivers).national.toLowerCase() + '.svg'

    }
    switch (props.type) {
        case 'drivers':
            return (
                <div className='option-filter-card'>
                    <div className='option-name'>
                        <ul>
                            {listItems(drivers)}
                        </ul>
                    </div>
                    <div className='option-card'>
                        <div className='option-flag'
                            style={{
                                backgroundImage: `url(${backgrond()})`
                            }}>
                        </div>
                        <div className='option-img'
                            style={{
                                backgroundImage: `url(${require('../img/dirvers/' + found(drivers).img)})`
                            }}>
                        </div>
                    </div>
                </div>
            );
        case 'teams':
            return (
                <div>
                    <span>
                        FilterTeams
                    </span>
                </div>
            );
        default:
            return;
    }

}

export default FilterDriversAndTeams;