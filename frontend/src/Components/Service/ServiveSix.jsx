import React from 'react';
import Marquee from 'react-fast-marquee';

// Utility function to combine class names
const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

// Review data
const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://cdn.pixabay.com/photo/2015/01/15/12/46/woman-600225_640.jpg",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://cdn.pixabay.com/photo/2015/01/15/12/46/woman-600225_640.jpg",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://cdn.pixabay.com/photo/2015/01/15/12/46/woman-600225_640.jpg",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://cdn.pixabay.com/photo/2015/01/15/12/46/woman-600225_640.jpg",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://cdn.pixabay.com/photo/2015/01/15/12/46/woman-600225_640.jpg",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://cdn.pixabay.com/photo/2015/01/15/12/46/woman-600225_640.jpg",
  },
];

// ReviewCard component
const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full w-24 h-24 bg-cover"  alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

// ServiveSix component
const ServiveSix = () => {
  return (
    <div className='lg:px-44 md:px-32 sm:px-20 px-10'>
      <div className="relative flex h-52 w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
        <Marquee pauseOnHover={true} gradient={false} speed={50}>
          {reviews.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default ServiveSix;
