import { roomdemo } from "../assets/Rooms/index";
// import { LightBulbIcon } from "@heroicons/react/24/outline";
import {
  ArchiveBoxArrowDownIcon,
  FaceFrownIcon,
  FireIcon,
  LightBulbIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/solid";

const stationaries = [
  {
    id: "s1",
    icon: LightBulbIcon,
    category: "Beds",
    amount: 2,
    color: "bg-gradient-to-br from-[#00E59B] to-[#54F065]",
  },
  {
    id: "s3",
    icon: ShieldCheckIcon,
    category: "Showers",
    amount: 1,
    color: "bg-gradient-to-r from-[#00E59B] to-[#54F065]",
  },
  {
    id: "s1",
    icon: ArchiveBoxArrowDownIcon,
    category: "Bathroom",
    amount: 2,
    color: "bg-gradient-to-br from-[#00E59B] to-[#54F065]",
  },
  {
    id: "s2",
    icon: FireIcon,
    category: "Kitchen",
    amount: 1,
    color: "bg-gradient-to-br from-[#00E59B] to-[#54F065]",
  },
];
const bodima = [
  {
    id: "b1",
    image: LightBulbIcon,
    name: "Fransis Bodima",
    address: "Fransis Lane, Dalugangoda Kelaniya",
    phone: "071 522 4124",
    price: 5000,
    gender: "Mens",
    amount: 1,
  },
  // {
  //   id: "b2",
  //   image: LightBulbIcon,
  //   name: "Fransis Bodima",
  //   address: "Fransis Lane, Dalugangoda Kelaniya",
  //   phone: "071 522 4124",
  //   price: 5000,
  //   gender: "Mens",
  //   amount: 1,
  // },
];
const facilities = [
  {
    id: "f1",
    icon: LightBulbIcon,
    category: "Electricity Bill",
    color: "text-[#54f065]",
    status: "Yes",
  },
  {
    id: "f2",
    icon: ShieldCheckIcon,
    category: "Water Bill",
    color: "text-[#E53232]",
    status: "No",
  },
];

export default function Card() {
  return (
    <div className="bg-white font-poppins">
      <div className="mx-auto max-w-2xl px-0 py-16 md:px-6 sm:py-18 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {bodima.map((bodima) => (
            <div key="1" className="group relative bg-[#F2F2F2] drop-shadow-lg">
              <div className="overflow-hidden">
                <img
                  src={roomdemo}
                  class="object-cover w-full h-full"
                  alt="room1"
                />
              </div>
              <div className="mt-3 mx-5 grid grid-cols-3">
                <div className="col-span-2">
                  <p className="text-[1rem] md:text-[1.3rem] font-poppins text-start font-bold ">
                    {bodima.name}
                  </p>
                </div>
                <div className="bg-white">
                  <p className="font-poppins text-[1rem] md:text-[1.3rem] px-2 font-bold">
                    Rs. {bodima.price}
                  </p>
                </div>
                <div className=" col-span-2 mt-1 font-bold text-[.75rem] grid grid-cols-5 gap-1 mb-2">
                  {stationaries.map((stationaries) => (
                    <div
                      className={`relative items-center flex justify-center py-[.15rem] ${stationaries.color}`}
                    >
                      <span>
                        <stationaries.icon
                          className={`w-3 h-3 mr-1`}
                          aria-hidden="true"
                        />
                      </span>
                      <p className="">{stationaries.amount}</p>
                    </div>
                  ))}
                </div>
                <>
                  <p className="text-end text-[.5rem] font-poppins pt-1">
                    Per month.
                  </p>
                </>
                <div className="col-span-2  font-medium text-start text-[.8rem] leading-4">
                  <p className="my-[1rem] flex items-center">
                    <>
                      <FaceFrownIcon
                        className={`inline w-4 h-4 mr-1 ${facilities.color}`}
                        aria-hidden="true"
                      />
                    </>
                    {bodima.address}
                  </p>
                  <p className="my-[1rem]">
                    <>
                      <FaceFrownIcon
                        className={`inline w-3 h-3 mr-1 ${facilities.color}`}
                        aria-hidden="true"
                      />
                    </>
                    {bodima.phone}
                  </p>
                  <p className="my-[1rem]">
                    <>
                      <FaceFrownIcon
                        className={`inline w-3 h-3 mr-1 ${facilities.color}`}
                        aria-hidden="true"
                      />
                    </>
                    {bodima.gender}
                  </p>
                  <p className="my-[1rem]">
                    <>
                      <FaceFrownIcon
                        className={`inline w-3 h-3 mr-1 ${facilities.color}`}
                        aria-hidden="true"
                      />
                    </>
                    {bodima.amount} Person
                  </p>
                </div>

                <div className="mt-4 font-bold text-[.75rem]">
                  {facilities.map((facilities) => (
                    <div className="bg-black  relative items-center flex justify-center ml-4 md:ml-8 py-2 my-1">
                      <span>
                        <facilities.icon
                          className={`w-5 h-5 mr-1 ${facilities.color}`}
                          aria-hidden="true"
                        />
                      </span>
                      <p className={`${facilities.color}`}>
                        {facilities.status}
                      </p>
                    </div>
                  ))}
                  <button className="bg-gradient-to-br from-[#00E59B] to-[#54F065] rounded-full px-4 py-[.4rem] mt-5 ml-auto flex">
                    Call me
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
