type CurrencySource = "Oficial" | "Blue";

export interface CurrencyRate {
    value_avg: number,
    value_sell: number,
    value_buy: number
}

export interface LatestResponse {
    oficial: CurrencyRate,
    blue: CurrencyRate,
    last_update: string
}

export interface EvolutionResponse {
    date: string,
    source: CurrencySource,
    value_sell: number,
    value_buy: number
}

export interface BinanceTicker {
    c: string,
    b: string,
    a: string,
    s: string
}