import {Databases, Query} from "appwrite";
import {client, collectionID, databaseID} from "../config";

const database = new Databases(client);

const getCommandCategories = async () => {
    try {
        return database.listDocuments(databaseID, '6591decba7d8e721378b');
    } catch (e) {
        console.error(e.message);
    }
};

const getCommandsByCategory = async (categoryId) => {
    try {
        return database.listDocuments(databaseID, collectionID, [
            Query.equal('commandCategories', categoryId)
        ]);
    } catch (e) {
        console.error(e.message);
    }
};

export {
    getCommandCategories,
    getCommandsByCategory
};