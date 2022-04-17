import React from 'react';
import Chart from './components/Chart';
const data = {
  "nodes": [
    {
      "id": "GW",
      "name": "GW"
    },
    {
      "id": "EXT210c78",
      "name": "EXT210c78"
    },
    {
      "id": "EXT26afbb",
      "name": "EXT26afbb"
    },
    {
      "id": "EXT26b0e2",
      "name": "EXT26b0e2"
    },
    {
      "id": "EXT26d770",
      "name": "EXT26d770"
    },
    {
      "id": "EXT27aaf1",
      "name": "EXT27aaf1"
    },
    {
      "id": "EXT27ab3c",
      "name": "EXT27ab3c"
    }
  ],
  "links": [
    {
      "source": "GW",
      "target": "EXT210c78",
      "RSSI": "-56",
      "TX": "1073",
      "RX": "491"
    },
    {
      "source": "GW",
      "target": "EXT26afbb",
      "RSSI": "-49",
      "TX": "1300",
      "RX": "1300"
    },
    {
      "source": "GW",
      "target": "EXT26b0e2",
      "RSSI": "-79",
      "TX": "624",
      "RX": "149"
    },
    {
      "source": "GW",
      "target": "EXT26d770",
      "RSSI": "-66",
      "TX": "829",
      "RX": "702"
    },
    {
      "source": "GW",
      "target": "EXT27aaf1",
      "RSSI": "-52",
      "TX": "1112",
      "RX": "442"
    },
    {
      "source": "GW",
      "target": "EXT27ab3c",
      "RSSI": "-55",
      "TX": "975",
      "RX": "393"
    },
    {
      "source": "EXT26d770",
      "target": "EXT26afbb",
      "RSSI": "-69",
      "TX": "612",
      "RX": "612"
    },
    {
      "source": "EXT26d770",
      "target": "EXT27aaf1",
      "RSSI": "-77",
      "TX": "425",
      "RX": "289"
    },
    {
      "source": "EXT26d770",
      "target": "EXT27ab3c",
      "RSSI": "-79",
      "TX": "348",
      "RX": "246"
    },
    {
      "source": "EXT27aaf1",
      "target": "EXT27ab3c",
      "RSSI": "-61",
      "TX": "972",
      "RX": "972"
    },
    {
      "source": "EXT26afbb",
      "target": "EXT27aaf1",
      "RSSI": "-56",
      "TX": "1026",
      "RX": "1026"
    },
    {
      "source": "EXT26afbb",
      "target": "EXT27ab3c",
      "RSSI": "-63",
      "TX": "1099",
      "RX": "1026"
    },
    {
      "source": "EXT210c78",
      "target": "EXT26afbb",
      "RSSI": "-68",
      "TX": "969",
      "RX": "816"
    },
    {
      "source": "EXT210c78",
      "target": "EXT26d770",
      "RSSI": "-66",
      "TX": "1050",
      "RX": "1050"
    },
    {
      "source": "EXT210c78",
      "target": "EXT27aaf1",
      "RSSI": "-74",
      "TX": "540",
      "RX": "540"
    },
    {
      "source": "EXT210c78",
      "target": "EXT27ab3c",
      "RSSI": "-67",
      "TX": "891",
      "RX": "891"
    },
    {
      "source": "EXT26b0e2",
      "target": "EXT210c78",
      "RSSI": "-65",
      "TX": "1361",
      "RX": "972"
    },
    {
      "source": "EXT26b0e2",
      "target": "EXT26afbb",
      "RSSI": "-83",
      "TX": "843",
      "RX": "54"
    },
    {
      "source": "EXT26b0e2",
      "target": "EXT26d770",
      "RSSI": "-60",
      "TX": "726",
      "RX": "726"
    },
    {
      "source": "EXT26b0e2",
      "target": "EXT27aaf1",
      "RSSI": "-83",
      "TX": "1531",
      "RX": "324"
    },
    {
      "source": "EXT26b0e2",
      "target": "EXT27ab3c",
      "RSSI": "-61",
      "TX": "540",
      "RX": "648"
    }
  ]
}

function App() {
  return (
    <div className="App">
      <Chart data={data} />
    </div>
  );
}

export default App;