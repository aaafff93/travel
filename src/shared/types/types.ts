import type {LatLngExpression} from "leaflet";
import type {ReactNode} from "react";
import type {FillColors} from "./theme.ts";

export type LatLng = [number, number];

export interface IMarkerDTO {
    id: number;
    position: LatLng;
    isVisited: boolean;
}

export interface IMarkerProps {
    position: LatLng;
    color?: FillColors;
}

export interface ILeafletMapProps {
    center?: LatLngExpression;
    zoom: number;
    children: ReactNode[];
}


export interface SvgIconProps {
    fill?: FillColors;
}