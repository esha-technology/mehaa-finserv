import React from "react";
import Image from "next/image";

// Define the type for the props
interface CustomerReviewCardProps {
  name: string;
  comment: string;
  profileImg: string;
}

const Ourofferscard: React.FC<CustomerReviewCardProps> = ({ name, comment, profileImg }) => {
  return (
    <section className="relative lg:m-14 m-4 border">
      <div className="lg:p-12 p-6 rounded-3xl bg-white shadow-xl border border-gray-200 max-xl:max-w-2xl max-xl:mx-auto">
        <div className="flex sm:items-center flex-col sm:flex-row justify-between gap-5 mb-6">
          <div className="flex items-center gap-3">
            <Image
              src={profileImg}
              alt={`${name}'s profile`}
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
            <h6 className="font-semibold text-lg leading-8 text-indigo-600">{name}</h6>
          </div>
        </div>
        <div className="flex items-center gap-3 mb-4">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <g clipPath="url(#clip0_13624_2892)">
                <path
                  d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234C3.31997 10.6542 3.58942 10.1412 3.60323 9.56087L4.19146 2.16698C4.27659 1.81739 4.61145 1.57371 4.97546 1.64744L12.1368 3.15772C12.3968 3.21458 12.6041 3.46393 12.6875 3.76377L14.1033 2.56698Z"
                  fill="#FBBF24"
                />
              </g>
              <defs>
                <clipPath id="clip0_13624_2892">
                  <rect width="30" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
          ))}
        </div>
        <p className="font-normal text-lg text-gray-500">{comment}</p>
      </div>
    </section>
  );
};

export default Ourofferscard;
