"use client";
import DetailForm from "@/components/DetailPage";
import ProfileDetail from "@/components/ProfileDetail";
import { AesDecryptUtil } from "@/utils/AesDecryptUtil";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
const Profile = () => {
  const params = useParams();
  const username = String(params.username);
  console.log(username, " username")
  const data = GetProfileData("username");
  console.log(data, "fffjfsl")

  return (
    <div>
      <div className="w-[100%] flex mt-8 ">
        <div className="w-[20%]"></div>
        <ProfileDetail data={"data"} />
      </div>
    </div>
  );
};

export default Profile;

const GetProfileData = (username: string) => {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    const GetData = async () => {
      try {
        const response = await axios.get('localhost:8082/user/profile/rishabh-gaud');
        console.log(response);
        
        let { data } = response.data;
        //   data = await AesDecryptUtil.aesDecrypt(data); // Decrypted data
        console.log(data, " data logged");
        
        setUserData(data);
      } catch (error: any) {
        // toast.error(error.message, { position: "top-center", autoClose: 3000, theme: "dark" });
        // seterror(error.messsage);
        throw error;
      }
    };

    GetData();
  }, []);

  return userData;
};
