import React from "react";
import CustomImage from "../../Custom/CustomImage";
import myAboutImage from "../../public/assets/images/myimage2.jpg";

const Profile = () => {
  return (
    <div className="flex justify-center align-middle w-[100vw] md:w-[50%] h-full">
      <div className="flex flex-col gap-6 md:gap-4 items-center">
        <div className="rounded-full overflow-hidden w-56 h-56 md:w-48 md:h-48">
          <CustomImage
            image={myAboutImage}
            alt="Hussain"
            styles={{ objectFit: "cover" }}
            loadingEase="lazy"
            havePriority={false}
            optimize={true}
            imageQuality={100}
            fetchPriority="auto"
          />
        </div>
        <p className="text-center w-80 md:w-96 font-medium md:font-light text-gray-800">
          I am a Full Stack Developer with 2 years of experience in building
          scalable web applications using React.js, Next.js, Node.js, nest.js,
          express, Postgresql, Prisma ORM, Redis and MongoDB. I focus on
          delivering efficient code and seamless user experiences across both
          frontend and backend.
        </p>
      </div>
    </div>
  );
};

export default Profile;
