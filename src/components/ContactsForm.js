import React, { useState } from 'react';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/dbConfig";

const ContactsForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [status, setStatus] = useState('Active');

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(firstName, lastName, status)
        try {
            const docRef = await addDoc(collection(db, "users"), {
                firstName: firstName.trim().toLowerCase(), lastName: lastName.trim().toLowerCase(), status: status.trim().toLowerCase()
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
        // onAddContact({ firstName, lastName, status });
        setFirstName('');
        setLastName('');
        setStatus('Active');
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <form onSubmit={handleSubmit} className="w-full max-w-md bg-white rounded-lg shadow-sm p-8">
                <h2 className="text-2xl font-bold mb-4 text-center">Add Contact</h2>
                <div className="mb-4">
                    <label htmlFor="firstname" className="block text-gray-700 font-bold mb-2">
                        First Name
                    </label>
                    <input
                        type="text"
                        id="firstname"
                        value={firstName}
                        onChange={(event) => setFirstName(event.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter firstname"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="lastName" className="block text-gray-700 font-bold mb-2">
                        Last Name
                    </label>
                    <input
                        type="text"
                        id="lastName"
                        value={lastName}
                        onChange={(event) => setLastName(event.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter lastname"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="status" className="block text-gray-700 font-bold mb-2">
                        Status
                    </label>
                    <div className="flex items-center">
                        <div className="flex items-center mr-4">
                            <input
                                type="radio"
                                id="active"
                                name="status"
                                value="Active"
                                checked={status === 'Active'}
                                onChange={() => setStatus('Active')}
                                className="w-4 h-4 text-blue-600 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                                required
                            />
                            <label htmlFor="active" className="block ml-2 text-sm font-medium text-gray-700">
                                Active
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="radio"
                                id="inactive"
                                name="status"
                                value="Inactive"
                                checked={status === 'Inactive'}
                                onChange={() => setStatus('Inactive')}
                                className="w-4 h-4 text-blue-600 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                                required
                            />
                            <label htmlFor="inactive" className="block ml-2 text-sm font-medium text-gray-700">
                                Inactive
                            </label>
                        </div>
                    </div>
                </div>
                <button type="submit" className="w-full py-2 px-4 bg-blue-500 rounded-md text-white hover:bg-blue-600 focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                    Add Contact
                </button>
            </form>
        </div>
    );
};

export default ContactsForm
