import { Routes } from "../../util";

const INITIAL_STATE = {
	routes: [],
};

export default function (state = INITIAL_STATE, action) {
	switch (action.type) {
		case "ROUTE":
			const { latitude, longitude, devid } = action.payload;
			const index = state.routes.findIndex(data => data.devid === devid);
			console.log("index", index);
			if (index !== -1) {
				state.routes[index].latitude = latitude;
				state.routes[index].longitude = longitude;
			} else {
				state.routes = [...state.routes, action.payload];
			}
			return { ...state };

		default:
			return state;
	}
}
