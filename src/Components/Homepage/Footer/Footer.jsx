import React from "react";
import logo from "../../../assets/logo-footer.png";
import bnrShadow from "../../../assets/bg-shadow.png";
const Footer = () => {
  return (
    <div
      className="
                relative
                bg-[#06091A]
                mt-40
            "
    >
      <div
        className="
                min-h-[20px] 
                absolute -top-25 left-1/2 -translate-x-1/2
                container
                rounded-xl 
                border border-white/10   
                backdrop-blur-md         
                 bg-white/10   
                space-y-2
                py-4
                w-[80%] mx-auto
                bg-cover bg-center
                shadow-[0_10px_40px_rgba(255,200,100,0.25)] 
                
            "
        style={{
          backgroundImage: `
            linear-gradient(to right, #e6f2ff, #f8fafc, #ffe0b3),
            url(${bnrShadow})
            `,
        }}
      >
        <div className=" mx-5 rounded-lg p-5 flex flex-col items-center space-y-2">
          {/* <img 
                        src={bnrShadow} 
                        alt="" 
                        className='absolute -top-10 left-1/2 translate-x-1/2 bg-cover w-20'
                    /> */}
          <h1 className="font-bold text-2xl">Subscribe to our Newsletter</h1>
          <p className="text-black/70">
            Get the latest updates and news right in your inbox!
          </p>
          <div className="join gap-5">
            <div className="">
              <label className="input validator join-item rounded-lg">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="rounded-lg "
                />
              </label>
              <div className="validator-hint hidden">Enter your email</div>
            </div>
            <button
              className="
                                    btn
                            bg-linear-to-r from-[#EFA9B7] via-[#F6C870] to-[#FACD57]
                            hover:from-[#e58fa0] hover:via-[#f2b84e] hover:to-[#f4c233]
transition-all duration-300
                            border-none rounded-lg
                            join-item
                        "
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-5 container mx-auto pt-15">
        {/* <div className="flex justify-center items-center pt-15">
          <img src={logo} alt="" className="h-30 text-center" />
        </div> */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-25 items-center md:mx-auto w-11/12 mx-auto space-y-5">
          {/* P1 */}
          <div>
            <h1 className="text-white text-lg font-semibold">About Us</h1>
            <p className="text-gray-500">
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </div>
          {/* P2 */}
          <div>
            <h1 className="text-white text-lg font-semibold">Quick Links</h1>
            <ul className="text-gray-500 list-disc ml-5">
              <li>Home</li>
              <li>Services</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          {/* P3 */}
          <div className="space-y-2">
            <h1 className="text-white text-lg font-semibold">Subscribe</h1>
            <p className="text-gray-500">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="join">
              <div>
                <label className="input validator join-item">
                  <svg
                    className="h-[1em] opacity-50"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                      fill="none"
                      stroke="currentColor"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </g>
                  </svg>
                  <input type="email" placeholder="mail@site.com" required />
                </label>
                <div className="validator-hint hidden">Enter your email</div>
              </div>
              <button
                className="
                                     btn
                                 bg-linear-to-r from-[#EFA9B7] via-[#F6C870] to-[#FACD57]
                                border-none join-item
                                hover:from-[#e58fa0] hover:via-[#f2b84e] hover:to-[#f4c233]
                                transition-all duration-300
                            "
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr className="py-2 mt-10" />
      <p className="text-center text-gray-500 text-sm pb-5">
        @2026 Musabbir Rahman . All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
