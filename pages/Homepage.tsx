import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from "next/image"
import profile from '../public/zenitsu.jpg'
import Navbar from '@/component/navbar'
import transfer from '../public/Transfer.jpg'
import withdraw from '../public/withdraw.png'
import fav from '../public/fav.png'
import found from '../public/found.png'
import scan from '../public/scan.png'
import insec from '../public/insec.jpg'
import lot from '../public/lot.jpg'
import other from '../public/other.jpg'
import scb from '../public/scb.jpg'
import sri from '../public/krungsri.png'
import thai from '../public/krungthai.png'
import { Router, useRouter } from 'next/router'
import { initFirebase } from './firebase'
import { getAuth } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
function Homepage() {
    initFirebase();
    const auth = getAuth();
    const [user, loading] = useAuthState(auth);

    const db = getFirestore(initFirebase()); //initalFirebase.
    const [users, setUsers] = useState<{ name: string, email: string, balance: string, bankno: string }[]>([]);
    const userCollectionRef = collection(db, "users"); //Cloud firebase collection.

    const router = useRouter();

    if (loading) { // slpash screen.
        return <div className="">Loading...</div>
    }

    if (!user) { // check when user not authen.
        router.push("/");
        return <div className="">please sign in to continue.</div>
    }

    const getUserById = async () => {
        try {
            const email = await sessionStorage.getItem("Email");

            const userinfo = await getDocs(query(userCollectionRef, where('email', '==', email)));

            if (userinfo.empty) {
                throw new Error(`No user found`);
            }

            const userDoc = userinfo.docs[0];
            const userId = userDoc.data().userId;

            const userList: { name: string, email: string, balance: string, bankno: string }[] = [];
            userinfo.forEach(doc => {
                const his_data = doc.data();
                const { name, email, balance, bankno } = his_data;
                userList.push({ name, email, balance, bankno })
                console.log(his_data);
                console.log(doc.data().bankno);

            });
            setUsers(userList);
            // console.log(snapshot);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {

        getUserById();
    }, []);

    const [showDiv, setShowDiv] = useState(false);

    function handleClick() {

        setShowDiv(!showDiv);

    }
    return (
        <div>
            <div>
                <div className="overflow-hidden shadow-lg relative bg-gradient-to-b h-24 mx-5 my-5 rounded-2xl from-[#EB5F59] to-[#F6B552]">
                    <div className="shadow-md shadow-[#18274b40] bg-white flex  h-20 w-20 border-solid  border-2 rounded-full absolute top-3 left-5 ">
                        <Image
                            src={profile}
                            alt="Logo images"
                            className="border-solid  border-2 rounded-full w-full h-full"
                        >
                        </Image>

                    </div>
                    {users.map((u, index) => (
                        <div className="flex justify-between">
                            <div className="pl-28 py-4">
                                <div className=" text-[#ffff]">{u.name}</div>
                                <button onClick={handleClick} className={!showDiv ? "text-white font-bold text-center rounded-full bg-[#cca060] px-2" : "hidden"}>
                                    Show Balance
                                </button>

                                <button onClick={handleClick} className={showDiv ? "text-white font-bold text-center rounded-full bg-[#cca060] px-2" : "hidden"}>
                                    {u.balance}
                                </button>

                            </div>
                            <div className="flex px-4 py-4 justify-between">
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#ffff]"> <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" /> </svg>
                                </button>
                                <button onClick={() => auth.signOut()}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#ffff]">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                                    </svg>
                                </button>

                            </div>
                        </div>
                    ))}


                </div>

                <div className='px-10  flex justify-around gap-4 text-black text-center'>

                    <div className="w-20">
                        <button onClick={() => router.push("/TransferBank")} className="w-12 h-12 bg-red-400 rounded-full" >
                            <Image
                                src={transfer}
                                alt=""
                                className="border-solid  border-2 rounded-full w-14 h-12"
                            >
                            </Image>
                        </button>
                        <p className='text-black'>Transfer money</p>
                    </div>
                    <div className="border-2  w-20">
                        <button className="w-12 h-12 bg-white-400 rounded-full" >
                            <Image
                                src={withdraw}
                                alt=""
                                className="border-solid  border-2 rounded-full w-14 h-12"
                            >
                            </Image>
                        </button>
                        <p>Withdraw cash</p>
                    </div>
                    <div className="border-2  w-20">
                        <button className="w-12 h-12 bg-white-400 rounded-full">
                            <Image
                                src={fav}
                                alt=""
                                className="border-solid  border-2 rounded-full w-14 h-12"
                            >
                            </Image>
                        </button>
                        <p>Favorite</p>
                    </div>
                    <div className="border-2 w-20">
                        <button className="w-12 h-12 bg-white-400 rounded-full">
                            <Image
                                src={scan}
                                alt=""
                                className="border-solid  border-2 rounded-full w-14 h-12"
                            >
                            </Image>
                        </button>
                        <p>Scan to pay</p>
                    </div>

                </div>

                <div className='px-10 py-5 flex justify-around gap-4 text-center'>
                    <div className="w-20">
                        <button className="w-12 h-12 bg-white-400 rounded-full" ><Image
                            src={found}
                            alt=""
                            className="border-solid  border-2 rounded-full w-14 h-12"
                        >
                        </Image></button>
                        <p className='text-black'>Funds</p>
                    </div>
                    <div className="w-20">
                        <button className="w-12 h-12 bg-white-400 rounded-full" >
                        <Image
                            src={insec}
                            alt=""
                            className="border-solid  border-2 rounded-full w-14 h-12"
                        >
                        </Image>
                        </button>
                        <p>Insurance</p>
                    </div>
                    <div className="w-20">
                        <button className="w-12 h-12 bg-red-400 rounded-full">
                        <Image
                            src={lot}
                            alt=""
                            className="border-solid  border-2 rounded-full w-14 h-12"
                        >
                        </Image>
                        </button>
                        <p>Digital lottery</p>
                    </div>
                    <div className="w-20">
                        <button className="w-12 h-12 bg-red-400 rounded-full">
                        <Image
                            src={other}
                            alt=""
                            className="border-solid  border-2 rounded-full w-14 h-12"
                        >
                        </Image>
                        </button>
                        <p>Other menu</p>
                    </div>
                </div>

            </div>

            <div className="flex-grow mx-5 my-5 border-t border-gray-400"></div>
            <div className='mx-5'>
                <p>Favorite</p>
            </div>
            <div className='px-10 py-2 flex justify-between'>
                <button className="w-12 h-12 bg-red-400 rounded-full">
                    <Image
                        src={scb}
                        alt=""
                        className="border-solid  border-2 rounded-full w-14 h-12"
                    >
                    </Image>
                </button>
                <button className="w-12 h-12 bg-red-400 rounded-full">
                    <Image
                        src={sri}
                        alt=""
                        className="border-solid  border-2 rounded-full w-14 h-12"
                    >
                    </Image>
                </button>
                <button className="w-12 h-12 bg-red-400 rounded-full">
                    <Image
                        src={thai}
                        alt=""
                        className="border-solid  border-2 rounded-full w-14 h-12"
                    >
                    </Image>
                </button>
                <button className="w-12 h-12 bg-red-400 rounded-full">
                    <Image
                        src={other}
                        alt=""
                        className="border-solid  border-2 rounded-full w-14 h-12"
                    >
                    </Image>
                </button>

            </div>
            <div className="overflow-hidden shadow-lg relative bg-gradient-to-b h-24 mx-5 my-5 rounded-2xl from-[#EB5F59] to-[#F6B552]">




            </div>

            <div className="overflow-hidden shadow-lg relative bg-gradient-to-b h-24 mx-5 my-5 rounded-2xl from-[#EB5F59] to-[#F6B552]">




            </div>

            <Navbar />
        </div>

    )
}

export default Homepage