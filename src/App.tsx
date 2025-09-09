import 'leaflet/dist/leaflet.css';
import './App.css'
import {MapContainer, Marker, TileLayer} from "react-leaflet";

function App() {

    return (
        <>
            <MapContainer
                center={[56.155554, 47.192863]}
                zoom={13}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
                [
                <Marker
                    position={[56.155518, 47.180890]}
                />
                <Marker
                    position={[56.155554, 47.192863]}
                />
                <Marker
                    position={[56.155632, 47.198775]}
                />
                ]
            </MapContainer>
        </>
    )
}

export default App
