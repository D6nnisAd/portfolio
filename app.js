import { db } from './firebase-init.js';
import { collection, getDocs, query, orderBy } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

/**
 * Fetches all projects from the 'projects' collection in Firestore,
 * ordered by the 'order' field.
 * @returns {Promise<Array<Object>>} A promise that resolves to an array of project objects.
 */
export async function fetchProjects() {
    try {
        const projectsCollection = collection(db, 'projects');
        const q = query(projectsCollection, orderBy('order', 'asc'));
        const querySnapshot = await getDocs(q);
        const projects = [];
        querySnapshot.forEach((doc) => {
            projects.push({ id: doc.id, ...doc.data() });
        });
        return projects;
    } catch (error) {
        console.error("Error fetching projects from Firestore: ", error);
        throw error; // Re-throw the error to be caught by the caller
    }
}
