export function convertTimestampToTime(timestamp) {
  return new Date(timestamp).toLocaleTimeString([], { hour12: false });
}
