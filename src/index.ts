import { init } from "./display.js";
import { updateUI } from "./helpers/updateUI.js";
import { connectBinance } from "./ws/binance.js";
import { getLatest } from "./api/bluelytics.js";

const main = async () => {
    const widgets = init();

    const latest = await getLatest();

    connectBinance((ticker) => {
        updateUI(widgets, ticker, latest);
    });
}

main();

