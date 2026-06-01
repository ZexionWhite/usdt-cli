import WebSocket from "ws";

import type { BinanceTicker } from "../types.js";

const ws = new WebSocket('wss://stream.binance.com:9443/ws/usdtars@ticker');

ws.on('open', () => {
    console.log('Connection stablished');
})

ws.on('message', (data) => {
    const parsed = JSON.parse(data.toString());
    console.log(parsed);
})

ws.on('close', () => {
    console.log('Connection closed');
})

ws.on('error', (err) => {
    console.log(err);
})