import axios from "axios";

export interface Inference {
    llm_response: string;
    context_sources: string[];
}

// Updated getResumeInference function
export async function getResumeInference(query: string): Promise<string> {
    try {
        const endpoint = "https://famyfunctionapp201420142015.azurewebsites.net/api/getresumeinference?code=RZ2AJ5p7wbPBVoD2R3ZNEPoYGL917GucxNHi_0KQwPsuAzFuPJJWNw%3D%3D";

        if (!endpoint) {
            throw new Error("Endpoint is not defined.");
        }
        
        const response = await axios.post<Inference>(endpoint, {
            query: query  // Send the user's query
        }, {
            headers: {
                "Content-Type": "application/json"
            }
        });

        return response.data.llm_response;  // Return the actual LLM response
    } catch (error) {
        console.error("Error fetching inference:", error);
        return 'Error fetching response. Please try again.';  // Return an error message
    }
}