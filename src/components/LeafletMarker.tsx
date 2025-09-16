import {Marker} from "react-leaflet";
import type {IMarkerProps} from "../shared/types.ts";

const LeafletMarker = ({position}: IMarkerProps) => {
    return (
        <Marker
            position={position}
        />
    );
};

export default LeafletMarker;