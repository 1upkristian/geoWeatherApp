import { useState, useEffect } from "react";
import axios from 'axios'


const GetRestData = ({ input , clicked, setClicked}) => {
    const [weekData, setWeekData] = useState("")
    const [isDataAvaible2, setIsDataAvaible2] = useState(false)

    useEffect(() => {
        const fetchWeekData = async() => {
            if (clicked) {
            try {
            const apiKey2 = 'b894e19ea953aa008449737a832feeb6'
            let weekUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${input}&appid=${apiKey2}&units=metric`

            await axios
            .get(weekUrl)
            .then((res) => {
                setWeekData(res.data)
                setIsDataAvaible2(true)
                setClicked(false)
            })
        } catch (error) {
            console.log('error uudessta kompo0nentris')
        }
      }
     }
     fetchWeekData()
    },[clicked])

    const findDay1 = weekData?.list?.[8]?.dt_txt != null ? `${weekData.list[8].dt_txt}` : null /// paiva 1
    const toWeekDay1 = findDay1 ? new Date(findDay1).toLocaleDateString("fi-FI", { weekday: "short" }) : ''

    const findDay2 = weekData?.list?.[18]?.dt_txt != null ? `${weekData.list[18].dt_txt}` : null /// paiva 2
    const toWeekDay2 = findDay2 ? new Date(findDay2).toLocaleDateString("fi-FI", { weekday: "short" }) : ''

    const findDay3 = weekData?.list?.[26]?.dt_txt != null ? `${weekData.list[26].dt_txt}` : null /// paiva 
    const toWeekDay3 = findDay3 ? new Date(findDay3).toLocaleDateString("fi-FI", { weekday: "short" }) : ''
    
    const findDay4 = weekData?.list?.[34]?.dt_txt != null ? `${weekData.list[34].dt_txt}` : null /// paiva 4
    const toWeekDay4 = findDay4 ? new Date(findDay4).toLocaleDateString("fi-FI", { weekday: "short" }) : ''

    return (
        <div className="allDays">
            <div id="day1">
                {toWeekDay1}
                <h1> {weekData?.list?.[8]?.weather?.[0]?.main != null ? <WeatherIconDay1 weekData={weekData}/> : null} </h1>
                <h1> {weekData?.list?.[8]?.main?.temp != null ? `${Math.floor(weekData.list[8].main.temp)}°` : null} </h1>
            </div>

            <div id="day2">
                {toWeekDay2}
                <h1> {weekData?.list?.[18]?.weather?.[0]?.main != null ? <WeatherIconDay2 weekData={weekData}/> : null} </h1>
                <h1> {weekData?.list?.[18]?.main?.temp != null ? `${Math.floor(weekData.list[18].main.temp)}°` : null} </h1>
            </div>

            <div id="day3">
                {toWeekDay3}
                <h1> {weekData?.list?.[26]?.weather?.[0]?.main != null ? <WeatherIconDay3 weekData={weekData}/> : null} </h1>
                <h1> {weekData?.list?.[26]?.main?.temp != null ? `${Math.floor(weekData.list[26].main.temp)}°` : null} </h1>
            </div>

            <div id="day4">
                {toWeekDay4}
                <h1> {weekData?.list?.[34]?.weather?.[0]?.main != null ? <WeatherIconDay4 weekData={weekData}/> : null} </h1>
                <h1> {weekData?.list?.[34]?.main?.temp != null ? `${Math.floor(weekData.list[34].main.temp)}°` : null} </h1>
            </div>
        </div>
    )
    }

    const WeatherIconDay1 = ({ weekData }) => {

        const getIcon = () => {
            const iconForDay1 = weekData?.list?.[8]?.weather?.[0]?.main;

            let iconSrc = ""

            switch (iconForDay1) {
                case "Clouds":
                    iconSrc = "./src/images/Clouds.png";
                    break;
                case "Rain":
                    iconSrc = "./src/images/Rain.png";
                    break;
                case "Snow":
                    iconSrc = "./src/images/Snow.png";
                    break;
                case "Sunny":
                    iconSrc = "./src/images/Sunny.png";
                    break;
                case "Thunder":
                    iconSrc = "./src/images/Thunder.png";
                    break;
                  default:
                    iconSrc = "";
            }
            return iconSrc;
        }

        return (
            <div>
                <img src={getIcon()}/>
            </div>
        )
    }

    const WeatherIconDay2 = ({ weekData }) => {

        const getIcon = () => {
            const iconForDay2 = weekData?.list?.[16]?.weather?.[0]?.main;

            let iconSrc = ""

            switch (iconForDay2) {
                case "Clouds":
                    iconSrc = "./src/images/Clouds.png";
                    break;
                case "Rain":
                    iconSrc = "./src/images/Rain.png";
                    break;
                case "Snow":
                    iconSrc = "./src/images/Snow.png";
                    break;
                case "Sunny":
                    iconSrc = "./src/images/Sunny.png";
                    break;
                case "Thunder":
                    iconSrc = "./src/images/Thunder.png";
                    break;
                  default:
                    iconSrc = "";
            }
            return iconSrc;
        }

        return (
            <div>
                <img src={getIcon()}/>
            </div>
        )
    }

    const WeatherIconDay3 = ({ weekData }) => {

        const getIcon = () => {
            const iconForDay3 = weekData?.list?.[26]?.weather?.[0]?.main;

            let iconSrc = ""

            switch (iconForDay3) {
                case "Clouds":
                    iconSrc = "./src/images/Clouds.png";
                    break;
                case "Rain":
                    iconSrc = "./src/images/Rain.png";
                    break;
                case "Snow":
                    iconSrc = "./src/images/Snow.png";
                    break;
                case "Sunny":
                    iconSrc = "./src/images/Sunny.png";
                    break;
                case "Thunder":
                    iconSrc = "./src/images/Thunder.png";
                    break;
                  default:
                    iconSrc = "";
            }
            return iconSrc;
        }

        return (
            <div>
                <img src={getIcon()}/>
            </div>
        )
    }

    const WeatherIconDay4 = ({ weekData }) => {

        const getIcon = () => {
            const iconForDay4 = weekData?.list?.[34]?.weather?.[0]?.main;

            let iconSrc = ""

            switch (iconForDay4) {
                case "Clouds":
                    iconSrc = "./src/images/Clouds.png";
                    break;
                case "Rain":
                    iconSrc = "./src/images/Rain.png";
                    break;
                case "Snow":
                    iconSrc = "./src/images/Snow.png";
                    break;
                case "Sunny":
                    iconSrc = "./src/images/Sunny.png";
                    break;
                case "Thunder":
                    iconSrc = "./src/images/Thunder.png";
                    break;
                  default:
                    iconSrc = "";
            }
            return iconSrc;
        }

        return (
            <div>
                <img src={getIcon()}/>
            </div>
        )
    }

export default GetRestData
