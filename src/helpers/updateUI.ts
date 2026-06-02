import type { LatestResponse, BinanceTicker, Widgets } from "../types.js";

const usdtHistory: number[] = [];
const oficialHistory: number[] = [];
const blueHistory: number[] = [];
const timeLabels: string[] = [];

export const updateUI = (widgets: Widgets, ticker: BinanceTicker, latest: LatestResponse) => {

    usdtHistory.push(ticker.c);
    oficialHistory.push(latest.oficial.value_sell);
    blueHistory.push(latest.blue.value_sell);
    timeLabels.push(new Date().toLocaleTimeString());
    
    const { screen, chart, currentPrice, spread } = widgets;

    chart.setData([
        {
            title: 'USDT/ARS',
            x: timeLabels,
            y: usdtHistory
        },
        {
            title: 'Oficial',
            x: timeLabels,
            y: oficialHistory
        },
        {
            title: 'Blue',
            x: timeLabels,
            y: blueHistory
        }
    ]);

    screen.render();
}