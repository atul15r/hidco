import React, { useEffect, useState } from "react";
import { api, HttpMethods, EndPoints } from "../util";
import DirectionsBusIcon from "@material-ui/icons/DirectionsBus";
import { store } from "../redux/store";
import Moment from "moment";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import {
	Routes4Table,
	Routes1Table,
	Routes2Column,
	Routes2Table,
	Routes1Column,
	Routes4Column,
} from "../util";
import { Table } from "antd";

import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

const useStyles = makeStyles({
	list: {
		width: 250,
	},
	fullList: {
		width: "auto",
	},
});

export default function Route({ devid, id, color, lowBg }) {
	const [state, setState] = useState({});
	const classes = useStyles();
	const [state2, setState2] = React.useState({
		top: false,
		left: false,
		bottom: false,
		right: false,
	});

	const toggleDrawer = (anchor, open) => event => {
		if (
			event &&
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}

		setState2({ ...state, [anchor]: open });
	};

	const apiCall = async () => {
		const res = await api(HttpMethods.POST, EndPoints.URL, { devid });
		if (res?.data.status === "Success") {
			console.log(res.data);
			setState(res.data.data);
			store.dispatch({ type: "ROUTE", payload: res.data.data });
		}
	};

	useEffect(() => {
		apiCall();

		setInterval(() => {
			apiCall();
		}, 10000);
	}, [devid]);

	const [expanded, setExpanded] = React.useState(false);
	const [loading, setLoading] = React.useState(false);

	console.log(
		Moment(state?.updatedAt).format(),
		Moment(state?.createdAt).format(),
		Moment(state.createdAt).startOf("hour").fromNow()
	);

	function getTimeDiff(createdAt) {
		var now = Moment(new Date()); //todays date
		var end = Moment(createdAt); // another date
		var duration = Moment.duration(now.diff(end));
		var mins = duration.asMinutes();
		return mins;
	}

	return (
		<>
			<div className="flex">
				<div
					className="h-full text-xs font-medium p-2 text-gray-500 rounded-lg bg-gray-200 whitespace-nowrap"
					style={{ fontSize: 10, margin: 10 }}
				>
					Updated{" "}
					{330 - Math.abs(getTimeDiff(state.createdAt)) < 1
						? Math.floor(330 - Math.abs(getTimeDiff(state.createdAt))) < 1
							? null
							: Math.floor(330 - Math.abs(getTimeDiff(state.createdAt)))
						: Math.floor(330 - Math.abs(getTimeDiff(state.createdAt))) > 60
						? Math.floor(
								Math.floor(330 - Math.abs(getTimeDiff(state.createdAt))) / 60
						  )
						: Math.floor(330 - Math.abs(getTimeDiff(state.createdAt)))}
					{330 - Math.abs(getTimeDiff(state.createdAt)) < 1
						? Math.floor(330 - Math.abs(getTimeDiff(state.createdAt))) < 1
							? "few sec ago"
							: " sec ago"
						: Math.floor(330 - Math.abs(getTimeDiff(state.createdAt))) > 60
						? " hr ago"
						: " min ago"}
				</div>
				<div
					className="rounded-lg flex justify-center items-center p-1 mb-2 md:mb-4 cursor-pointer shadow-lg"
					style={{ background: lowBg }}
					onClick={toggleDrawer("bottom", true)}
				>
					<div
						className="h-full p-4  -ml-2 rounded-l-lg font-bold w-40 text-base whitespace-nowrap"
						style={{ background: color }}
					>
						<LocationOnIcon style={{ color: "#fff" }} />{" "}
						{id === 1 ? "Shapoorji" : id == 2 ? "Coffee House" : `Route ${id}`}
					</div>
					<div
						className="h-full p-4   flex justify-center items-center rounded-r-lg"
						style={{ background: color }}
					>
						<DirectionsBusIcon color="#fff" className="text-white text-xs" />
						<ExpandMoreIcon style={{ color: lowBg }} />
					</div>
				</div>
			</div>
{/* 
			<React.Fragment key={"bottom"}>
				<SwipeableDrawer
					anchor={"bottom"}
					open={state2["bottom"]}
					onClose={toggleDrawer("bottom", false)}
					onOpen={toggleDrawer("bottom", true)}
				>
					{id === 2 ? (
						<Table dataSource={Routes4Table} columns={Routes4Column} />
					) : id === 3 ? (
						<Table dataSource={Routes2Table} columns={Routes2Column} />
					) : (
						<Table dataSource={Routes1Table} columns={Routes1Column} />
					)}
				</SwipeableDrawer>
			</React.Fragment> */}
		</>
	);
}
