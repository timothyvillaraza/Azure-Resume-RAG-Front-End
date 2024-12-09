import axios from "axios";

export interface Inference {
    llm_response: string;
    context_sources: string[];
}

export async function getResumeInferenceWithSources(query: string): Promise<Inference> {
    try {
        const endpoint = "https://faresumerag.azurewebsites.net/api/getresumeinference?code=I6iPraMr3vMwhZJSG8fo9RNCRAVNPbRQycIymj6l0NxmAzFuegSpYg%3D%3D";

        if (!endpoint) {
            throw new Error("API endpoint is not defined in environment variables.");
        }

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
