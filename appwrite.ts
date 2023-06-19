import { Client, ID, Account, Databases, Storage } from "appwrite";

const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(process.env.TRELLO_CLONE_PROJECT_ID!);

const account = new Account(client);
const databases = new Databases(client);
const storage = new Storage(client);

export { client, ID, account, databases, storage };
