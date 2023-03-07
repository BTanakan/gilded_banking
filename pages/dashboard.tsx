import { getAuth } from "firebase/auth";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { getDatabase } from "firebase/database";
import { app, initFirebase } from "./firebase";
import { collection, doc, getDoc, getDocs, getFirestore, onSnapshot, query, QuerySnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import ReadDataFromCloudFirestore from "@/component/Read";

const DashboardPage = () => {
  const auth = getAuth();
  const router = useRouter();
  const [user, loading] = useAuthState(auth);

  const db = getFirestore(initFirebase()); //initalFirebase.
  const [users, setUsers] = useState<{ name: string, age: number }[]>([]);
  const userCollectionRef = collection(db, "users"); //Cloud firebase collection.

  useEffect(() => {

    //Fetch user methods.
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      const userList: { name: string, age: number }[] = [];
      data.forEach(doc => {
        const user_data = doc.data();
        const { name, age } = user_data;
        userList.push({ name, age });
      });
      setUsers(userList);
    }
    getUsers();
  }, []);


  if (loading) { // slpash screen.
    return <div className="">Loading...</div>
  }

  if (!user) { // check when user not authen.
    router.push("/");
    return <div className="">please sign in to continue.</div>
  }


  return (
    <div className="flex py-2 container mx-auto">
      <div className="text-gray-600 px-12 py-24 mt-24 overflow-y-hidden mx-auto">
        <h2 className="text-2xl font-semibold">You are logged in!</h2>
        <h1>{user.email}</h1>
        <h1>{user.uid}</h1>

        <div>
          {users.map(user => (
            <div key={user.name}>
              <p>Name: {user.name}</p>
              <p>Age: {user.age}</p>
            </div>
          ))}
        </div>

        <div className=""></div>

        <button onClick={() => auth.signOut()}>Sign Out</button>
        <button onClick={ReadDataFromCloudFirestore}>Read</button>
      </div>

    </div>
  );
};

export default DashboardPage;