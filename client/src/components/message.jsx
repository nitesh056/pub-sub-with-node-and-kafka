import PropTypes from "prop-types";
import { convertTimestampToTime } from "../utils";

export default function Message({ phrase }) {
  return (
    <>
      <div className="message">
        <div>
          {phrase.message} {convertTimestampToTime(phrase.timestamp)}
        </div>
        <div>Priority: {phrase.priority}</div>
      </div>
    </>
  );
}

Message.propTypes = {
  phrase: PropTypes.shape({
    message: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    priority: PropTypes.number.isRequired,
  }),
};
