import { createSlice } from '@reduxjs/toolkit'
// import data from '../../2023.json'
import { years, drivers, races, convertStringToTime, data } from './data'

const initialState = {
    search: {
        year: 2023,
        race: 'all',
        driver: ''
    },
    data: [],
    dataRace: [],
    fastest: [],
    pitStop:[],
    startingGrid:[],
    quantify:[],
    practice:[]

}

const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {

        onChangesearchCurrent(state, action) {
            const { year, race, driver } = action.payload;
            state.search.year = year
            state.search.race = race
            state.search.driver = driver
        },
        getRaceResults(state, action) {
            state.data = []
            const datas = data(action.payload.year);
            datas.forEach(objs => {
                if (objs.detail !== undefined) {
                    let winner = objs.detail.find(obj => {
                        return obj.pos === 1;
                    });
                    state.data.push(
                        {
                            "driver": winner.driver.substring(0, winner.driver.length - 4),
                            "grandPrix": objs.grandPrix,
                            "year": objs.year,
                            "car": winner.team,
                            "laps": winner.laps,
                            "time": winner.time
                        }
                    );

                }
            });
        },

        getResultsAllDriver(state, action) {
            state.dataRace = [];
            const datas = data(action.payload.year);
            if (action.payload.race !== 'all') {
                let grand = datas.find((obj) => {
                    return obj.grandPrix === action.payload.race;
                })
                if (grand === undefined) {
                    state.search.race = 'all'
                } else {
                    grand.detail.forEach((obj) => {
                        const name = obj.driver.substring(0, obj.driver.length - 4);
                        let national = drivers.find((ob) => {
                            return ob.name === name;
                        })
                        // let seconds = convertStringToTime()
                        state.dataRace.push(
                            {
                                no: obj.no,
                                pos: obj.pos,
                                driver: name,
                                team: obj.team,
                                img: national === undefined ? null : national.img,
                                national: national === undefined ? null : national.national.toLowerCase(),
                                laps: obj.laps,
                                time: obj.time,
                                staringGripTime: obj.staringGripTime,
                                quantityQ1: obj.quantity === undefined ? null : obj.quantity.q1,
                                quantityQ2: obj.quantity === undefined ? null : obj.quantity.q2,
                                quantityQ3: obj.quantity === undefined ? null : obj.quantity.q3,
                                pts: obj.pts,
                                fastest: obj.fastestLap.avgSpeed,
                                pitStop: obj.pitStop === undefined ? "" : obj.pitStop.total,
                            }
                        );
                    })
                }

            }

        },
        getResultsFastest(state, action) {
            state.fastest = [];
            const datas = data(action.payload.year);
            if (action.payload.race !== 'all') {
                let grand = datas.find((obj) => {
                    return obj.grandPrix === action.payload.race;
                })
                if (grand === undefined) {
                    state.search.race = 'all'
                } else {
                    grand.detail.forEach((obj) => {
                        const name = obj.driver.substring(0, obj.driver.length - 4);
                        let national = drivers.find((ob) => {
                            return ob.name === name;
                        })
                        // console.log(national)
                        // let seconds = convertStringToTime()
                        state.fastest.push(
                            {
                                no: obj.no,
                                pos: obj.pos,
                                driver: name,
                                team: obj.team,
                                fastest: obj.fastestLap,
                            }
                        );
                    })
                }
    
            }
        },
        getResultsPitStop(state, action) {
            state.pitStop = [];
            const datas = data(action.payload.year);
            if (action.payload.race !== 'all') {
                let grand = datas.find((obj) => {
                    return obj.grandPrix === action.payload.race;
                })
                if (grand === undefined) {
                    state.search.race = 'all'
                } else {
                    grand.detail.forEach((obj) => {
                        const name = obj.driver.substring(0, obj.driver.length - 4);
                        let national = drivers.find((ob) => {
                            return ob.name === name;
                        })
                        // console.log(national)
                        // let seconds = convertStringToTime()
                        state.pitStop.push(
                            {
                                no: obj.no,
                                pos: obj.pos,
                                driver: name,
                                team: obj.team,
                                pit: obj.pitStop,
                            }
                        );
                    })
                }
    
            }
        },
        getResultsStartingGrid(state, action) {
            state.startingGrid = [];
            const datas = data(action.payload.year);
            if (action.payload.race !== 'all') {
                let grand = datas.find((obj) => {
                    return obj.grandPrix === action.payload.race;
                })
                if (grand === undefined) {
                    state.search.race = 'all'
                } else {
                    grand.detail.forEach((obj) => {
                        const name = obj.driver.substring(0, obj.driver.length - 4);
                        let national = drivers.find((ob) => {
                            return ob.name === name;
                        })
                        // console.log(national)
                        // let seconds = convertStringToTime()
                        state.startingGrid.push(
                            {
                                no: obj.no,
                                pos: obj.pos,
                                driver: name,
                                team: obj.team,
                                startingGrid: obj.staringGripTime,
                            }
                        );
                    })
                }
    
            }
        },
        getResultsQuantify(state, action) {
            state.quantify = [];
            const datas = data(action.payload.year);
            if (action.payload.race !== 'all') {
                let grand = datas.find((obj) => {
                    return obj.grandPrix === action.payload.race;
                })
                if (grand === undefined) {
                    state.search.race = 'all'
                } else {
                    grand.detail.forEach((obj) => {
                        const name = obj.driver.substring(0, obj.driver.length - 4);
                        let national = drivers.find((ob) => {
                            return ob.name === name;
                        })
                        // console.log(national)
                        // let seconds = convertStringToTime()
                        state.quantify.push(
                            {
                                no: obj.no,
                                pos: obj.pos,
                                driver: name,
                                team: obj.team,
                                quantify: obj.quantity,
                            }
                        );
                    })
                }
    
            }
        },
        getResultsPractive(state, action) {
            state.practice = [];
            const datas = data(action.payload.year);
            if (action.payload.race !== 'all') {
                let grand = datas.find((obj) => {
                    return obj.grandPrix === action.payload.race;
                })
                if (grand === undefined) {
                    state.search.race = 'all'
                } else {
                    grand.detail.forEach((obj) => {
                        const name = obj.driver.substring(0, obj.driver.length - 4);
                        let national = drivers.find((ob) => {
                            return ob.name === name;
                        })
                        state.practice.push(
                            {
                                no: obj.no,
                                pos: obj.pos,
                                driver: name,
                                team: obj.team,
                                practive:{
                                    q1: obj.practice1,
                                    q2: obj.practice2,
                                    q3: obj.practice3
                                },
                            }
                        );
                    })
                }
    
            }
        }
    },
    
})

export const { onChangesearchCurrent, getRaceResults, getResultsAllDriver, getResultsFastest, getResultsPitStop, getResultsPractive, getResultsStartingGrid, getResultsQuantify} = mainSlice.actions;

export default mainSlice.reducer
