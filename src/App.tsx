import 'leaflet/dist/leaflet.css';
import './index.css'
import LeafletMap from "./components/LeafletMap.tsx";
import LeafletMarker from "./components/LeafletMarker.tsx";
import type {IMarkerDTO} from "./shared/types.ts";

const markersData: IMarkerDTO[] = [
    {
        id: 1,
        position: [56.155518, 47.180890]
    },
    {
        id: 2,
        position: [56.155488, 47.192287]
    },
];

function buildMarkers(data: IMarkerDTO[]) {
    return data.map((marker) => (
        <LeafletMarker
            key={marker.id}
            position={marker.position}>
        </LeafletMarker>
    ))
}

function App() {

    const markers = buildMarkers(markersData);

    return (
        <>
            <LeafletMap
                zoom={13}
                center={[56.155554, 47.192863]}>
                {markers}
            </LeafletMap>
        </>
    )
}

export default App
