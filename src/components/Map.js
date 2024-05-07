
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query';
function Map() {
    // const [marker, setMarker] = useState([])

    const userData = useQuery({
        queryKey: ['users'],
        queryFn: () => {
            return fetch('https://disease.sh/v3/covid-19/countries').then(response => response.json());
        }

    });
    return (
        <MapContainer center={[50, 50]} zoom={3} scrollWheelZoom={true} >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {userData.isFetching && (
                <div>Fetching user data...</div>
            )}

            {userData.isError && (
                <div>{`Error get data!!!`}</div>
            )}
            {
                userData.data && userData.data.length > 0 && userData.data.map((country, index) => (
                    <Marker key={index} position={[country.countryInfo.lat, country.countryInfo.long]}>

                        <Popup>
                            <div>
                                <h1>{country.country}</h1>
                                <p>Active Cases: {country.active}</p>
                                <p>Recovered Cases: {country.recovered}</p>
                                <p>Death Cases: {country.deaths}</p>
                            </div>
                        </Popup>
                    </Marker>
                ))
            }
        </MapContainer>
    )
}

export default Map
