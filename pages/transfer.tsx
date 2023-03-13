import { getAuth } from 'firebase/auth';
import { addDoc, collection, doc, getDocs, getFirestore, query, updateDoc, where } from 'firebase/firestore';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { initFirebase } from './firebase';


export const transfer = () => {
    initFirebase();
    const auth = getAuth();
    const [user, loading] = useAuthState(auth);
    const router = useRouter();
    if (loading) { // slpash screen.
        return <div className="">Loading...</div>
    }

    if (!user) { // check when user not authen.
        router.push("/");
        return <div className="">please sign in to continue.</div>
    }

    //Transfer Methods.

    const [from2, setfrom2] = useState("");
    const [to, setto] = useState("");
    const [amount, setamount] = useState("");

    const [formData, setFormData] = useState({
        from2: "",
        to: "",
        amount: ""
    });

    const handlefrom = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log("handlefrom")
        setfrom2(event.target.value);
        setFormData({ ...formData, from2: event.target.value });
    };

    const handleto = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log("handleto")
        setto(event.target.value);
        setFormData({ ...formData, to: event.target.value });
    };

    const handleamount = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log("handleamount")
        setamount(event.target.value);
        setFormData({ ...formData, amount: event.target.value });
    };

    const handtransfer = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            console.log(user.email);
            console.log(to);
            console.log(amount);
           
            await addTransfer( user.email! ,to, { balance: amount})

        } catch (error) {
            console.error(error);
        }
    };
    const db = getFirestore(initFirebase()); //initalFirebase.

    const addTransfer = async (senderId :string , reciveId: string, dataToUpdate: {balance : string}) => {
        const userCollectionRef = collection(db, "users");
        const querySnapshot = await getDocs(query(userCollectionRef, where('email', '==', reciveId)));

        if (querySnapshot.empty) {
            throw new Error(`No user found with userId ${reciveId}`);
        }
       
        const reciveDoc = querySnapshot.docs[0];
        const tempbalance = Number(reciveDoc.data().balance) + Number(dataToUpdate.balance)
        const newBalance = tempbalance;

       

        // Update balance for recive.
        await updateDoc(reciveDoc.ref, {balance: newBalance});
        
        console.log("senderId" + senderId);
        // Update balance for sender.
        const userQuerySnapshot = await getDocs(query(userCollectionRef, where('email', '==', senderId)));

        if (userQuerySnapshot.empty) {
            throw new Error(`No user found with userId ${senderId}`);
        }
        const userDoc = userQuerySnapshot.docs[0];
        if(Number(userDoc.data().balance) < Number(dataToUpdate.balance)){
            throw new Error(`No Balacne`);
        }
        const usertempbalance = Number(userDoc.data().balance) - Number(dataToUpdate.balance)
        const usernewBalance = usertempbalance;

        await updateDoc(userDoc.ref, {balance: usernewBalance});
        console.log(`User ${reciveId} updated in Firestore`);

        const timestamp = new Date().toLocaleString();


        
        console.log(userDoc.data().userId);
        // Create History of transaction of sennder.
        await createHistory(timestamp, reciveDoc.data().userId, Number(dataToUpdate.balance), "transfer", userDoc.data().userId);

        // Create History of transaction of recive.
        await createHistory(timestamp, "" ,Number(dataToUpdate.balance), "recive", reciveDoc.data().userId)

        router.push("dashboard");
    }

    const createHistory = async (timestamp: string, transferTo: string, transfer_balance: number, type: string ,userId: string)  => {
        
        const histroyCollectionRef = collection(db, "history");
        await addDoc(histroyCollectionRef, { timestamp, transferTo, transfer_balance, type, userId });
    
        console.log(`Histroy ${userId} added to Firestore`);
      }


    return (
        <div className="bg-white h-screen">
            <div className="">
                Welcome transfer page {user.email}
            </div>
            <form onSubmit={handtransfer}>
                <div className="">
                    Transfer
                </div>
                <div className="">
                    <span>From</span>
                    <input
                        type="text"
                        onChange={handlefrom}
                        defaultValue="meliodas@gmail.com"
                        className="shadow-md shadow-[#18274b40] border rounded-full py-2 px-3 w-full placeholder-[#ACACAC] font-bold"
                        placeholder="From"
                    />
                </div>
                <div className="">
                    To
                    <input
                        type="text"
                        onChange={handleto}
                        className="shadow-md shadow-[#18274b40] border rounded-full py-2 px-3 w-full placeholder-[#ACACAC] font-bold"
                        placeholder="Transfer to"
                    />
                </div>
                <div className="">
                    Amount
                    <input
                        type="text"
                        onChange={handleamount}
                        className="shadow-md shadow-[#18274b40] border rounded-full py-2 px-3 w-full placeholder-[#ACACAC] font-bold"
                        placeholder="0.00"
                    />
                </div>
                <div className="">
                    <button
                        type="submit"
                        className="text-xl shadow-md shadow-[#18274b40] rounded-full py-2 px-4 w-full text-white font-bold bg-gradient-to-l from-[#F6B552] to-[#EB5F59]"
                    >
                        Transfer
                    </button>
                </div>
            </form>
            {/* <button>Add users</button> */}
        </div>
    )
}

export default transfer;