import { roomdemo } from "../assets/Rooms/index";
// import { LightBulbIcon } from "@heroicons/react/24/outline";
import {
  ArchiveBoxArrowDownIcon,
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
    color: "bg-[#54f065]",
  },
  {
    id: "s3",
    icon: ShieldCheckIcon,
    category: "Showers",
    amount: 1,
    color: "bg-[#54f065]",
  },
  {
    id: "s1",
    icon: ArchiveBoxArrowDownIcon,
    category: "Bathroom",
    amount: 2,
    color: "bg-[#54f065]",
  },
  {
    id: "s2",
    icon: FireIcon,
    category: "Kitchen",
    amount: 1,
    color: "bg-[#54f065]",
  },
];
const facilities = [
  {
    id: "f1",
    icon: LightBulbIcon,
    category: "Electricity Bill",
    color: "text-[#54f065]",
  },
  {
    id: "f3",
    icon: ShieldCheckIcon,
    category: "Water Bill",
    color: "text-[#54f065]",
  },
];

export default function Card() {
  return (
    <div className="bg-white font-poppins">
      <div className="mx-auto max-w-2xl px-1 py-16 sm:px-6 sm:py-18 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
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
                  Fransis Boima
                </p>
              </div>
              <div className="bg-white">
                <p className="font-poppins text-[1rem] md:text-[1.3rem] px-2 font-bold">
                  RS. 5000
                </p>
              </div>
              <div className=" col-span-2 mt-1 font-bold text-[.75rem] grid grid-cols-5 gap-1 mb-2">
                {stationaries.map((stationaries) => (
                  <div className="bg-[#54f065] relative items-center flex justify-center py-[.15rem]">
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
              <div className="col-span-2  font-medium text-start text-[.88rem] leading-4">
                <p className="my-[1rem]">Fransis Lane, Dalugangoda Kelaniya</p>
                <p className="my-[1rem]">071 522 4124</p>
                <p className="my-[1rem]">Mens</p>
                <p className="my-[1rem]">1 person</p>
              </div>
              <div className="mt-4 font-bold text-[.75rem]">
                {facilities.map((facilities) => (
                  <div className="bg-black  relative items-center flex justify-center py-2 my-1">
                    <span>
                      <facilities.icon
                        className={`w-5 h-5 mr-1 ${facilities.color}`}
                        aria-hidden="true"
                      />
                    </span>
                    <p className={`${facilities.color}`}>Yes</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
