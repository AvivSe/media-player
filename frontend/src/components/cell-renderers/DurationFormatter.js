import * as moment from "moment";

const DurationFormatter = ({ getValue }) => {
  const duration = moment.duration(getValue());

  if (duration.asHours() > 1) {
    return Math.floor(duration.asHours()) + moment.utc(duration.asMilliseconds()).format(":mm:ss");
  } else {
    return moment.utc(duration.asMilliseconds()).format("mm:ss");
  }
};
export default DurationFormatter;
