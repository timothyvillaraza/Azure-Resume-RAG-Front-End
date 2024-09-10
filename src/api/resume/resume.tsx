import axios from "axios";

export interface Inference {
    llm_response: string;
    context_sources: string[];
}

export function getResumeInference(query: string): Promise<Inference> {
    return axios.post<Inference>("http://localhost:5004/api/getresumeinference", {
        query: query  // Send the user's query
    }, {
        headers: {
            "Content-Type": "application/json"
        }
    }).then((response) => {
        return response.data;
    });
}
