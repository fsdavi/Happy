import Leaflet from 'leaflet'
import mapMarkerImg from '../images/map-marker.svg';

const mapIcon = Leaflet.icon({
    iconUrl: mapMarkerImg,
    iconSize: [48, 68],
    iconAnchor: [29, 68],
    popupAnchor: [10, -50]
})

export default mapIcon;