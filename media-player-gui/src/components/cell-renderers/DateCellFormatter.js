import moment from "moment";

export const DateCellFormatter = ({ getValue }) => moment(getValue()).format('MM/DD/YYYY HH:mm');

