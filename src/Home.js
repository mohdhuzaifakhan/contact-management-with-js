import React from 'react'
import SearchBar from './components/SearchBar'
import { collection, doc, getDocs, deleteDoc } from "firebase/firestore";
import { db } from "./firebase/dbConfig";
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// import { getData, increment } from './redux/userData'

function Home() {

    const [open, setOpen] = useState(false)
    const [searchKey, setSearchKey] = useState("")
    const [searchResults, setSearchResults] = useState([])
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetchData()
    }, [])


    useEffect(() => {
        setUsers(searchResults)
    }, [searchResults])

    async function fetchData() {
        const querySnapshot = await getDocs(collection(db, "users"));
        const users = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setUsers(users);
        // console.log(users);
        return users
    }

    async function deleteUser(id) {
        try {

            await deleteDoc(doc(db, "users", id));
            setUsers(users.filter((user) => user.id !== id));
            // console.log(`Document with ID ${id} deleted.`);
            // window.location.reload();
        } catch (error) {
            console.error("Error deleting document: ", error);
        }
    }
    return (
        <>

            <div className='font-serif w-full mt-16 mb-4 px-4 sm:px-6 lg:px-8'>
                <div className='lg:flex justify-between items-center'>
                    <div className='w-full mb-4 lg:mb-0'>
                        <h1 className='font-serif text-3xl lg:text-4xl text-center lg:text-left'>All Contacts</h1>
                    </div>
                    <div className='flex w-full items-center justify-end lg:w-auto'>
                        <div className='w-full lg:w-auto'>
                            <SearchBar searchKey={searchKey} setSearchKey={setSearchKey} users={users} searchResults={searchResults} setSearchResults={setSearchResults} />
                        </div>
                        <div className='ml-2'>
                            <Link to={"/create-contact"}>
                                <button className='bg-blue-900 hover:bg-blue-700 text-sm text-white py-2 px-4 rounded'>
                                    Create
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='font-serif w-full my-4 px-4 sm:px-6 lg:px-8'>
                <div className='overflow-x-auto'>
                    <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
                        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                            <tr>
                                <th scope='col' className='px-6 py-3'>First Name</th>
                                <th scope='col' className='px-6 py-3'>Last Name</th>
                                <th scope='col' className='px-6 py-3'>Status</th>
                                <th scope='col' className='px-6 py-3'>Edit</th>
                                <th scope='col' className='px-6 py-3'>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user) => {
                                    return (
                                        <tr key={user.id} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                                            <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                                                {user.firstName}
                                            </th>
                                            <td className='px-6 py-4'>{user.lastName}</td>
                                            <td className='px-6 py-4'>{user.status}</td>
                                            <td className='px-6 py-4'>
                                                <Link to={`/user/${user.id}`}>
                                                    <button className='bg-blue-900 hover:bg-blue-700 text-sm text-white py-2 px-4 rounded'>
                                                        Edit
                                                    </button>
                                                </Link>
                                            </td>
                                            <td className='px-6 py-4'>
                                                <button className='bg-red-700 hover:bg-blue-700 text-white text-sm py-2 px-4 rounded'
                                                    onClick={() => { deleteUser(user.id) }}
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Home
