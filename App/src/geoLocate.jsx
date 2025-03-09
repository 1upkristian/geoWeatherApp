import { useState, useEffect} from "react"
import axios from "axios"
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const GetLocate = ({input, clicked, setClicked}) => {
    const [geoMap, setGeoMap] = useState("")
    const [isDataAvaible, setIsDataAvaible] = useState(false)
    const [mapInstance, setMapInstance] = useState(null)


    useEffect(() => {
        const fetchData = async() => {
            if (clicked) {
                try {

                    let url = `https://nominatim.openstreetmap.org/search?city=${input}&format=json`;
    
                   await axios
                    .get(url)
                    .then(res => {
                        setGeoMap(res.data)
                        setIsDataAvaible(true)
                        setClicked(false)
                    })
                    
                } catch (err) {
                    console.log("error")
                }
            }
        }
        fetchData()
    },[clicked])


    useEffect(() => {

        if (isDataAvaible) {

            let lat = geoMap?.[0]?.lat;
            let lon = geoMap?.[0]?.lon;

            if (!mapInstance) {
                const map = L.map("map", {
                    zoomControl: false,
                    attributionControl: false
                }).setView([lat, lon], 12)
                L.tileLayer(`https://api.maptiler.com/maps/dataviz-dark/256/{z}/{x}/{y}.png?key=API_KEY`).addTo(map)
                setMapInstance(map)
            } else {
                mapInstance.setView([lat, lon], 12)
            }
            
        }
    },[geoMap])

    return (
        <div id='map'></div>
    )
};

export default GetLocate
