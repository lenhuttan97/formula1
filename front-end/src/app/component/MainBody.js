import React, { useEffect, useState } from 'react';
import Filters from './Filters';
import ContentDetail from './ContentDetail';
import { useSelector } from 'react-redux';

function MainBody(props) {
    const { year, race, driver } = useSelector(state => state.data.search)
    return (
        <div className='container'>
            <Filters
                // years={year}
                // race={race}
                // driver={driver}
                >
            </Filters>
            <ContentDetail
                race={race}
            ></ContentDetail>
        </div>
    );
}

export default MainBody;