import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const backgrond = (national) => {
   
    return 'https://flagcdn.com/' + national + '.svg'

}
function RaceResultsCard(props) {
    const [active, setActive] = useState(false);
    const driver = props.data;
    const driverImg = () =>{
        if(driver.img !== null){
            return driver.img;
        }
        return 'all.png'
    }
    return (
        <div className={`raceCard ${props.isActive && active && 'active'}`}
            onClick={() => {
                
                    setActive(!active);
                    props.setActiveCard(props.value);
            }}
        >
            <div className='raceCard-img'>
                <div className='img-effect'>
                    <img src={require('../img/dirvers/'+driverImg() )}></img>
                </div>
            </div>
            <div className='raceCard-detail'>
                <div className='infor'>
                    <div className='persion'>
                        <div className='name'>
                            <span>
                                {driver.driver}
                            </span>
                            <div className='number'>
                            <span>
                                {driver.no}
                            </span>
                            </div>
                            <div className='national'
                                style={{
                                    backgroundImage: `url(${backgrond( driver.national)})`,
                                    backgroundSize: 'cover'
                                }}>

                            </div>
                        </div>
                        <div className='teams'>
                            <span>
                               {driver.team}
                            </span>
                            <div className='car'>
                                <img src='https://cdn-5.motorsport.com/images/vcl/Q2jwVgYp/s3/img1337988873-3-3.png'
                                    style={{
                                        objectFit: 'cover',
                                        width: '100%'
                                    }}
                                    title='car'
                                />
                            </div>
                        </div>
                    </div>

                    <div className='position'>
                        <span>
                            #{driver.pos}
                        </span>
                    </div>

                </div>
                <div className='results'>
                    <ul>
                        <li> 
                        <FontAwesomeIcon icon="fa-solid fa-stopwatch" />
                        <span>
                           <label>time:</label>   {driver.time}
                        </span>
                        </li>
                        <li> 
                        <FontAwesomeIcon icon="fa-solid fa-road-barrier" />
                        <span>
                        <label>laps:</label>  {driver.laps}
                        </span>
                       </li>
                        <li> 
                        <FontAwesomeIcon icon="fa-solid fa-star" />
                        <span>
                            <label>pts:</label> {driver.pts}
                        </span>
                       </li>
                        <li> 
                        <FontAwesomeIcon icon="fa-solid fa-gauge-high" />
                        <span>
                            <label>fastest:</label>{driver.fastest}
                        </span>
                        </li>
                        <li>
                        <FontAwesomeIcon icon="fa-solid fa-road" />
                        <span>
                            <label>staring Grip Time:</label>
                            <label>SGT:</label> {driver.staringGripTime}
                        </span>
                        </li>
                        <li> 
                        <FontAwesomeIcon icon="fa-solid fa-gas-pump" />
                        <span>
                            <label>stop:</label> {driver.pitStop}
                        </span>
                       </li>
                        <li> 
                        <FontAwesomeIcon icon="fa-solid fa-q" />
                        <span>
                            <label>1:</label>{driver.quantityQ1}
                        </span>
                        </li>
                        <li> 
                        <FontAwesomeIcon icon="fa-solid fa-q" />
                        <span>
                            <label>2:</label>{driver.quantityQ2}
                        </span>
                        </li>
                        <li> 
                        <FontAwesomeIcon icon="fa-solid fa-q" />
                        <span>
                            <label>3:</label>{driver.quantityQ3}
                        </span>
                        </li>
                      
                    </ul>
                </div>
            </div>

        </div>
    );
}

export default RaceResultsCard;