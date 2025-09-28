import {Marker} from "react-leaflet";
import type {IMarkerProps} from "../shared/types/types.ts";
import {divIcon} from "leaflet";
import SvgIcon from "./SvgIcon.tsx";
import {renderToString} from "react-dom/server";

/*const customIcon = new Icon({
    iconUrl: marker,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
})*/

const LeafletMarker = ({position, color = 'success'}: IMarkerProps) => {

    const icon = divIcon({
        html: renderToString(
            <SvgIcon fill={color}/>
        ),
        className: '',
        iconAnchor: [15, 30]
    });

    return (
        <Marker
            position={position}
            icon={icon}
        />
    );
};

export default LeafletMarker;