import React from "react";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Routes } from "../util";
import Route from "../components/Route";
import Logo from "../assets/logo.jpg";
import NKDA from "../assets/nkda.png";

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
				// <DirectionsBusIcon
				// 	style={{ color: "#ef5350", width: 30, height: 30 }}
				// />
				<img
					src="https://www.flaticon.com/svg/static/icons/svg/1808/1808617.svg"
					style={{ color: "#ef5350", width: 40, height: 40 }}
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
		lat: routes.length > 0 ? routes[0].latitude : 22.581848,
		lng: routes.length > 0 ? routes[0].longitude : 88.461685,
	};

	return (
		<>
			<div
				className="flex justify-between items-center w-full shadow-sm"
				style={{ height: "15%" }}
			>
				<div className="bg-white z-10 w-1/4 p-1">
					<img src={Logo} className="w-40 h-10 md:h-14" alt="Logo" />
				</div>
				<div className="p-1 bg-white z-10 text-base lg:text-xl font-semibold  w-2/4 text-center">
					Newtown Bus Information
				</div>
				<div className="bg-white z-10 w-1/4 flex justify-end items-center p-1">
					<img src={NKDA} className="w-20 md:w-24 h-14" alt="Logo" />
				</div>
			</div>
			<div className="w-full fixed rounded-lg p-6" style={{ height: "78%" }}>
				<div className="w-full h-full rounded-xl overflow-hidden">
					<GoogleMapReact
						bootstrapURLKeys={{
							key: "AIzaSyBJ-RKwTIsTWX_4eKsBN0bBUBBx8dP1-Ls",
						}}
						center={center}
						defaultCenter={center}
						defaultZoom={14}
					>
						<CustomComponent lat={22.595943} lng={88.486535}>
							<img
								src="https://www.flaticon.com/svg/static/icons/svg/818/818268.svg"
								className="w-10 h-10"
								alt="coffee house"
							/>
							<p
								className="rounded-full font-bold whitespace-nowrap p-2 py-1 absolute bg-green-700 text-gray-200 text-xs"
								style={{ fontSize: 7, marginLeft: -15 }}
							>
								Coffee House
							</p>
						</CustomComponent>
						{/* <CustomComponent lat={22.5825665} lng={88.4619895}>
							<div
								className="rounded-full font-medium absolute p-2 mt-8 bg-blue-600 text-white text-xs z-0 text-center"
								style={{ fontSize: 10, width: 80 }}
							>
								NewTown Bus Depot
							</div>
						</CustomComponent> */}
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
			</div>
			<div
				className="p-4 absolute bottom-10 md:bottom-14 right-2"
				style={{ height: "7%" }}
			>
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
		</>
	);
}
