import axios from "axios";

export const getVehicleList = data => dispatch => {
	axios
		.post("/get_vehicle_list", data)
		.then(res => {
			dispatch({ type: "VEHICLE_LIST", payload: res.data.data });
		})
		.catch(err => console.log(err));
};

export const availableBays = data => dispatch => {
	axios
		.post("/get_all_lot_details", data)
		.then(res => {
			dispatch({ type: "DETAILS", payload: res.data.data });
		})
		.catch(err => console.log(err));
};
export const getBookingListCurrent = data => dispatch => {
	axios
		.post("/get_booking_history", data)
		.then(res => {
			dispatch({ type: "BOOKING_LIST_CURRENT", payload: res.data.data });
			dispatch({ type: "current_booking", payload: false });

			if (res.data.data.length > 0) {
				dispatch({ type: "current_booking", payload: false });
			} else {
				dispatch({ type: "current_booking", payload: true });
			}
		})
		.catch(err => console.log(err));
};

export const getBookingListPast = data => dispatch => {
	axios
		.post("/get_booking_history", data)
		.then(res => {
			dispatch({ type: "BOOKING_LIST_PAST", payload: res.data.data });
			dispatch({ type: "past_booking", payload: false });

			if (res.data.data.length > 0) {
				dispatch({ type: "past_booking", payload: false });
			} else {
				dispatch({ type: "past_booking", payload: true });
			}
		})
		.catch(err => console.log(err));
};

export const change = data => dispatch => {
	dispatch({ type: "CHANGE", payload: data });
};
