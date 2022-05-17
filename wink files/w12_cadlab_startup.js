var winkVideoData = {
  dataVersion: 1,
  frameRate: 10,
  buttonFrameLength: 5,
  buttonFrameOffset: 2,
  frameStops: {
    "135": [
      { type: "gotoframe", rect: { x: 632, y: 427, width: 60, height: 24 }, target: 0 },
      { type: "gotoframe", rect: { x: 694, y: 429, width: 60, height: 24 }, target: 136 },
    ],
    "265": [
      { type: "gotoframe", rect: { x: 838, y: 515, width: 60, height: 24 }, target: 135 },
      { type: "gotoframe", rect: { x: 904, y: 516, width: 60, height: 24 }, target: 266 },
    ],
    "605": [
      { type: "gotoframe", rect: { x: 869, y: 525, width: 60, height: 24 }, target: 265 },
      { type: "gotoframe", rect: { x: 930, y: 524, width: 60, height: 24 }, target: 606 },
    ],
    "650": [
      { type: "gotoframe", rect: { x: 441, y: 298, width: 60, height: 24 }, target: 605 },
      { type: "gotoframe", rect: { x: 503, y: 298, width: 60, height: 24 }, target: 651 },
    ],
    "805": [
      { type: "gotoframe", rect: { x: 920, y: 347, width: 60, height: 24 }, target: 806 },
      { type: "gotoframe", rect: { x: 854, y: 347, width: 60, height: 24 }, target: 650 },
    ],
  },
};
