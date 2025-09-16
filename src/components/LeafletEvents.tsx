//const map = useMapEvents({});
import {useMapEvents} from 'react-leaflet';

const LeafletEvents = () => {

    const map = useMapEvents({
        click(e) {
            console.log('zoom: ' + map.getZoom() + ' ' + e.latlng);
        }
    });

    return null;
};

export default LeafletEvents;