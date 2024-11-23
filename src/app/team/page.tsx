"use client";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Team = () => {
  const teamMembers = [
    {
      name: "John Doe",
      role: "Team Lead",
      profession: "Software Engineer",
      image: "/images/about/image.svg", // Replace with actual image paths
      socialLinks: {
        twitter: "https://twitter.com/johndoe",
        linkedin: "https://linkedin.com/in/johndoe",
        instagram: "https://instagram.com/johndoe",
        facebook: "https://facebook.com/johndoe",
        gmail: "mailto:johndoe@gmail.com",
      },
    },
    {
      name: "Jane Smith",
      role: "UI/UX Designer",
      profession: "Graphic Designer",
      image: "/images/about/image.svg",
      socialLinks: {
        twitter: "https://twitter.com/janesmith",
        linkedin: "https://linkedin.com/in/janesmith",
        instagram: "https://instagram.com/janesmith",
        facebook: "https://facebook.com/janesmith",
        gmail: "mailto:janesmith@gmail.com",
      },
    },
    {
      name: "Sam Wilson",
      role: "Backend Developer",
      profession: "Full-Stack Developer",
      image: "/images/about/image.svg",
      socialLinks: {
        twitter: "https://twitter.com/samwilson",
        linkedin: "https://linkedin.com/in/samwilson",
        instagram: "https://instagram.com/samwilson",
        facebook: "https://facebook.com/samwilson",
        gmail: "mailto:samwilson@gmail.com",
      },
    },
    {
      name: "Emily Davis",
      role: "Frontend Developer",
      profession: "React Developer",
      image: "/images/about/image.svg",
      socialLinks: {
        twitter: "https://twitter.com/emilydavis",
        linkedin: "https://linkedin.com/in/emilydavis",
        instagram: "https://instagram.com/emilydavis",
        facebook: "https://facebook.com/emilydavis",
        gmail: "mailto:emilydavis@gmail.com",
      },
    },
  ];

  return (
    <section id="about" className="pt-16 mb-10 md:pt-20 lg:pt-28">
      <div className="container mx-auto px-4">
        <h1 className="text-center text-4xl font-bold mb-8">Our Team</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="text-center bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={150}
                height={150}
                className="rounded-full mx-auto mb-4"
              />
              <h2 className="text-xl font-bold">{member.name}</h2>
              <p className="text-gray-500">{member.role}</p>
              <p className="text-sm text-gray-400 mb-4">{member.profession}</p>
              <div className="flex justify-center gap-4">
                <Link href={member.socialLinks.twitter} target="_blank">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="text-blue-500 hover:text-blue-700 text-xl"
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
                    className="text-pink-500 hover:text-pink-700 text-xl"
                  />
                </Link>
                <Link href={member.socialLinks.facebook} target="_blank">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="text-blue-800 hover:text-blue-900 text-xl"
                  />
                </Link>
                <Link href={member.socialLinks.gmail} target="_blank">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-red-500 hover:text-red-700 text-xl"
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
