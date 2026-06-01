import axios from "axios";

import type { LatestResponse, EvolutionResponse } from "../types.js";

const BASE_URL = "https://api.bluelytics.com.ar/v2"

export const getLatest = async (): Promise<LatestResponse> => {
    try {
        const response = await axios.get<LatestResponse>(`${BASE_URL}/latest`);
        return response.data
    } catch (err) {
        console.error('Error at trying to get response of the API');
        process.exit(1);
    }
}

export const getEvolution = async (day: number): Promise<EvolutionResponse> => {
    try {
        const response = await axios.get<EvolutionResponse>(`${BASE_URL}/evolution.JSON?days=${day}`)
        return response.data
    } catch (err) {
        console.error('Error at trying to get response of the API');
        process.exit(1);
    }
}