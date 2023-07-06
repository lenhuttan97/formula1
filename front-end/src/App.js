import logo from './app/img/f1_logo.svg';
import Filters from './app/component/Filters';
import './fontawesome';
import ContentDetail from './app/component/ContentDetail';

import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { onChangesearchCurrent } from './app/redux/mainSlice';

function App() {
  const { year, race, driver } = useSelector(state => state.data.search);
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(onChangesearchCurrent( { year, race, driver }));
  }, [race, year, race, driver])
  return (
    <div>
      <div className='container header'>
          <img src={logo} ></img>
      </div>
      <div className='container container-flud'>
      <Filters></Filters>
      <ContentDetail year = {year}  race={race}  driver = {driver }></ContentDetail>
     
      </div>
      <div className='container footer'>
          <div className='logo'>
          <img src={logo} ></img>
          </div>
          <div className='title'>
    <span>© 2003-2023 Formula One World Championship Limited</span>
          </div>
      </div>
    </div>
  );
}

export default App;
