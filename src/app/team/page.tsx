"use client";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faLinkedin,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const Team = () => {
  const teamMembers = [
    {
      name: "Kimie Masaka",
      role: "Chief Executive Officer/Founder",
      profession: "Financial Expert",
      image: "/images/team/Kimie.jpg",
      socialLinks: {
        twitter: "https://x.com",
        linkedin: "https://www.linkedin.com/in/kimie-maskala-18892317b",
        instagram: "https://instagram.com",
        facebook: "https://www.facebook.com/kimie.alexandermaskala",
      },
    },
    {
      name: "Haye Binjo Emmanuel",
      role: "Chief Financial Officer/CO-Founder",
      profession: "Financial Expert",
      image: "/images/team/Haye.jpeg",
      socialLinks: {
        twitter: "https://x.com/binjo_haye",
        linkedin: "https://www.linkedin.com/in/haye-binjo-a956901b3",
        instagram: "https://instagram.com/emilydavis",
        facebook: "https://facebook.com/emilydavis",
      },
    },
    {
      name: "Abdulrahman Sadiq",
      role: "Chief Technology Officer",
      profession: "Software Developer",
      image: "/images/team/Sadiq.jpg",
      socialLinks: {
        twitter: "https://x.com/ABDULRAHMA27681",
        linkedin: "https://www.linkedin.com/in/abdulrahman-sadiq-4054262b7",
        instagram: "https://www.instagram.com/sir_successful",
        facebook: "https://www.facebook.com/share/1Ag31dPqjh",
      },
    },
    {
      name: "Tsoji Victor Rikwen",
      role: "Chief Operation Officer",
      profession: "Software Developer",
      image: "/images/team/Tsoji.jpg",
      socialLinks: {
        twitter: "https://x.com",
        linkedin: "https://www.linkedin.com/in/victor-tsoji-8ba3421a4",
        instagram: "https://instagram.com",
        facebook: "https://facebook.com",
      },
    },
  ];

  return (
    <section id="about" className="pt-16 mb-5 md:pt-20 lg:pt-28">
      <div className="container mx-auto px-4">
        <h1 className="text-center mt-10 text-4xl font-bold mb-8">Our Team</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="text-center shadow-lg p-6 rounded-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="w-36 h-36 mx-auto rounded-full overflow-hidden border-4 border-blue-700">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={144}
                  height={144}
                  className="object-cover w-full h-full"
                />
              </div>
              <h2 className="text-xl font-bold mt-4">{member.name}</h2>
              <p className="">{member.role}</p>
              <p className="text-sm mb-4">{member.profession}</p>
              <div className="flex justify-center gap-4">
                <Link href={member.socialLinks.twitter} target="_blank">
                  <FontAwesomeIcon
                    icon={faXTwitter}
                    className="text-blue-500 hover:text-blue-600 text-xl"
                  />
                </Link>
                <Link href={member.socialLinks.linkedin} target="_blank">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="text-blue-600 hover:text-blue-800 text-xl"
                  />
                </Link>
                <Link href={member.socialLinks.instagram} target="_blank">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="text-red-500 hover:text-pink-700 text-xl"
                  />
                </Link>
                <Link href={member.socialLinks.facebook} target="_blank">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="text-blue-800 hover:text-blue-900 text-xl"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
