import blessed from 'blessed';
import contrib from 'blessed-contrib';

export const init = () => {
    const screen = blessed.screen({smartCSR: true});

    const grid = new contrib.grid({rows: 12, cols: 12, screen: screen});

    const chart = grid.set(0, 0, 8, 8, contrib.line, {
        showLegend: true,
        label: 'USDT/ARS Evolution',
    });

    const currentPrice = grid.set(0, 8, 4, 4, blessed.box, {
        label: 'Current Price',
        content: 'Loading...',
        align: 'center',
        valign: 'middle',
        border: {
            type: 'line'
        },
    });

    const spread = grid.set(4, 8, 4, 4, blessed.box, {
        label: 'Spread',
        content: 'Loading...',
        align: 'center',
        valign: 'middle',
        border: {
            type: 'line'
        },
    });

    const asciiArt = grid.set(8, 0, 4, 8, blessed.box, {
        label: 'ASCII Art',
        content: `
        Some ASCII Art will spawn soon... maybe...    
        `,
        align: 'center',
        valign: 'middle',
    });

    screen.key(['escape', 'q', 'C-c'], function(ch, key) {
        return process.exit(0);
    });

    screen.render();

    return { screen, chart, currentPrice, spread, asciiArt };
}