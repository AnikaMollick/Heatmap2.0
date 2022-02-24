import React from 'react';
import { HeatMap } from './Heatmap';
import {useState,useEffect} from 'react';
import events from '../Events.json'
import HeatmapProps from './HeatmapProps';
import { Scrollbars } from 'react-custom-scrollbars';
function HeatmapExtract({ name, eventType, timestamp, rawData }) {
        const [heatmapData, setHeatmapData] = useState(rawData);
        const [timestampBackward, setTimestampBackward] = useState(0);
        const [timestampForward, setTimestampForward] = useState(0);
        const [isStaticHeatmap, setIsStaticHeatmap] = useState(true);
      
        const onClickHeatmapProps = (newData, eventTimestampBackward, eventTimestampForward) => {
          setHeatmapData(newData);
          setTimestampBackward(eventTimestampBackward);
          setTimestampForward(eventTimestampForward);
          setIsStaticHeatmap(true); // reset play button
        };
      
        return (
          <div className="clearfix">
            <div className="PlayButton"></div>
            <li className="list">
              <Scrollbars style={{ width: 250, height: 600, position: 'fixed' }}>
                {events.map((evnt, key) => {
                  return <HeatmapProps onClick={onClickHeatmapProps} key={key} name={evnt.name} timestamp={evnt.timestamp} />;
                })}
              </Scrollbars>
            </li>
            <div className="heatmap">
              <HeatMap
                data={heatmapData}
                isStatic={isStaticHeatmap}
                startTime={timestampBackward}
                endTime={timestampForward}
                onPlayingFinished={() => setIsStaticHeatmap(true)}
              ></HeatMap>
            </div>
            <button className="playButton" onClick={() => setIsStaticHeatmap(!isStaticHeatmap)}>
              {isStaticHeatmap ? 'Play' : 'Stop'}
            </button>
          </div>
        );
      }
      
      export default HeatmapExtract;
