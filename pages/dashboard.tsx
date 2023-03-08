import { getAuth } from "firebase/auth";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { getDatabase } from "firebase/database";
import { app, initFirebase } from "./firebase";
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, onSnapshot, query, QuerySnapshot, setDoc, Timestamp, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "@/component/navbar";


const DashboardPage = () => {
  initFirebase();
  const auth = getAuth();
  const router = useRouter();
  const [user, loading] = useAuthState(auth);

  const db = getFirestore(initFirebase()); //initalFirebase.
  const [users, setUsers] = useState<{ name: string, email: string, balance: string, bankno: string }[]>([]);
  const userCollectionRef = collection(db, "users"); //Cloud firebase collection.


  // Histroy
  const [history, sethistory] = useState<{ timestamp: string, transferTo: string, transfer_balance: string, type: string, userId: string }[]>([]);
  useEffect(() => {

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
      const email = user?.email;
      const userinfo = await getDocs(query(userCollectionRef, where('email', '==', email)));

      if (userinfo.empty) {
        throw new Error(`No user found`);
      }

      const userDoc = userinfo.docs[0];
      const userId = userDoc.data().userId;

      const userList: {  name: string, email: string, balance: string, bankno: string }[] = [];
      userinfo.forEach(doc => {
        const his_data = doc.data();
        const { name, email, balance, bankno } = his_data;
        userList.push({ name, email, balance, bankno })
        console.log(his_data);
        console.log(doc.data().bankno);

      });
      setUsers(userList);
      // console.log(snapshot);
    };

    const getHistoryById = async () => {
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
        hisList.push({ timestamp, transferTo, transfer_balance, type, userId })
        console.log(his_data);

      });
      sethistory(hisList);
      // console.log(snapshot);
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
    //Firestore not auto-generate
    // const userRef = doc(db, "users", name);
    // await setDoc(userRef, {name, age});

    //Firestore auto-generate
    const useruserCollectionRef = collection(db, "users");
    await addDoc(userCollectionRef, { name, age });

    console.log(`User ${name} added to Firestore`);
  }

  const handleLinkClick = () => {
    router.push('/transfer');
  };







  return (
    <div className="bg-white h-screen relative ">
      <div className="bg-[#EB5F59] h-1/2 px-5 py-5">
        <div className="px-2 py-2  h-48 text-white rounded-lg bg-gradient-to-r  from-[#ED645A] to-[#FFD280]">


          <div className="">
            <span>Icon</span>
            <span>Deposit</span>
          </div>
          {users.map(User => (
            <div className="">
              <div className="">
                <p>{User.bankno}</p>
              </div>
              <div className="text-4xl grid justify-end">
                <p>{User.balance}</p>
              </div>
            </div>


          ))}
          {/* <div className="">xxx-xxxxx-x</div> */}

          <div className="">
            <span className="font-bold">+</span>
            <span className=" font-bold"> View more</span>
          </div>
        </div>

      </div>

      <div className="pt-10 px-10 bg-white absolute top-60 h-screen w-full">
        <p className="mb-5">Histroy</p>

        {history.map((h, index) => (
          <div className="border-b mb-5 border-black columns-2">
          <div className="">
            <p className="text-lg font-bold capitalize ">{h.type}</p>
            <p className="text-xs">{h.transferTo}</p>
          </div>
          <div className="grid-rows-2 grid justify-end ">
            <p className={`text-lg font-bold text-right ${h.type === 'transfer' ? 'text-red-600' : 'text-green-500'}`}>{h.transfer_balance}</p>
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
      <Navbar />
    </div>
    
    // <div className="">
    //   <div className="text-gray-600 px-12 py-24 mt-24 overflow-y-hidden">
    //     <h2 className="text-2xl font-semibold">You are logged in!</h2>
    //     <h1>{user.email}</h1>
    //     <h1>{user.uid}</h1>

    //     <div>
    //       {users.map(User => (
    //         <div key={User.name}>
    //           <p>Email: {User.email}</p>
    //           <p>Name: {User.name}</p>
    //           <p>Balance: {User.balance}</p>

    //         </div>
    //       ))}
    //     </div>



    //     <button onClick={() => addUser("Mama", "19")}>Add users</button>
    //   </div>




    //</div>
  );
};

export default DashboardPage;