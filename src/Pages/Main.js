import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Routes } from "../util";
import Route from "../components/Route";
import Logo from "../assets/logo.jpg";
import { useSelector } from "react-redux";
import DirectionsBusIcon from "@material-ui/icons/DirectionsBus";

import GoogleMapReact from "google-map-react";

const checkDevid = devid => {
	switch (devid) {
		case "4d872a60f3f17a6a02a27fa72d303a34":
			return (
				<DirectionsBusIcon
					style={{ color: "#26a69a", width: 30, height: 30 }}
				/>
			);
		case "182767c696a8c4886d5f83574c95c8da":
			return (
				<DirectionsBusIcon
					style={{ color: "#ef5350", width: 30, height: 30 }}
				/>
			);
		case "ab397cb9714119f4da80978a6bbb4025":
			return (
				<DirectionsBusIcon
					style={{ color: "#3f51b5", width: 30, height: 30 }}
				/>
			);
		default:
			return (
				<DirectionsBusIcon
					style={{ color: "#3f51b5", width: 30, height: 30 }}
				/>
			);
	}
};

const AnyReactComponent = ({ text }) => {
	return <div>{checkDevid(text.devid)}</div>;
};

const CustomComponent = ({ children }) => {
	return <>{children}</>;
};

export default function Main() {
	const { routes } = useSelector(state => state.data);

	const center = {
		lat: 22.581848,
		lng: 88.461685,
	};
	return (
		<div className="w-full h-screen fixed">
			<div className="p-1 shadow-2xl absolute top-3 left-3 bg-white z-10">
				<img src={Logo} className="w-40 h-14" />
			</div>
			<div className="w-full h-5/6">
				<GoogleMapReact
					bootstrapURLKeys={{ key: "AIzaSyBJ-RKwTIsTWX_4eKsBN0bBUBBx8dP1-Ls" }}
					defaultCenter={center}
					defaultZoom={14}
				>
					<CustomComponent lat={22.595943} lng={88.486535}>
						<img
							src="https://www.flaticon.com/svg/static/icons/svg/818/818268.svg"
							className="w-10 h-10"
						/>
						<p
							className="rounded-full font-bold whitespace-nowrap p-2 py-1 absolute bg-green-700 text-gray-200 text-xs"
							style={{ fontSize: 7, marginLeft: -15 }}
						>
							Coffee House
						</p>
					</CustomComponent>
					<CustomComponent
						lat={
							routes[0].latitude !== undefined ? routes[0].latitude : 22.5825665
						}
						lng={
							routes[0].longitude !== undefined
								? routes[0].longitude
								: 88.4619895
						}
					>
						<div
							className="rounded-full font-medium absolute p-2 mt-8 bg-blue-600 text-white text-xs z-0 text-center"
							style={{ fontSize: 10, width: 80 }}
						>
							NewTown Bus Depot
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
			<div className="p-4 absolute bottom-6 md:bottom-0 h-1/6 w-full flex justify-around items-center overflow-x-scroll md:overflow-hidden overflow-y-hidden">
				{Routes.map(data => (
					<Route
						devid={data.devid}
						id={data.id}
						key={data.id}
						color={data.color}
						lowBg={data.lowBg}
					/>
				))}
				{/* <img
					src="https://img.freepik.com/free-vector/bus-taxi-cyclist-driving-city-road-transport-bicycle-car-flat-vector-illustration-traffic-urban-lifestyle_74855-8261.jpg?size=626&ext=jpg"
					className="w-full h-full"
				/> */}
			</div>
		</div>
	);
}
