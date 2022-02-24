import React, { useEffect, useState } from 'react'
import playerPositions from '../player-postions.json';
import { filterData } from "./logic";
import events from '../Events.json'
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
const HeatmapProps = ({ name, timestamp, onClick }) => {
  let [filter, setFiletr] = useState();
  const [active, setActive] = useState(events[0]);
  const history = useHistory();
  const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;
const ButtonToggle = styled(Button)`
  opacity: 0.6;
  ${({ active }) =>
    active &&
    `
    opacity: 1;
  `}
`;
const ButtonGroup = styled.div`
  display: flex;
`;
  useEffect(() => {
    return history.listen((location) => {
      filter = setFiletr(`${location.pathname}`);
    });
  }, [history]);
  const eventTime_TenSecForawrd = timestamp * 1000000000 + 10000000000;
  const eventTime_TenSecBackawrd = timestamp * 1000000000 - 10000000000;
  const eventTime = timestamp / 60;
  var hour = Math.floor(eventTime);
  var decpart = eventTime - hour;
  var min = 1 / 60;
  decpart = min * Math.round(decpart / min);
  var minute = Math.floor(decpart * 60) + '';
  // Concate hours and minutes
  const time = hour + ':' + minute;

  const Fullheatmap = (detectedObject) => {
    return (
      detectedObject.timestamp_ns > eventTime_TenSecBackawrd && detectedObject.timestamp_ns <= eventTime_TenSecForawrd
    );
  };

  const ballEventFilter = (detectedObject) => {
    return (
      detectedObject.type === 'ball' &&
      detectedObject.timestamp_ns > eventTime_TenSecBackawrd &&
      detectedObject.timestamp_ns <= eventTime_TenSecForawrd
    );
  };

  const TeamAFilter = (detectedObject) => {
    return (
      detectedObject.type === 'player' &&
      detectedObject.team === '0' &&
      detectedObject.timestamp_ns > eventTime_TenSecBackawrd &&
      detectedObject.timestamp_ns <= eventTime_TenSecForawrd
    );
  };

  const TeamBFilter = (detectedObject) => {
     return (
      detectedObject.type === 'player' &&
      detectedObject.team === '1' &&
      detectedObject.timestamp_ns > eventTime_TenSecBackawrd &&
      detectedObject.timestamp_ns <= eventTime_TenSecForawrd
     )
  };

  return (
    <div className="Button">
       
    <p
        className="current"
        onClick={() => {
          const newData = filterData(
            playerPositions,
            filter === '/Home'
              ? Fullheatmap
              : filter === '/Ball'
              ? ballEventFilter
              : filter === '/TeamA'
              ? TeamAFilter
              : TeamBFilter
          );
          onClick(newData, eventTime_TenSecBackawrd, eventTime_TenSecForawrd);
        }}
      >
        {name}
      </p>
      <p>{time}</p>
    </div>
  );
};
export default HeatmapProps;