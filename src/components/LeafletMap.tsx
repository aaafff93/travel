import {MapContainer, TileLayer} from "react-leaflet";
import type {ILeafletMapProps} from "../shared/types/types.ts";
import LeafletEvents from "./LeafletEvents.tsx";

const LeafletMap = ({
                        center = [56.155554, 47.192863],
                        zoom = 13,
                        children = []
                    }: ILeafletMapProps) => {
    return (
        <MapContainer
            center={center}
            zoom={zoom}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            {children}
            <LeafletEvents/>
        </MapContainer>
    );
};

export default LeafletMap;