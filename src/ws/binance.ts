import WebSocket from "ws";

import type { BinanceTicker } from "../types.js";

export const connectBinance = (onData: (ticker: BinanceTicker) => void) => {
    const ws = new WebSocket('wss://stream.binance.com:9443/ws/usdtars@ticker');

    ws.on('open', () => {
        console.log('Connection stablished');
    })

    ws.on('message', (data) => {
        const raw =JSON.parse(data.toString());
        const ticker: BinanceTicker = {
            c: parseFloat(raw.c),
            b: parseFloat(raw.b),
            a: parseFloat(raw.a),
            s: raw.s
        }
        onData(ticker);
    })

    ws.on('close', () => {
        console.log('Connection closed');
    })

    ws.on('error', (err) => {
        console.error('Error:', err);
    })
}