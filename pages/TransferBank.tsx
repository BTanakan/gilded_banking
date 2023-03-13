import React, { useEffect, useState } from 'react'
import Image from "next/image"
import Link from 'next/link'
import scb from '../public/scb.jpg'
import sri from '../public/krungsri.png'
import thai from '../public/krungthai.png'
import bank from '../public/kbank-icon.png'
import { initFirebase } from './firebase'
import { getAuth } from 'firebase/auth'
import { useRouter } from 'next/router'
import { useAuthState } from 'react-firebase-hooks/auth'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
function TransferBank() {
    initFirebase();
    const auth = getAuth();
    const router = useRouter();
    const [user, loading] = useAuthState(auth);

    const db = getFirestore(initFirebase()); //initalFirebase.
    const [users, setUsers] = useState<{ name: string, email: string, balance: string, bankno: string }[]>([]);
    const userCollectionRef = collection(db, "users"); //Cloud firebase collection.



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
        console.log("Hello");
        setShowDiv(!showDiv);

    }

    const [deposit, setdeposit] = useState("");

    function handleConfirm() {
        sessionStorage.setItem("reciveDeposit", deposit);
        router.push("/TransferMoney");
        console.log(deposit);
    }


    return (
        <div>
            <ul className="flex bg-gradient-to-b h-20 from-[#EB5F59] to-[#F6B552] justify-start py-8">
                <li className='px-5 flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#ffff]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                    <span className='text-[#ffff] font-bold'>Back</span>
                </li>



            </ul>
            <div className='py-5'></div>
           {users.map((u, index) => (
             <div className="overflow-hidden shadow-lg relative bg-gradient-to-b h-40 mx-5 my-1 rounded-2xl from-[#EB5F59] to-[#F6B552]">

             <div className="flex">
                 <div className="pl-4 py-5">
                     <svg className="w-6 h-6 mb-1 text-[#F6B552] white:text-[#F6B552] group-hover:text-[#F6B552] white:group-hover:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                         <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path>
                         <path clip-rule="evenodd" fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"></path>
                     </svg>
                 </div>
                 <div className="pl-4 py-4">

                     <div className=" text-[#ffff]">Deposit</div>
                     <div className=" text-[#ffff]">{u.bankno}</div>


                 </div>

             </div>

             <div className="text-end px-5 py-1  ">
                 <div className=" text-[#ffff] font-bold text-2xl">{u.balance}</div>
             </div>
             <div className='flex'>
                 <div className='px-5'>
                     <button>
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#ffff]">
                             <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                         </svg>

                     </button>
                 </div>
                 <div>
                     <p className='text-[#ffff] font-bold'>View more</p>
                 </div>
             </div>
         </div>
           ))}
            <div className='py-5'></div>
            <div className='px-10 flex justify-between'>

                <button>
                    <p className='font-bold text-lgS'>Bank account</p>
                    <div className="flex-grow border-t border-yellow-400"></div>
                </button>

                <Link href="/Bill">
                    <button>
                        <p className='font-bold text-lgS'>Bill payment</p>
                    </button>
                </Link>
                <button>
                    <p className='font-bold text-lgS'>History</p>
                </button>
            </div>

            <div className='px-10 py-5 flex justify-between'>
                <button className="w-12 h-12 bg-red-400 rounded-full" onClick={handleClick}>
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
                        src={bank}
                        alt=""
                        className="border-solid  border-2 rounded-full w-14 h-12"
                    >
                    </Image>
                </button>

            </div>
            <div className={showDiv ? '  mx-5 px-5 py-3' : 'hidden'}>
               
                <input type="text" onChange={(e) => setdeposit(e.target.value)} placeholder='xxx-xxxxx-x' className='text-lg'></input>
                <div className="flex justify-center">
                <button onClick={handleConfirm} className=" mt-10 text-xl shadow-md shadow-[#18274b40] rounded-lg py-2 px-10 w-80 text-white font-bold  bg-gradient-to-l from-[#F6B552] to-[#EB5F59]">Confirm</button>
                </div>
            </div>
        </div>
    )
}

export default TransferBank