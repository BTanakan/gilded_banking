import React from 'react'
import { useRouter } from "next/router";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { getDatabase } from "firebase/database";
import { app, initFirebase } from "./firebase";
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, onSnapshot, query, QuerySnapshot, setDoc, Timestamp, where } from "firebase/firestore";
import { useEffect, useState } from "react";
function History() {
    initFirebase();
    const auth = getAuth();
    const router = useRouter();
    const [user, loading] = useAuthState(auth);
  
    const db = getFirestore(initFirebase()); //initalFirebase.
    const [users, setUsers] = useState<{ name: string, email: string, balance: string, bankno: string }[]>([]);
    const userCollectionRef = collection(db, "users"); //Cloud firebase collection.
  
  
    // Histroy
    const [history, sethistory] = useState<{ timestamp: string, transferTo: string, transfer_balance: string, type: string, userId: string }[]>([]);
    useEffect(()  =>  {
  
      //Fetch user methods.
      const getUsers = async () => {
        const data = await getDocs(userCollectionRef);
        const userList: { name: string, email: string, balance: string, bankno: string }[] = [];
        data.forEach(doc => {
          const user_data = doc.data();
          const { name, email, balance, bankno } = user_data;
          userList.push({ name, email, balance, bankno });
          //console.log(user_data);
        });
        setUsers(userList);
      };
  
      const getUserById = async () => {
        try {
          const email = user?.email;
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
  
      const getHistoryById = async () => {
        try {
          const email = user?.email;
        const user2 = await getDocs(query(userCollectionRef, where('email', '==', email)));
  
        if (user2.empty) {
          throw new Error(`No user found`);
        }
  
        const userDoc = user2.docs[0];
        const userId = userDoc.data().userId;
  
        const histroy = query(collection(db, "history"), where("userId", "==", userId));
        const snapshot = await getDocs(histroy);
  
        if (snapshot.empty) {
          throw new Error(`No histroy found`);
        }
  
        const hisList: { timestamp: string, transferTo: string, transfer_balance: string, type: string, userId: string }[] = [];
        snapshot.forEach(doc => {
          const his_data = doc.data();
          const { timestamp, transferTo, transfer_balance, type, userId } = his_data;
          const formattedTransferBalance = transfer_balance.toFixed(2);
          hisList.push({ timestamp, transferTo, transfer_balance: formattedTransferBalance, type, userId })
          console.log(his_data);
  
        });
        sethistory(hisList);
        // console.log(snapshot);
        } catch (error) {
          console.log(error);
        }
      };
  
  
      getUserById();
      getHistoryById();
      
    }, []);
  
  
    if (loading) { // slpash screen.
      return <div className="">Loading...</div>
    }
  
    if (!user) { // check when user not authen.
      router.push("/");
      return <div className="">please sign in to continue.</div>
    }
  
    //Write data method.
    const addUser = async (name: string, age: string) => {
      const useruserCollectionRef = collection(db, "users");
      await addDoc(userCollectionRef, { name, age });
  
      console.log(`User ${name} added to Firestore`);
    }

    const handleLinkClick = () => {
        router.push('/TransferBank');

    };
    return (
        <div>
            <ul className="flex bg-gradient-to-b h-20 from-[#EB5F59] to-[#F6B552] justify-start py-8">
                <li className='px-5 flex'>
                    <button onClick={() => router.push("/Homepage")}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#ffff]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>

                    </button>
                    <span className='text-[#ffff] font-bold'>Back</span>
                </li>



            </ul>
            <div className='py-5'></div>
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
                        <div className=" text-[#ffff]">xxx-xxxxxx-x</div>


                    </div>

                </div>

                <div className="text-end px-5 py-1  ">
                    <div className=" text-[#ffff] font-bold text-2xl">9,999,999.00</div>
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
            <div className='py-5'></div>
            <div className='px-10 flex justify-between'>

                <button onClick={() => router.push("/TransferBank")}>
                    <p className='font-bold text-lgS'>Bank account</p>

                </button>


                <button onClick={() => router.push("/Bill")}>
                    <p className='font-bold text-lgS'>Bill payment</p>

                </button>
                <button>
                    <p className='font-bold text-lgS'>History</p>
                    <div className="flex-grow border-t border-yellow-400"></div>
                </button>
            </div>
            <div className='py-5'></div>
            <div className=' px-10 bg-white  top-60 h-screen w-full'>


                {history.map((h, index) => (
                    <div className="border-b mb-5 border-black columns-2">
                        <div className="">
                            <p className="text-lg font-bold capitalize ">{h.type}</p>
                            <p className="text-xs">{h.transferTo == "" ? h.userId : h.transferTo}</p>
                        </div>
                        <div className="grid-rows-2 grid  justify-end">
                            <p className={`text-lg font-bold text-right ${h.type === 'transfer' ? 'text-red-600 ' : 'text-green-500'}`}>{h.transfer_balance}</p>
                            <p className=" text-xs">{h.timestamp}</p>
                        </div>

                    </div>
                ))}

                {/* <div className="border-b border-black columns-2">
          <div className="">
            <p className="text-lg font-bold">Transfer</p>
            <p className="text-xs">123-26544-2</p>
          </div>
          <div className="grid-rows-2 grid justify-end">
            <p className="text-lg font-bold">Balance</p>
            <p className=" text-xs">20/2/2563</p>
          </div>
        </div> */}

                {/* <div className="">
          <button onClick={() => auth.signOut()}>Sign Out</button>
        </div> */}
            </div>

        </div>

    )
}

export default History