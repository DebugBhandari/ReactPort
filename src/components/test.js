const OpenAI = require('openai');
const client = new OpenAI({
    apiKey: "<your_llamaapi_token>",
    baseUrl: "https://api.llama-api.com"
});

const response = client.chat.completions.create({
    model: "llama-13b-chat",
    messages: [
        { role: "system", content: "Assistant is a large language model trained by OpenAI." },
        { role: "user", content: "Who were the founders of Microsoft?" }
    ]
});
