import { getAuth } from 'firebase/auth';
import { addDoc, collection, getDocs, getFirestore, query, updateDoc, where } from 'firebase/firestore';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { initFirebase } from './firebase';

function TransferBill() {
    initFirebase();
    const auth = getAuth();
    const router = useRouter();
    const [user, loading] = useAuthState(auth);
    const [users, setUsers] = useState<{ name: string, email: string, balance: string, bankno: string }[]>([]);

    const db = getFirestore(initFirebase()); //initalFirebase.
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

    

    const [reviceDeposit, setreviceDeposit] = useState("");
    const [amount, setamount] = useState("");
    const [date, setadate] = useState("");

    const getbillData = async () => {
        const reviceDeposit = await sessionStorage.getItem("reciveDeposit");
        setreviceDeposit(reviceDeposit!);
        const reviceAmount = await sessionStorage.getItem("Amount");
        const amountstr = Number(reviceAmount).toFixed(2);
        const date = await sessionStorage.getItem("Date");
        setadate(date!);
        setamount(amountstr!);
        console.log("reviceDeposit" + reviceDeposit);
    }
    const [friend, setFriend] = useState<{ name: string, email: string, balance: string, bankno: string }[]>([]);

    const getfriendById = async () => {
        try {
            const banknofriend = await sessionStorage.getItem("reciveDeposit");

            const userinfo = await getDocs(query(userCollectionRef, where('bankno', '==', banknofriend)));

            if (userinfo.empty) {
                throw new Error(`No user found`);
            }

            const userDoc = userinfo.docs[0];
            const userId = userDoc.data().userId;

            const friendList: { name: string, email: string, balance: string, bankno: string }[] = [];
            userinfo.forEach(doc => {
                const his_data = doc.data();
                const { name, email, balance, bankno } = his_data;
                friendList.push({ name, email, balance, bankno })
                console.log(his_data);
                console.log(doc.data().bankno);

            });
            setFriend(friendList);
        } catch (error) {
            
        }
    }

    useEffect(() => {
        getUserById();
        getbillData();
        getfriendById();
    }, []);

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
            <div className='justify-center pt-8 flex'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

                <p className='font-bold text-xl text-green-400'>Transfer Success</p>
            </div>


            <div className='justify-center flex'>
                <div className=' text-center '>

                    <p className='test-xs text-[#d5d5d5]'>{date}</p>
                    <p className='test-xs text-[#d5d5d5]'>Referral code:222222222258452ddfwS</p>
                </div>


            </div>



            <div className=" justify-between flex px-5 py-5  ">
                <div>
                    <p className='text-[#F6B552] text-xl'>From</p>
                </div>
                {users.map((u, index) => (
                <div>
                    <div className=" font-bold">M.r {u.name}</div>
                    <div className="text-xs text-gray-500">{u.bankno}</div>
                </div>
                ))}


            </div>




            <div className="justify-between flex px-5 py-5  ">
                <div>
                    <p className='text-[#F6B552] text-xl'>To</p>
                </div>
                {friend.map((f, index) => (
                <div>
                    <div className="font-bold ">M.r {f.name}</div>
                    <div className="text-xs text-gray-500">{f.bankno}</div>
                </div>
                 ))}


            </div>

            <div className="flex-grow mx-5 my-5 border-t border-gray-400"></div>

            <div className=" justify-between flex px-5 py-5  ">
                <div>
                    <p className='text-[#F6B552] text-xl'>Amount</p>
                </div>
                <div>
                    <div className=" font-bold">{amount}</div>

                </div>


            </div>


            <div className="justify-between flex px-5 py-5  ">
                <div>
                    <p className='text-[#F6B552] text-xl'>Fee</p>
                </div>
                <div>
                    <div className="font-bold ">0.00</div>

                </div>


            </div>

            <div className='py-16'></div>
            <div className='text-center'>
                <button onClick={()=> router.push("/Homepage")} className=" text-xl shadow-md shadow-[#18274b40] rounded-lg py-2 px-10 w-80 text-white font-bold  bg-gradient-to-l from-[#F6B552] to-[#EB5F59]">Confirm</button>
            </div>

        </div>

    )
}

export default TransferBill