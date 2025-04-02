import Image from "next/image"

// create an array of a few social icons that contain image, link and alt text

const socialIcons = [
  {
    name: "X",
    url: "https://x.com/raddy_dev",
    image: "/x.svg",
    alt: "X Icon",
  },
  {
    name: "GitHub",
    url: "https://github.com/raddydev",
    image: "/github.svg",
    alt: "GitHub Icon",
  },
  // {
  //   name: "YouTube",
  //   url: "https://youtube.com/raddydev",
  //   image: "/youtube.svg",
  //   alt: "YouTube Icon",
  // },
  
];

export function SocialIcons() {
  return (
    <div className="mb-5 flex justify-between">
      <h2 className="text-lg "></h2>
      <div className="flex gap-2">
        {socialIcons.map((socialIcon) => (
          <a
            key={socialIcon.name}
            href={socialIcon.url}
            target="_blank"
            rel="noopener noreferrer"
            className=" p-1 rounded-md hover:scale-110 transition duration-3"
          >
            <Image
              src={`/social-icons/${socialIcon.image}`}
              alt={socialIcon.alt}
              width={20}
              height={20}
              loading="eager"
            />
          </a>
        ))}
      </div>
    </div>
  )
}