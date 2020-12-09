export const logout = () => dispatch => {
	localStorage.clear();
	dispatch({ type: "LOGGEDIN", payload: false });
};
