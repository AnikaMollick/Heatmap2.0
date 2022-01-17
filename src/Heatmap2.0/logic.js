import events from '../Heatmap/Events.json';

//Determine the HalfTime
const HalfTimeDetection = events
  .filter((timeFrame) => [13, 14].includes(timeFrame.eventType))
  .map((timeFrame) => timeFrame.timestamp);
//Tansform nano sec to sec
export const endOfFirstHalf = HalfTimeDetection[0] * 1000000000;
export const startOfSecondHalf = HalfTimeDetection[1] * 1000000000;

export const filterData = (detectedObjects, filterFn) => {
  
  //Detect the values of x and y axis
  const coords = detectedObjects
    .filter(filterFn)
    .map((ball) => ({ x: ball.top_view_position[0], y: ball.top_view_position[1] }));

  //Number of appearances for each combination of  x & y asix
  const values = {};
  for (let data of coords) {
    if (!values[data.x + '-' + data.y]) values[data.x + '-' + data.y] = 0;
    values[data.x + '-' + data.y] = +1;
  }
  //Detect the max value
  const objectLenght = Object.keys(values).length;

  const width = 1000;
  const height = 600;
  //Determining max value accordinh to the number of data fpr each catagory
  var max = objectLenght > 100000 ? 80 : objectLenght > 10000 ? 50 : 20;
  let min = 0;

  for (let element of coords) {
    const key = element.x + '-' + element.y;
    const value = values[key];
    element.value = value;
  }
  // heatmap data format, contains values for x,y & value
  let elements = coords.map((elm) => ({ x: Math.floor(elm.x * width), y: Math.floor(elm.y * height), value: 1 }));

  //Initializes a heatmap instance with a dataset. "min", "max", and "data" properties are required.
  return {
    data: elements,
    min,
    max,
  };
};

export const ball1stHalfFilter = (detectedObject) => {
  return detectedObject.type === 'ball' && detectedObject.timestamp_ns <= endOfFirstHalf;
};

export const ball2ndHalfFilter = (detectedObject) => {
  return detectedObject.type === 'ball' && detectedObject.timestamp_ns >= startOfSecondHalf;
};