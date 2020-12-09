import React, { useEffect, useState } from "react";
import { api, HttpMethods, EndPoints } from "../util";
import DirectionsBusIcon from "@material-ui/icons/DirectionsBus";
import { store } from "../redux/store";
import Moment from "moment";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Routes4Table, Routes1Table } from "../util";
import { Header, Table, Rating } from "semantic-ui-react";
import { Modal, Button } from "antd";

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
		if (res.data.status === "Success") {
			console.log(res.data);
			setState(res.data.data);
			store.dispatch({ type: "ROUTE", payload: res.data.data });
		}
	};

	useEffect(() => {
		apiCall();

		setInterval(() => {
			apiCall();
		}, 30000);
	}, [devid]);

	const [expanded, setExpanded] = React.useState(false);
	const [loading, setLoading] = React.useState(false);

	const handleOk = () => {
		setLoading(true);
		setTimeout(() => {
			setExpanded(false);
			setLoading(false);
		}, 3000);
	};

	const handleCancel = () => {
		setExpanded(false);
	};
	console.log(
		Moment(state?.updatedAt).format("lll"),
		Moment(state?.createdAt).format("lll"),
		"here iiiiiiiiii",

		Moment(state?.createdAt).startOf("hour").from(Moment(state.updatedAt)) // 14 minutes ago
	);
	return (
		<>
			<div className="justify-center items-center flex md:block">
				<div
					className="h-full -ml-2 text-xs font-medium p-2 m-2 text-gray-200 rounded-full md:rounded-lg bg-gray-500"
					style={{ fontSize: 10 }}
				>
					Updated{" "}
					{/* {Moment(state?.createdAt)
						.startOf("hour")
						.from(Moment(state.updatedAt))
						.replace("in", "")}{" "} */}
					{Moment(state.updatedAt).startOf("hour").fromNow()}
				</div>
				<div
					className="rounded-lg flex justify-center items-center p-1 mb-2 md:mb-4"
					style={{ background: lowBg }}
				>
					<div
						className="h-full p-2 md:p-4 -mt-2 -ml-2 rounded-l-lg font-bold"
						style={{ background: color }}
					>
						Route {id}
					</div>
					<div
						className="h-full p-2 md:p-4 -mt-2 flex justify-center items-center rounded-r-lg"
						style={{ background: color }}
					>
						<DirectionsBusIcon
							size={30}
							color="#fff"
							className="text-white text-9xl"
						/>
						<ExpandMoreIcon
							style={{ color: lowBg }}
							onClick={toggleDrawer("bottom", true)}
						/>
					</div>
				</div>
			</div>

			<Modal
				visible={expanded}
				title={`Route ${id}`}
				onOk={handleOk}
				onCancel={handleCancel}
				footer={null}
			>
				<Table celled padded>
					<Table.Header>
						<Table.Row>
							<Table.HeaderCell singleLine>Trips</Table.HeaderCell>
							<Table.HeaderCell>Departure Stoppage</Table.HeaderCell>
							<Table.HeaderCell>Dep. Time</Table.HeaderCell>
							{(id === 1 || id === 4) && (
								<>
									<Table.HeaderCell>Arrival Stoppage</Table.HeaderCell>
									<Table.HeaderCell>Arrival Time</Table.HeaderCell>
									<Table.HeaderCell>Dep. Time</Table.HeaderCell>
								</>
							)}
							{id === 4 && <Table.HeaderCell>Half Time</Table.HeaderCell>}
							<Table.HeaderCell>Arrival Stoppage</Table.HeaderCell>
							<Table.HeaderCell>Arrival time</Table.HeaderCell>
						</Table.Row>
					</Table.Header>
					{id === 4
						? Routes4Table.map(data => (
								<Table.Body>
									<Table.Row>
										<Table.Cell singleLine>{data.trips}</Table.Cell>
										<Table.Cell singleLine>
											{data.departure_stoppage1}
										</Table.Cell>
										<Table.Cell singleLine>{data.departure_time1}</Table.Cell>

										<Table.Cell singleLine>{data.arrival_stoppage1}</Table.Cell>
										<Table.Cell singleLine>{data.arrival_time1}</Table.Cell>
										<Table.Cell singleLine>{data.departure_time2}</Table.Cell>

										<Table.Cell singleLine>{data.half_time}</Table.Cell>

										<Table.Cell singleLine>{data.arrival_stoppage2}</Table.Cell>
										<Table.Cell singleLine>{data.arrival_time2}</Table.Cell>
									</Table.Row>
								</Table.Body>
						  ))
						: Routes1Table.map(data => (
								<Table.Body>
									<Table.Row>
										<Table.Cell singleLine>{data.trips}</Table.Cell>
										<Table.Cell singleLine>
											{data.departure_stoppage1}
										</Table.Cell>
										<Table.Cell singleLine>{data.departure_time1}</Table.Cell>
										{id === 1 && (
											<>
												<Table.Cell singleLine>
													{data.arrival_stoppage1}
												</Table.Cell>
												<Table.Cell singleLine>{data.arrival_time1}</Table.Cell>
												<Table.Cell singleLine>
													{data.departure_time2}
												</Table.Cell>
											</>
										)}
										<Table.Cell singleLine>{data.arrival_stoppage2}</Table.Cell>
										<Table.Cell singleLine>{data.arrival_time2}</Table.Cell>
									</Table.Row>
								</Table.Body>
						  ))}
				</Table>
			</Modal>

			<React.Fragment key={"bottom"}>
				<SwipeableDrawer
					anchor={"bottom"}
					open={state2["bottom"]}
					onClose={toggleDrawer("bottom", false)}
					onOpen={toggleDrawer("bottom", true)}
				>
					<Table celled padded>
						<Table.Header>
							<Table.Row>
								<Table.HeaderCell singleLine>Trips</Table.HeaderCell>
								<Table.HeaderCell>Departure Stoppage</Table.HeaderCell>
								<Table.HeaderCell>Dep. Time</Table.HeaderCell>
								{(id === 1 || id === 4) && (
									<>
										<Table.HeaderCell>Arrival Stoppage</Table.HeaderCell>
										<Table.HeaderCell>Arrival Time</Table.HeaderCell>
										<Table.HeaderCell>Dep. Time</Table.HeaderCell>
									</>
								)}
								{id === 4 && <Table.HeaderCell>Half Time</Table.HeaderCell>}
								<Table.HeaderCell>Arrival Stoppage</Table.HeaderCell>
								<Table.HeaderCell>Arrival time</Table.HeaderCell>
							</Table.Row>
						</Table.Header>
						{id === 4
							? Routes4Table.map(data => (
									<Table.Body>
										<Table.Row>
											<Table.Cell singleLine>{data.trips}</Table.Cell>
											<Table.Cell singleLine>
												{data.departure_stoppage1}
											</Table.Cell>
											<Table.Cell singleLine>{data.departure_time1}</Table.Cell>

											<Table.Cell singleLine>
												{data.arrival_stoppage1}
											</Table.Cell>
											<Table.Cell singleLine>{data.arrival_time1}</Table.Cell>
											<Table.Cell singleLine>{data.departure_time2}</Table.Cell>

											<Table.Cell singleLine>{data.half_time}</Table.Cell>

											<Table.Cell singleLine>
												{data.arrival_stoppage2}
											</Table.Cell>
											<Table.Cell singleLine>{data.arrival_time2}</Table.Cell>
										</Table.Row>
									</Table.Body>
							  ))
							: Routes1Table.map(data => (
									<Table.Body>
										<Table.Row>
											<Table.Cell singleLine>{data.trips}</Table.Cell>
											<Table.Cell singleLine>
												{data.departure_stoppage1}
											</Table.Cell>
											<Table.Cell singleLine>{data.departure_time1}</Table.Cell>
											{id === 1 && (
												<>
													<Table.Cell singleLine>
														{data.arrival_stoppage1}
													</Table.Cell>
													<Table.Cell singleLine>
														{data.arrival_time1}
													</Table.Cell>
													<Table.Cell singleLine>
														{data.departure_time2}
													</Table.Cell>
												</>
											)}
											<Table.Cell singleLine>
												{data.arrival_stoppage2}
											</Table.Cell>
											<Table.Cell singleLine>{data.arrival_time2}</Table.Cell>
										</Table.Row>
									</Table.Body>
							  ))}
					</Table>
				</SwipeableDrawer>
			</React.Fragment>
		</>
	);
}
