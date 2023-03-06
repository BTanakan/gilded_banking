import { getAuth } from "firebase/auth";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";


const DashboardPage = () => {
const auth = getAuth();
const router = useRouter();
const [user, loading] = useAuthState(auth);

if(loading) {
    return <div className="">Loading...</div>
}

if(!user){
    router.push("/");
    return <div className="">please sign in to continue.</div>
}
    return (
      <div className="flex py-2 container mx-auto">
        <div className="text-gray-600 px-12 py-24 mt-24 overflow-y-hidden mx-auto">
          <h2 className="text-2xl font-semibold">You are logged in!</h2>
          <button onClick={() => auth.signOut()}>Sign Out</button>
        </div>
        
      </div>
    );
  };
  
  export default DashboardPage;