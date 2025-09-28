import type {IMarkerDTO} from "../shared/types/types.ts";
import LeafletMarker from "../components/LeafletMarker.tsx";
import LeafletMap from "../components/LeafletMap.tsx";

const markersData: IMarkerDTO[] = [
    {
        id: 1,
        position: [56.155518, 47.180890],
        isVisited: true
    },
    {
        id: 2,
        position: [56.155488, 47.192287],
        isVisited: false
    },
    {
        id: 3,
        position: [56.155475, 47.199841],
        isVisited: true
    },
];

function buildMarkers(data: IMarkerDTO[]) {
    return data.map(({id, position, isVisited}) => (
        <LeafletMarker
            key={id}
            position={position}
            color={isVisited ? 'success' : 'danger'}>
        </LeafletMarker>
    ))
}

const MapView = () => {

    const markers = buildMarkers(markersData);

    return (
        <LeafletMap
            zoom={13}
            center={[56.155554, 47.192863]}>
            {markers}
        </LeafletMap>
    );
};

export default MapView;