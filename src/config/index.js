import {Client} from "appwrite";
const collectionID = "6591de15548e965972c3";   // your collection ID
const databaseID="6591dab628065dd2dd4e"   // Your database ID
const client= new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // We set the endpoint, change this if your using another endpoint URL.
    .setProject('6591daa0a74bf7762fc1'); // Here replace 'ProjectID' with the project ID that you created in your appwrite installation.

export { client,collectionID,databaseID }; // Finally export the client to be used in projects.