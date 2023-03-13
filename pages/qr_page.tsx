import { getAuth } from 'firebase/auth';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { initFirebase } from './firebase';


export const qr_page = () => {
    initFirebase();
    const auth = getAuth();
    const router = useRouter();
    const [user, loading] = useAuthState(auth);

    const db = getFirestore(initFirebase()); //initalFirebase.
    const [users, setUsers] = useState<{ name: string, email: string, balance: string, bankno: string }[]>([]);
    const userCollectionRef = collection(db, "users"); //Cloud firebase collection.

    const [reviceDeposit, setreviceDeposit] = useState("");

    

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

    const getreviceDeposit = async () => {
        const reviceDeposit = "254-8-45698-1";
        setreviceDeposit(reviceDeposit!);
        console.log("reviceDeposit" + reviceDeposit);
    }
    useEffect(() => {

        getUserById();
        getreviceDeposit();

    }, []);

    const [amount, setamount] = useState("");

    const informationChecking = async () => {
        await sessionStorage.setItem("Amount", amount);
        console.log("reviceDeposit "+ reviceDeposit);
        
        await sessionStorage.removeItem("reviceDeposit");
        await sessionStorage.setItem("reviceDeposit", "126-8-56487-6");
        router.push("/TransferConfirm");
        console.log(amount);
    };

    if (loading) { // slpash screen.
        return <div className="">Loading...</div>
      }
    
      if (!user) { // check when user not authen.
        router.push("/");
        return <div className="">please sign in to continue.</div>
      }

  return (
    <div>
    <ul className="flex bg-gradient-to-b h-20 from-[#EB5F59] to-[#F6B552] justify-start py-8">
        <li className='px-5 flex'>
            <button onClick={() => router.push("/Balance")}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#ffff]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>

            <span className='text-[#ffff] font-bold'>Back</span>
        </li>



    </ul>
    <div className='text-center'>
        <p className='font-bold text-xl py-8'>Transfer</p>
    </div>

    <div className='justify-center flex'>
        <div className='flex py-5'>
            <p className='font-bold text-[#F6B552] text-lg '>From</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6  text-[#F6B552]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
        </div>


    </div>
    <div className="overflow-hidden shadow-lg relative bg-gradient-to-r h-30 mx-5 my-1 rounded-2xl from-[#EB5F59] to-[#F6CA83]">


        {users.map((u, index) => (
            <div className="justify-between flex px-5 py-5  ">
                <div>
                    <div className=" text-[#ffff]">Deposit</div>
                    <div className=" text-[#ffff]">{u.bankno}</div>
                </div>
                <div>
                    <div className=" text-[#ffff] font-bold text-2xl text-right">{u.balance}</div>
                    <div className=" text-[#ffff] pl-16 font-bold ">Account</div>
                </div>

            </div>
        ))}

    </div>
    <div className='justify-center flex'>
        <div className='flex py-5'>
            <p className='font-bold text-gray text-lg '>To</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
        </div>


    </div>

    <div className="overflow-hidden shadow-lg relative bg-[#E8E8E8] h-30 mx-5 my-1 rounded-2xl ">


        <div className="justify-between flex px-5 py-5  ">
            <div>
                <div className=" text-black">{reviceDeposit}</div>
                <div className=" text-black  font-bold">SCB</div>
            </div>


        </div>

    </div>
    <div className='justify-center flex'>
        <div className='flex py-5'>
            <p className='font-bold text-[#F6B552] text-lg '>Amount</p>

        </div>


    </div>

    <div className="relative z-0 w-full mb-6 group px-5">

        <input type="text" onChange={(e) => setamount(e.target.value)} className="block py-2.5 px-0 w-full text-center text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="0.0" required />

    </div>
    <div className='px-5'>

        <input type="text" id="small-input" className="block w-full p-2 text-gray-400 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 gray:bg-gray-700 gray:border-gray-600 gray:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder-[#F6B552] font-bold" placeholder="Recode" ></input>

    </div>
    <div className='py-5'></div>
    <div className='text-center'>
        <button onClick={informationChecking} className=" text-xl shadow-md shadow-[#18274b40] rounded-lg py-2 px-10 w-50 text-white font-bold  bg-[#EB5F59]">Information checking</button>
    </div>


</div>
  )
}

export default qr_page
