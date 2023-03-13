import { getAuth } from 'firebase/auth';
import { addDoc, collection, getDocs, getFirestore, query, updateDoc, where } from 'firebase/firestore';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { initFirebase } from './firebase';


function TransferConfirm() {
    initFirebase();
    const auth = getAuth();
    const router = useRouter();
    const [user, loading] = useAuthState(auth);
    const [users, setUsers] = useState<{ name: string, email: string, balance: string, bankno: string }[]>([]);

    const [reviceDeposit, setreviceDeposit] = useState("");
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

    const [amount, setamount] = useState("");

    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");
    const [year, setyear] = useState("");
    const [hours, sethours] = useState("");
    const [minutes, setMinutes] = useState("");



    const getreviceDeposit = async () => {
        const now = new Date();
        const day = now.getDate();
        const month = now.toLocaleString('default', { month: 'short' });
        const year = now.getFullYear();
        const hours = now.getHours();
        const minutes = now.getMinutes();

        setDay(day.toString());
        setMonth(month.toString());
        setyear(year.toString());
        sethours(hours.toString());
        setMinutes(minutes.toString());

        console.log(`${day} ${month} ${year} ${hours}:${minutes}`);

        const reviceDeposit = await sessionStorage.getItem("reciveDeposit");
        const reviceAmount = await sessionStorage.getItem("Amount");
        const amountstr = Number(reviceAmount).toFixed(2);
        setamount(amountstr!);
        setreviceDeposit(reviceDeposit!);
        console.log("reviceDeposit" + reviceDeposit);
        console.log(new Date().getTime());
    }


    useEffect(() => {

        getUserById();
        getreviceDeposit();

    }, []);

    const addTransfer = async (senderId: string, reciveId: string, dataToUpdate: { balance: string }) => {
        const userCollectionRef = collection(db, "users");
        const querySnapshot = await getDocs(query(userCollectionRef, where('bankno', '==', reciveId)));

        if (querySnapshot.empty) {
            throw new Error(`No user found with userId ${reciveId}`);
        }

        const reciveDoc = querySnapshot.docs[0];
        const tempbalance = Number(reciveDoc.data().balance) + Number(dataToUpdate.balance)
        const newBalance = tempbalance;



        // Update balance for recive.
        await updateDoc(reciveDoc.ref, { balance: newBalance });

        console.log("senderId" + senderId);
        // Update balance for sender.
        const userQuerySnapshot = await getDocs(query(userCollectionRef, where('email', '==', senderId)));

        if (userQuerySnapshot.empty) {
            throw new Error(`No user found with userId ${senderId}`);
        }
        const userDoc = userQuerySnapshot.docs[0];
        if (Number(userDoc.data().balance) < Number(dataToUpdate.balance)) {
            throw new Error(`No Balacne`);
        }
        const usertempbalance = Number(userDoc.data().balance) - Number(dataToUpdate.balance)
        const usernewBalance = usertempbalance;

        await updateDoc(userDoc.ref, { balance: usernewBalance });
        console.log(`User ${reciveId} updated in Firestore`);

        const timestamp = new Date().toLocaleString();



        console.log(userDoc.data().userId);
        // Create History of transaction of sennder.
        await createHistory(timestamp, reciveDoc.data().userId, Number(dataToUpdate.balance), "transfer", userDoc.data().userId);

        // Create History of transaction of recive.
        await createHistory(timestamp, "", Number(dataToUpdate.balance), "recive", reciveDoc.data().userId)

        router.push("dashboard");
    }

    const createHistory = async (timestamp: string, transferTo: string, transfer_balance: number, type: string, userId: string) => {

        const histroyCollectionRef = collection(db, "history");
        await addDoc(histroyCollectionRef, { timestamp, transferTo, transfer_balance, type, userId });

        console.log(`Histroy ${userId} added to Firestore`);
    }

    const handtransfer = async () => {

        try {
            const email = await sessionStorage.getItem("Email");
            const amount = await sessionStorage.getItem("Amount");
            const to = await sessionStorage.getItem("reciveDeposit");

            await addTransfer(email!, to!, { balance: amount! })
        } catch (error) {
            console.error(error);
        }
    };


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
            <div className='text-center'>
                <p className='font-bold text-xl py-8'>Confirm Transaction</p>
            </div>


            <div className='justify-center flex'>
                <div className=' text-center  py-5 '>
                    <p className='font-bold  text-2xl '>{amount}</p>
                    <p className='test-xs text-[#d5d5d5]'>0.00 fee</p>
                    <p className='test-xs text-[#d5d5d5]'>{day} {month} {year}  {hours}:{minutes}</p>
                </div>


            </div>

            <div className="overflow-hidden shadow-lg relative bg-gradient-to-b h-30 mx-5 my-1 ">

                <div className=" flex-col px-5 py-5  ">
                    <div>
                        <p className='text-[#F6B552] text-xl font-bold'>From</p>
                    </div>
                    <div>
                        <div className=" ">Deposit</div>
                        {users.map((u, index) => (
                            <div className="">{u.bankno}</div>
                        ))}
                    </div>


                </div>

            </div>
            <div className='py-5'></div>
            <div className="overflow-hidden shadow-lg relative bg-gradient-to-b h-30 mx-5 my-1 ">

                <div className=" flex-col px-5 py-5  ">
                    <div>
                        <p className='text-[#F6B552]  text-xl font-bold'>To</p>
                    </div>
                    <div>
                        <div className=" ">Deposit</div>
                        <div className="">{reviceDeposit}</div>
                    </div>


                </div>

            </div>


            <div className='py-16'></div>
            <div className='text-center'>
                <button type="submit" onClick={handtransfer} className=" text-xl shadow-md shadow-[#18274b40] rounded-lg py-2 px-10 w-80 text-white font-bold  bg-gradient-to-l from-[#F6B552] to-[#EB5F59]">Confirm</button>
            </div>
        </div>
    )
}

export default TransferConfirm