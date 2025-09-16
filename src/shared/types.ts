import type {LatLngExpression} from "leaflet";
import type {ReactNode} from "react";

export type LatLng = [number, number];

export interface IMarkerDTO {
    id: number;
    position: LatLng;
}

export interface IMarkerProps {
    position: LatLng;
}

export interface ILeafletMapProps {
    center?: LatLngExpression;
    zoom: number;
    children: ReactNode[];
}