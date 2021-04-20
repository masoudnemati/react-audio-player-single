import { loadGetInitialProps } from "next/dist/next-server/lib/utils";
import React from "react";

const PlayerControls = (props) => {
  const playBtn = (
    <svg
      fill="white"
      width="50px"
      height="50px"
      version="1.1"
      viewBox="0 0 105.47 125.57"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(-46.393 -82.854)">
        <path
          d="m48.948 198.62c0.07703-30.15-1.236-80.411 0-107.59 1.236-27.175 101.11 43.787 100.89 57.573-0.21705 13.785-100.97 80.163-100.89 50.013z"
          stroke="#fff"
          stroke-opacity=".15337"
          stroke-width="4.0399"
        />
      </g>
    </svg>
  );

  const PauseBtn = (
    <svg
      fill="gray"
      width="50px"
      height="50px"
      version="1.1"
      viewBox="0 0 97.16 96.33"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        transform="translate(-65.315 -100.46)"
        stroke="#fff"
        stroke-opacity=".15337"
        stroke-width="4"
      >
        <rect x="67.315" y="102.46" width="41.317" height="92.33" />
        <rect x="119.16" y="102.46" width="41.317" height="92.33" />
      </g>
    </svg>
  );

  const forwardBtn = (
    <svg
      fill="gray"
      width="50px"
      height="50px"
      version="1.1"
      viewBox="0 0 143.1 94.413"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        transform="translate(-46.394 -101.16)"
        stroke="#fff"
        stroke-opacity=".15337"
        stroke-width="2.888"
      >
        <path d="m48.252 187.81c0.053-22.399-0.85023-59.738 0-79.927 0.85023-20.189 69.551 32.53 69.402 42.771-0.14931 10.241-69.455 59.554-69.402 37.155z" />
        <path d="m119.77 187.81c0.053-22.399-0.85023-59.738 0-79.927 0.85023-20.189 69.551 32.53 69.402 42.771-0.14931 10.241-69.455 59.554-69.402 37.155z" />
      </g>
    </svg>
  );

  const backwardBtn = (
    <svg
      fill="gray"
      width="50px"
      height="50px"
      version="1.1"
      viewBox="0 0 143.1 94.413"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        transform="translate(-46.394 -101.16)"
        stroke="#fff"
        stroke-opacity=".15337"
        stroke-width="2.888"
      >
        <path d="m188.8 187.81c-0.053-22.399 0.85023-59.738 0-79.927-0.85023-20.189-69.551 32.53-69.402 42.771 0.14931 10.241 69.455 59.554 69.402 37.155z" />
        <path d="m117.29 187.81c-0.053-22.399 0.85023-59.738 0-79.927-0.85023-20.189-69.551 32.53-69.402 42.771 0.14931 10.241 69.455 59.554 69.402 37.155z" />
      </g>
    </svg>
  );

  return (
    <div className="c-player--controls">
      <button className="skip-btn" onClick={() => props.SkipSong(false)}>
        {backwardBtn}
      </button>
      <button
        className="play-btn"
        onClick={() => props.setIsPlaying(!props.isPlaying)}
      >
        {props.isPlaying ? <span>{PauseBtn}</span> : <span>{playBtn}</span>}
      </button>
      <button className="skip-btn" onClick={() => props.SkipSong()}>
        {forwardBtn}
      </button>
    </div>
  );
};

export default PlayerControls;
1;
