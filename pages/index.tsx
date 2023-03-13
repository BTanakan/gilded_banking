import Image from "next/image"
import logo_imges from '../public/logo.png'
import user_images from '../public/Imgespeople.jpg'
import { app, initFirebase } from "./firebase";
import { signInWithEmailAndPassword, getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Link from "next/link";
import DashboardPage from "./dashboard";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import { useAuth } from "./AuthContext";
import { useEffect, useState } from "react";
import "firebase/firestore";
import firebase from "firebase/app";
import { collection, addDoc, getFirestore, getDocs, query, where } from "firebase/firestore";
export default function Home() {

  initFirebase();
  
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);
  const router = useRouter();


  const { user2, login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const db = getFirestore(initFirebase()); //initalFirebase.
  const userCollectionRef = collection(db, "users");
  


  const [formData, setFormData] = useState({
    userId: "",
    email: ""
  });

  

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setFormData({...formData, email: event.target.value});
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      
     // await signInWithEmailAndPassword(auth, email, password); 

     await signInWithEmailAndPassword(auth, email, password).then((respone) => {
      console.log(respone.user);
       sessionStorage.setItem('Token', respone.user.email!);
     })

     const userinfo = await getDocs(query(userCollectionRef, where('email', '==', email)));
      if (userinfo.empty) {
          throw new Error(`No user found`);
        }

        const userDoc = userinfo.docs[0];
        const userPin = userDoc.data().pin;
        console.log("userPin" + userPin);
     await sessionStorage.setItem('Pin', userPin);
     await sessionStorage.setItem("Email", userDoc.data().email);

    } catch (error) {
      console.error(error);
    }
  };



  if (loading) {
    return <div className="">Loading...</div>
  }

  if (user) {
    router.push("pinScreen");
    return <div className="">Welcome {user.displayName}</div>
  }

  const signIn = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result.user);
  }


  function writeuserData() {
    useEffect(() => {
      
    });
  }

  return (


    <div className="bg-white h-screen">
      {/* <div className="">
        <div className="">Please sign in to connect</div>
        <button onClick={signIn}>
          <div className="">
            Sign In
          </div>
        </button>
      </div> */}

      <div className=" shadow-md shadow-[#18274b40]  relative bg-gradient-to-b h-48 mx-5 my-5 from-[#EB5F59] to-[#F6B552]">
        <div className=" h-32 w-32 bg-white absolute -top-10 -left-10 rounded-full"></div>
        <div className="shadow-md shadow-[#18274b40] bg-white flex item-center justify-center  h-40 w-40 border-solid  border-2 rounded-full absolute top-2/4 left-24 ">
          <Image
            src={user_images}
            alt="Logo images"
            className="border-solid  border-2 rounded-full w-full h-full"
          >
          </Image>
        </div>
      </div>

      <div className="mx-5 mt-24 ">
        <form onSubmit={handleLogin}>
          <div className="mb-4 ">
            <input type="email" value={email} onChange={handleEmailChange} className="shadow-md shadow-[#18274b40] border rounded-full   py-2 px-3 w-full placeholder-[#ACACAC] font-bold" placeholder="Email"></input>
          </div>

          <div className="mb-4">
            <input type="password" value={password} onChange={handlePasswordChange} className=" shadow-md shadow-[#18274b40] border rounded-full py-2 px-3 w-full placeholder-[#F6B552] font-bold" placeholder="* * * * * * * *"></input>
          </div>
          <div className="flex justify-end">
            <a href="#" className=" text-[#EB5F59] mb-4 font-bold">Forgot Password?</a>
          </div>

          <div className="">
            <button type="submit" className=" text-xl shadow-md shadow-[#18274b40] rounded-full py-2 px-4 w-full text-white font-bold  bg-gradient-to-l from-[#F6B552] to-[#EB5F59]">LOGIN</button>
          </div>
          <div className=" text-center mt-5 mb-5  text-md font-bold text-[#ACACAC]">
            <span>or</span>

          </div>

          <div className=" text-center mt-5 mb-5  text-md font-bold text-[#ACACAC]">
            <span>Wrong email or password!</span>
          </div>

          <div className="">
            <button className=" text-xl shadow-md shadow-[#18274b40] rounded-full py-2 px-4 w-full text-white font-bold   bg-gradient-to-l from-[#F6B552] to-[#EB5F59]">SIGN UP</button>
          </div>

        </form>

      </div>

    </div>
  )
}