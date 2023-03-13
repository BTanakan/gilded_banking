import { getAuth } from 'firebase/auth';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { initFirebase } from './firebase';
import Image from "next/image"
import user_images from '../public/Imgespeople.jpg'
import Numpad from "../component/numpad";

export const pinScreen = () => {



    initFirebase();
    const router = useRouter();
    const auth = getAuth();
    const [user, loading] = useAuthState(auth);



    const getTokenemail = async () => {
        let tokenemail = sessionStorage.getItem('Token');
    }

    useEffect(() => {
        if (!user) {
            router.push("/");
        }

    }, [])



    const [digits, setDigits] = useState("");

    const handleDigitClick = async (digit: any)  => {
        if (digits.length >= 6) {
            const pin = await sessionStorage.getItem("Pin");

            if (digits == pin) {
                console.log("Verify Success.");
                router.push("/Homepage");
            } else {
                router.push("/");
            }
        }
        if (digits.length < 6) {
            console.log(digits.length);
            setDigits((prevOtp) => prevOtp + digit);
            setSelectedDiv(digits.length); // set selected div based on length of digitsse digit as integer and set it as selected div
            
        }

    };

    const handleBackspaceClick = () => {
        setDigits((prevOtp) => prevOtp.slice(0, -1));
        setSelectedDiv(digits.length - 2); // set selected div based on length of digits
    };

    function handleClick() {
        console.log("Hello");
        console.log(digits);

    }



    const [selectedDiv, setSelectedDiv] = useState(-1); // -1 means no div is selected

    return (
        <div className="bg-white h-screen">
            <div className=" shadow-md shadow-[#18274b40]  relative bg-gradient-to-b h-48 mx-5 my-5 from-[#EB5F59] to-[#F6B552]">
                <div className=" h-32 w-32 bg-white absolute -top-10 -left-10 rounded-full"></div>
                <div className="h-40 w-40 shadow-md shadow-[#18274b40] bg-white flex item-center justify-center   border-solid  border-2 rounded-full absolute top-2/4 left-24 ">
                    <Image
                        src={user_images}
                        alt="Logo images"
                        className="border-solid  border-2 rounded-full w-full h-full"
                    >
                    </Image>
                </div>
            </div>

            <div className="mx-5 mt-24">
                <p className=' text-center'>Pin or can use Face ID</p>
                <p className=' text-center'>or Touch ID</p>
            </div>

            <div className="mx-5 my-5 flex flex-col items-center justify-center">
                <div className="flex gap-2">
                    {[1, 2, 3, 4, 5, 6].map((index) => (
                        <div
                            key={index}
                            className={`border w-8 h-8 rounded-full ${index <= digits.length
                                ? 'bg-[#F6B654]'
                                : 'bg-[#CFCFCF]'
                                }`}
                        ></div>
                    ))}
                </div>
                <div className="mt-5">
                    <p className=' text-center text-[#F5B14A]'>Forgot Pin?</p>
                </div>
                <input hidden
                    type="text"
                    value={digits}
                    onChange={(e) => setDigits(e.target.value)}
                    maxLength={6}
                    className=" h-12 text-3xl font-medium text-center border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                <Numpad onDigitClick={handleDigitClick} onBackspace={handleBackspaceClick} />
            </div>
            




        </div>

    )
}

export default pinScreen