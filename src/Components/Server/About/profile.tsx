import React from "react";
import CustomImage from "../CustomImage";
import myAboutImage from "../../../../assets/images/myimage2.jpg";

const Profile = () => {
  return (
    <div className="flex justify-center align-middle w-full h-full">
      <div className="flex flex-col gap-2 items-center">
        <div className="rounded-full overflow-hidden w-48 h-48">
          <CustomImage
            image={myAboutImage}
            alt="Hussain"
            styles={{ objectFit: "cover" }}
            loadingEase="lazy"
            havePriority={false}
            optimizeImage={true}
          />
        </div>
        <p className="text-center w-80 font-thin text-gray-500">
          I am a Full Stack Developer with 1 year of experience in building
          scalable web applications using React.js, Next.js, Node.js, and
          MongoDB. I focus on delivering efficient code and seamless user
          experiences across both frontend and backend.
        </p>
      </div>
    </div>
  );
};

export default Profile;
