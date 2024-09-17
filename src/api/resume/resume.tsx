import axios from "axios";

export interface Inference {
    llm_response: string;
    context_sources: string[];
}

export async function getResumeInferenceWithSources(query: string): Promise<Inference> {
    try {
        const endpoint = "https://famyfunctionapp201420142015.azurewebsites.net/api/getresumeinference?code=RZ2AJ5p7wbPBVoD2R3ZNEPoYGL917GucxNHi_0KQwPsuAzFuPJJWNw%3D%3D";

        const response = await axios.post<Inference>(endpoint, {
            query: query  // Send the user's query
        }, {
            headers: {
                "Content-Type": "application/json"
            }
        });

        return response.data;  // Return both llm_response and context_sources
    } catch (error) {
        console.error("Error fetching inference:", error);
        return { llm_response: 'Error fetching response. Please try again.', context_sources: [] };
    }
}
