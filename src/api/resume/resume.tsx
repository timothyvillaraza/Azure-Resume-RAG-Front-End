import axios from "axios";

interface Inference {
    llm_response: string;
    context_sources: string[];
}

export function getResumeInference(): Promise<Inference> {
    return axios.post<Inference>("http://localhost:5004/api/getresumeinference", {
        query: "What are Tim's strengths?"
    }, {
        headers: {
            "Content-Type": "application/json"
        }
    }).then((response) => {
        return response.data;
    });
}