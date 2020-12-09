import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Routes } from "../util";
import Route from "../components/Route";
import { useSelector } from "react-redux";
import DirectionsBusIcon from "@material-ui/icons/DirectionsBus";

import GoogleMapReact from "google-map-react";

const checkDevid = devid => {
	switch (devid) {
		case "4d872a60f3f17a6a02a27fa72d303a34":
			return (
				<DirectionsBusIcon
					style={{ color: "#26a69a", width: 40, height: 40 }}
				/>
			);
		case "182767c696a8c4886d5f83574c95c8da":
			return (
				<DirectionsBusIcon
					style={{ color: "#ef5350", width: 40, height: 40 }}
				/>
			);
		case "ab397cb9714119f4da80978a6bbb4025":
			return (
				<DirectionsBusIcon
					style={{ color: "#3f51b5", width: 40, height: 40 }}
				/>
			);
		default:
			return (
				<DirectionsBusIcon
					style={{ color: "#3f51b5", width: 40, height: 40 }}
				/>
			);
	}
};

const AnyReactComponent = ({ text }) => {
	return <div>{checkDevid(text.devid)}</div>;
};

const CustomComponent = ({ children }) => {
	return <div className="w-full h-12">{children}</div>;
};

export default function Main() {
	const { routes } = useSelector(state => state.data);

	const center = {
		lat: 22.581848,
		lng: 88.461685,
	};
	return (
		<div className="w-full h-screen fixed p-3 md:p-0">
			<div className="p-1 shadow-2xl absolute top-3 left-3 bg-white z-10">
				<img
					src="https://4.bp.blogspot.com/-RWkehMAsGbw/V2wMIw2h5yI/AAAAAAAANrA/VVy86JR5bgwXBhJVMoTgBnDBzG0Q5tmYwCLcB/s1600/HIDCO%2BLOGO%2Bnew.jpg"
					className="w-40 h-16"
				/>
			</div>
			<div className="w-full h-3/4 md:h-screen rounded-2xl md:rounded-none overflow-hidden">
				<GoogleMapReact
					bootstrapURLKeys={{ key: "AIzaSyBJ-RKwTIsTWX_4eKsBN0bBUBBx8dP1-Ls" }}
					defaultCenter={center}
					defaultZoom={14}
				>
					<CustomComponent lat={22.596565} lng={88.4528395}>
						<img
							src="https://www.flaticon.com/svg/static/icons/svg/818/818268.svg"
							className="w-14 h-14"
						/>
						<p
							className="rounded-full font-bold p-2 md:p-4 absolute bg-green-700 text-gray-200 text-xs"
							style={{ fontSize: 10 }}
						>
							Coffee House
						</p>
					</CustomComponent>
					<CustomComponent lat={22.5825665} lng={88.4619895}>
						<img
							src="https://www.flaticon.com/svg/static/icons/svg/3696/3696652.svg"
							className="w-16 h-16"
						/>
						<div
							className="rounded-full font-bold absolute p-2 md:p-4 bg-blue-600 text-white text-xs"
							style={{ fontSize: 10 }}
						>
							NewTown Bus Stand
						</div>
					</CustomComponent>
					{routes.length > 0
						? routes.map((data, index) => (
								<AnyReactComponent
									lat={data.latitude}
									lng={data.longitude}
									text={data}
								/>
						  ))
						: null}
				</GoogleMapReact>
			</div>
			<div className="p-4 absolute bottom-2 right-2">
				{Routes.map(data => (
					<Route
						devid={data.devid}
						id={data.id}
						key={data.id}
						color={data.color}
						lowBg={data.lowBg}
					/>
				))}
			</div>
		</div>
	);
}
