import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { UserData } from '../interface/map';

interface Props {
	data: UserData;
}

const Map = ({ data }: Props) => {
	const location: [number, number] = [data?.location.lat, data?.location.lng];

	return (
		<div>
			<MapContainer
				center={data ? location : [0, 0]}
				zoom={13}
				scrollWheelZoom={false}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				/>
				<Marker position={data ? location : [0, 0]}>
					<Popup>{data ? data.location.city : 'N/A'}</Popup>
				</Marker>
			</MapContainer>
		</div>
	);
};

export default Map;
