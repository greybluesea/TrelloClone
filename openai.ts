import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  //  organization: "org-pbAaUpOFIRn4HE0TMQse5tDI",
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();

export default openai;
