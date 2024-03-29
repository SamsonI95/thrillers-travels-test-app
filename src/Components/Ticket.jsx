//App
import React from "react";

//Data
import ticketData from "../../public/ticketData.json";

//Icon
import { GoChevronDown } from "react-icons/go";
import PriceAndMap from "./PriceAndMap";

const Ticket = () => {
  return (
    <>
      <section>
        <div className="flex items-center justify-between mt-5">
          <div>
            <h3>RESULT (25)</h3>
          </div>
          <div className="flex items-center space-x-8">
            <div className="bg-white px-5 py-1 rounded-xl text-sm">FILTER</div>
            <div className="flex items-center bg-white px-4 py-1 rounded-xl text-sm space-x-1">
              <p>TICKET OF CLASS</p>
              <GoChevronDown />
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-5 justify-between mt-2 text-[#425c5a] font-semibold">
          <div>
            {ticketData.map((ticket, index) => (
              <div
                className={`flex items-center justify-evenly bg-white p-6 space-x-6 ${
                  index === 0 ? 'card1' : index === 1 ? 'card2' : index === 2 ? 'card3' : "card4" 
                }`}
                key={index}
              >
                <div>
                  <img src={ticket.icon} alt={ticket.company} />
                </div>
                <div className="text-center">
                  <h3>JFK</h3>
                  <p>13:00</p>
                </div>
                <div className="text-center">
                  <p className="text-sm">{ticket.company}</p>
                  <p>11H 20M</p>
                  <p>NON-STOP</p>
                </div>
                <div className="text-center">
                  <h3>BOM</h3>
                  <p>14:20</p>
                </div>
                <div>
                  <h3 className="text-right">{ticket.price}</h3>
                  <button className="border bg-[#d6a217] rounded-3xl p-2 text-white text-[10px] font-semibold">
                    BOOK NOW
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div>
            <PriceAndMap />
          </div>
        </div>
      </section>
    </>
  );
};

export default Ticket;
