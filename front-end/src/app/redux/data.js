import year2023 from './data/2023.json'
import year2022 from './data/2022.json'
import year2021 from './data/2021.json'
import year2020 from './data/2020.json'
import year2019 from './data/2019.json'
import year2018 from './data/2018.json'
import year2017 from './data/2017.json'
import year2016 from './data/2016.json'
import year2015 from './data/2015.json'
import year2014 from './data/2014.json'
import year2013 from './data/2013.json'
import year2012 from './data/2012.json'
import year2011 from './data/2011.json'
import year2010 from './data/2010.json'
import year2009 from './data/2009.json'
import year2008 from './data/2008.json'
import year2007 from './data/2007.json'


export const years = [2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007]

export const data = (year) => {
    switch (year) {
        case 2023:
            return year2023;
        case 2022:
            return year2022;
        case 2021:
            return year2021;
        case 2020:
            return year2020;
        case 2019:
            return year2019;
        case 2018:
            return year2018;
        case 2017:
            return year2017;
        case 2016:
            return year2016;
        case 2015:
            return year2015;
        case 2014:
            return year2014;
        case 2013:
            return year2013;
        case 2012:
            return year2012;
        case 2011:
            return year2011;
        case 2010:
            return year2010;
        case 2009:
            return year2009;
        case 2008:
            return year2008;
        case 2007:
            return year2007;
        default:
            return null;
    }

}
export const races = (year) => {
    let dat = data(year);
    let races = ['all'];
    dat.forEach(da => {
        if (da.detail !== undefined) {
            races.push(da.grandPrix);
        }

    });
    return races
}


export const drivers = [
    {
        "name": "all",
        "national": "VN",
        "img": "all.png"
    },
    {
        "name": "Max Verstappen",
        "national": "NE",
        "img": "max-verstappen-red-bull-racing-1.webp"
    },
    {
        "name": "Sergio Perez",
        "national": "ME",
        "img": "sergio-perez-red-bull-racing-1.webp"
    }
    ,
    {
        "name": "Fernando Alonso",
        "national": "ES",
        "img": "fernando-alonso-aston-martin-r-1.webp"
    },
    {
        "name": "Lewis Hamilton",
        "national": "GB",
        "img": "lewis-hamilton-mercedes-1.webp"
    },
    {
        "name": "Carlos Sainz",
        "national": "ES",
        "img": "carlos-sainz-ferrari-1.webp"
    },
    {
        "name": "George Russell",
        "national": "GB",
        "img": "george-russell-mercedes-1.webp"
    },
    {
        "name": "Charles Leclerc",
        "national": "MO",
        "img": "charles-leclerc-ferrari-1.webp"
    },
    {
        "name": "Lance Stroll",
        "national": "CA",
        "img": "lance-stroll-aston-martin-raci-1.webp"
    },
    {
        "name": "Esteban Ocon",
        "national": "FR",
        "img": "esteban-ocon-alpine-1.webp"
    },
    {
        "name": "Pierre Gasly",
        "national": "FR",
        "img": "pierre-gasly-alpine-1.webp"
    },
    {
        "name": "Lando Norris",
        "national": "GB",
        "img": "lando-norris-mclaren-1.webp"
    },
    {
        "name": "Alexander Albon",
        "national": "TH",
        "img": "alex-albon-williams-1.webp"
    },
    {
        "name": "Nico Hulkenberg",
        "national": "GE",
        "img": "nico-hulkenberg-haas-1.webp"
    },
    {
        "name": "Oscar Piastri",
        "national": "AU",
        "img": "oscar-piastri-mclaren-1.webp"
    },
    {
        "name": "Valtteri Bottas",
        "national": "FI",
        "img": "valtteri-bottas-alfa-romeo-1.webp"
    },
    {
        "name": "Zhou Guanyu",
        "national": "CH",
        "img": "zhou-guanyu-alfa-romeo-1.webp"
    },
    {
        "name": "Yuki Tsunoda",
        "national": "JP",
        "img": "yuki-tsunoda-alphatauri-1.webp"
    },
    {
        "name": "Kevin Magnussen",
        "national": "DE",
        "img": "kevin-magnussen-haas-1.webp"
    },
    {
        "name": "Nyck De Vries",
        "national": "NE",
        "img": "nyck-de-vries-alphatauri-1.webp"
    },
    {
        "name": "Logan Sargeant",
        "national": "US",
        "img": "logan-sargeant-williams-1.webp"
    }

];


export const convertTimeToString = (string) => {
    // var hms = '02:04:33';   // your input string
    var a = string.split(':');
    var seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);
    console.log(seconds);
    return seconds;

}

export const convertStringToTime = (string) => {
    const result = new Date(string * 1000).toISOString().slice(11, 19);
    return result;
}