import axios from "axios";

export const Routes = [
	// {
	// 	id: 1,
	// 	devid: "4d872a60f3f17a6a02a27fa72d303a34",
	// 	color: "#26a69a",
	// 	lowBg: "#b2dfdb",
	// },
	{
		id: 2,
		devid: "182767c696a8c4886d5f83574c95c8da",
		color: "#ef5350",
		lowBg: "#ef9a9a",
	},
	// {
	// 	id: 3,
	// 	devid: "ab397cb9714119f4da80978a6bbb4025",
	// 	color: "#3f51b5",
	// 	lowBg: "#9fa8da",
	// },
];

export const Routes1Column = [
	{
		title: "trips",
		dataIndex: "trips",
		key: "trips",
	},
	{
		title: "departure stoppage",
		dataIndex: "departure_stoppage1",
		key: "departure stoppage",
	},
	{
		title: "departure time",
		dataIndex: "departure_time1",
		key: "departure time",
	},
	{
		title: "arrival stoppage",
		dataIndex: "arrival_stoppage1",
		key: "arrival stoppage",
	},
	{
		title: "arrival time",
		dataIndex: "arrival_time1",
		key: "arrival time",
	},
	{
		title: "departure time",
		dataIndex: "departure_time2",
		key: "departure time",
	},
	{
		title: "arrival stoppage",
		dataIndex: "arrival_stoppage2",
		key: "arrival stoppage",
	},
	{
		title: "arrival time",
		dataIndex: "arrival_time2",
		key: "arrival time",
	},
];

export const Routes1Table = [
	{
		trips: "1",
		departure_stoppage1: "pride plaza",
		departure_time1: "8:00AM",
		arrival_stoppage1: "Shapoorji",
		arrival_time1: "8:40AM",
		departure_time2: "8:00AM",
		arrival_stoppage2: "newtown bus stand",
		arrival_time2: "09:20AM",
	},
	{
		trips: "2",
		departure_stoppage1: "newtown bus stand",
		departure_time1: "9:20 AM",
		arrival_stoppage1: "Shapoorji",
		arrival_time1: "10:00 AM",
		departure_time2: "10:00 AM",
		arrival_stoppage2: "newtown bus stand",
		arrival_time2: "10:40 AM",
	},
	{
		trips: "3",
		departure_stoppage1: "newtown bus stand",
		departure_time1: "10:40 AM",
		arrival_stoppage1: "Shapoorji",
		arrival_time1: "11:20 AM",
		departure_time2: "11:20 AM",
		arrival_stoppage2: "pride plaza",
		arrival_time2: "12:00 PM",
	},
	{
		trips: "4",
		departure_stoppage1: "pride plaza",
		departure_time1: "5:00 PM",
		arrival_stoppage1: "Shapoorji",
		arrival_time1: "5:40 PM",
		departure_time2: "5:00 PM",
		arrival_stoppage2: "newtown bus stand",
		arrival_time2: "6:20 PM",
	},
	{
		trips: "5",
		departure_stoppage1: "newtown bus stand",
		departure_time1: "6:20 PM",
		arrival_stoppage1: "Shapoorji",
		arrival_time1: "7:00 PM",
		departure_time2: "7:00 PM",
		arrival_stoppage2: "pride plaza",
		arrival_time2: "7:40 PM",
	},
];

export const Routes2Column = [
	{
		title: "trips",
		dataIndex: "trips",
		key: "trips",
	},
	{
		title: "departure stoppage",
		dataIndex: "departure_stoppage1",
		key: "departure stoppage",
	},
	{
		title: "departure time",
		dataIndex: "departure_time1",
		key: "departure time",
	},

	{
		title: "arrival stoppage",
		dataIndex: "arrival_stoppage2",
		key: "arrival stoppage",
	},
	{
		title: "arrival time",
		dataIndex: "arrival_time2",
		key: "arrival time",
	},
];

export const Routes2Table = [
	{
		trips: "1",
		departure_stoppage1: "pride plaza",
		departure_time1: "8:00AM",
		arrival_stoppage2: "newtown bus stand",
		arrival_time2: "09:20AM",
	},
	{
		trips: "2",
		departure_stoppage1: "newtown bus stand",
		departure_time1: "9:20 AM",
		arrival_stoppage2: "newtown bus stand",
		arrival_time2: "10:40 AM",
	},
	{
		trips: "3",
		departure_stoppage1: "newtown bus stand",
		departure_time1: "10:40 AM",
		arrival_stoppage2: "pride plaza",
		arrival_time2: "12:00 PM",
	},
	{
		trips: "4",
		departure_stoppage1: "pride plaza",
		departure_time1: "5:00 PM",
		arrival_stoppage2: "newtown bus stand",
		arrival_time2: "6:20 PM",
	},
	{
		trips: "5",
		departure_stoppage1: "newtown bus stand",
		departure_time1: "6:20 PM",
		arrival_stoppage2: "pride plaza",
		arrival_time2: "7:40 PM",
	},
];
export const Routes4Column = [
	{
		title: "trips",
		dataIndex: "trips",
		key: "trips",
	},
	{
		title: "departure stoppage",
		dataIndex: "departure_stoppage1",
		key: "departure stoppage",
	},
	{
		title: "departure time",
		dataIndex: "departure_time1",
		key: "departure time",
	},
	{
		title: "arrival stoppage",
		dataIndex: "arrival_stoppage1",
		key: "arrival stoppage",
	},
	{
		title: "arrival time",
		dataIndex: "arrival_time1",
		key: "arrival time",
	},
	{
		title: "departure time",
		dataIndex: "departure_time2",
		key: "departure time",
	},
	{
		title: "half time",
		dataIndex: "half_time",
		key: "half time",
	},
	{
		title: "arrival stoppage",
		dataIndex: "arrival_stoppage2",
		key: "arrival stoppage",
	},
	{
		title: "arrival time",
		dataIndex: "arrival_time2",
		key: "arrival time",
	},
];
export const Routes4Table = [
	{
		trips: "1",
		departure_stoppage1: "Narkelbagan",
		departure_time1: "12:00 PM",
		arrival_stoppage1: "Coffee House",
		arrival_time1: "12:15 PM",
		departure_time2: "12:30 PM",
		half_time: "00:15:00",

		arrival_stoppage2: "Narkelbagan",
		arrival_time2: "12:45 PM",
	},
	{
		trips: "2",
		departure_stoppage1: "Narkelbagan",
		departure_time1: "1:00 PM",
		arrival_stoppage1: "Coffee House",
		arrival_time1: "1:15 PM",
		departure_time2: "1:30 PM",
		half_time: "00:15:00",

		arrival_stoppage2: "Narkelbagan",
		arrival_time2: "1:45 PM",
	},
	{
		trips: "3",
		departure_stoppage1: "Narkelbagan",
		departure_time1: "2:00 PM",
		arrival_stoppage1: "Coffee House",
		arrival_time1: "2:15 PM",
		departure_time2: "2:30 PM",
		half_time: "00:15:00",

		arrival_stoppage2: "Narkelbagan",
		arrival_time2: "2:45 PM",
	},
	{
		trips: "4",
		departure_stoppage1: "Narkelbagan",
		departure_time1: "3:00 PM",
		arrival_stoppage1: "Coffee House",
		arrival_time1: "3:15 PM",
		departure_time2: "3:30 PM",
		half_time: "00:15:00",

		arrival_stoppage2: "Narkelbagan",
		arrival_time2: "3:45 PM",
	},
	{
		trips: "5",
		departure_stoppage1: "Narkelbagan",
		departure_time1: "4:00 PM",
		arrival_stoppage1: "Coffee House",
		arrival_time1: "4:15 PM",
		departure_time2: "4:30 PM",
		half_time: "00:15:00",

		arrival_stoppage2: "Narkelbagan",
		arrival_time2: "4:45 PM",
	},
	{
		trips: "6",
		departure_stoppage1: "Narkelbagan",
		departure_time1: "5:00 PM",
		arrival_stoppage1: "Coffee House",
		arrival_time1: "5:15 PM",
		departure_time2: "5:30 PM",
		half_time: "00:15:00",

		arrival_stoppage2: "Narkelbagan",
		arrival_time2: "5:45 PM",
	},
	{
		trips: "7",
		departure_stoppage1: "Narkelbagan",
		departure_time1: "6:00 PM",
		arrival_stoppage1: "Coffee House",
		arrival_time1: "6:15 PM",
		departure_time2: "7:00 PM",
		half_time: "00:15:00",

		arrival_stoppage2: "Narkelbagan",
		arrival_time2: "7:15 PM",
	},
];

export const api = async (method, url, data) => {
	const httpMethod = method.toLowerCase();
	const hasData = ["post", "put", "patch"].indexOf(httpMethod) >= 0;
	try {
		const request = hasData
			? await axios[httpMethod](url, data ? data : {})
			: await axios[httpMethod](url);
		return request;
	} catch (err) {
		console.log("----", err.response);
	}
};
