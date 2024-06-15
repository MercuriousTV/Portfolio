import React from "react";

const StickyFooter = (): JSX.Element => {
    return (
      <footer className="fixed bottom-0 left-0 w-full bg-gray-800 text-white py-2 ">
      <div className="container mx-auto px-1">
        <div className="flex justify-between ">
          <div className="">
            <h5 className="text-wrap font-bold">Aagash Nadarajah</h5>
            <p className="mt-0.2">aagashnadarajah@gmail.com</p>
          </div>
          <div className="w-full md:w-1/12 mb-2 md:mb-2 py-0.2">
            <h5 className="text-wrap font-bold ">Links</h5>
            <ul className="mt-0.6">
              <li>
                <a href="/about" className="text-gray-400 hover:text-white">
                  About me
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/12">
            <h5 className="text-wrap font-bold">Follow Me</h5>
            <div className="flex space-x-4 mt-2">
              <a href="https://www.instagram.com/aagash.nadarajah/" className="text-gray-400 hover:text-white">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M7.75 2a5.75 5.75 0 0 0-5.75 5.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5zm0 1.5h8.5A4.25 4.25 0 0 1 20.5 7.75v8.5a4.25 4.25 0 0 1-4.25 4.25h-8.5A4.25 4.25 0 0 1 3.5 16.25v-8.5A4.25 4.25 0 0 1 7.75 3.5zM12 6.25a5.75 5.75 0 1 0 0 11.5 5.75 5.75 0 0 0 0-11.5zm0 1.5a4.25 4.25 0 1 1 0 8.5 4.25 4.25 0 0 1 0-8.5zm5.25-.75a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              <a href="https://www.x.com/@mercurioustv" className="text-gray-400 hover:text-white">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.1 1.6 4.9 4.9 0 0 0-8.4 4.4 13.8 13.8 0 0 1-10-5 4.9 4.9 0 0 0 1.5 6.5A4.9 4.9 0 0 1 1 8.6v.1a4.9 4.9 0 0 0 3.9 4.8 4.9 4.9 0 0 1-2.2.1 4.9 4.9 0 0 0 4.5 3.3 9.8 9.8 0 0 1-6.1 2A9.8 9.8 0 0 0 8 21c6.5 0 10-5.4 10-10V9c.7-.5 1.3-1 1.8-1.6z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 12C0 5.372 5.372 0 12 0s12 5.372 12 12-5.372 12-12 12S0 18.628 0 12zm8.014 3.452c.235.664.705 1.196 1.36 1.514.635.307 1.405.461 2.284.461.869 0 1.669-.14 2.371-.423a3.86 3.86 0 0 0 1.632-1.162c.402-.47.705-1.037.898-1.685.195-.654.292-1.342.292-2.05 0-.69-.097-1.368-.292-2.022a4.03 4.03 0 0 0-.898-1.635 3.68 3.68 0 0 0-1.632-1.146c-.702-.294-1.502-.441-2.371-.441-.88 0-1.649.14-2.284.43-.655.318-1.125.851-1.36 1.515h-.317V7.833h-.837v8.15h.837v-.531h.317zm.798-3.56h-.004V9.544h.004v-.004h3.073c.404 0 .765.066 1.063.195.283.129.51.313.67.54.165.225.264.502.296.817v.028c0 .315-.09.607-.255.838-.16.226-.386.41-.668.54-.304.135-.666.204-1.075.204h-3.104zm-2.998 3.559c-.232.025-.47.038-.714.038H3.292v-3.217h2.24c.254 0 .502.018.744.053.217.03.426.085.626.163a2.19 2.19 0 0 1 .898.634c.253.286.444.637.563 1.037.122.39.186.855.186 1.38 0 .507-.068.97-.194 1.353-.12.386-.307.72-.565 1.008a2.364 2.364 0 0 1-.898.636 3.27 3.27 0 0 1-.626.155zM4.13 8.664c-.28 0-.537.047-.768.138-.23.085-.434.219-.606.399-.172.177-.308.4-.403.664-.098.268-.145.577-.145.926 0 .322.047.62.145.888.095.268.23.492.403.67.172.18.376.312.606.397.231.092.488.139.768.139h2.353v-4.26H4.13z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      </footer>
    );
  };
  export default StickyFooter;

// const Footer: React.FC = (): JSX.Element => {
//   return (
//     <footer className="bg-gray-800 text-white py-8">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-wrap justify-between items-center">
//           <div className="w-full md:w-1/3 mb-4 md:mb-0">
//             <h5 className="text-xl font-bold">Aagash Nadarajah</h5>
//             <p className="mt-2">aagashnadarajah@gmail.com</p>
//           </div>
//           <div className="w-full md:w-1/3 mb-4 md:mb-0">
//             <h5 className="text-xl font-bold">Links</h5>
//             <ul className="mt-2">
//               <li>
//                 <a href="/about" className="text-gray-400 hover:text-white">
//                   About me
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-400 hover:text-white">
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div className="w-full md:w-1/3">
//             <h5 className="text-xl font-bold">Follow Me</h5>
//             <div className="flex space-x-4 mt-2">
//               <a href="https://www.instagram.com/aagash.nadarajah/" className="text-gray-400 hover:text-white">
//                 <svg
//                   className="w-6 h-6"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     d="M7.75 2a5.75 5.75 0 0 0-5.75 5.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5zm0 1.5h8.5A4.25 4.25 0 0 1 20.5 7.75v8.5a4.25 4.25 0 0 1-4.25 4.25h-8.5A4.25 4.25 0 0 1 3.5 16.25v-8.5A4.25 4.25 0 0 1 7.75 3.5zM12 6.25a5.75 5.75 0 1 0 0 11.5 5.75 5.75 0 0 0 0-11.5zm0 1.5a4.25 4.25 0 1 1 0 8.5 4.25 4.25 0 0 1 0-8.5zm5.25-.75a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
//                     clipRule="evenodd"
//                   ></path>
//                 </svg>
//               </a>
//               <a href="https://www.x.com/@mercurioustv" className="text-gray-400 hover:text-white">
//                 <svg
//                   className="w-6 h-6"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M23 3a10.9 10.9 0 0 1-3.1 1.6 4.9 4.9 0 0 0-8.4 4.4 13.8 13.8 0 0 1-10-5 4.9 4.9 0 0 0 1.5 6.5A4.9 4.9 0 0 1 1 8.6v.1a4.9 4.9 0 0 0 3.9 4.8 4.9 4.9 0 0 1-2.2.1 4.9 4.9 0 0 0 4.5 3.3 9.8 9.8 0 0 1-6.1 2A9.8 9.8 0 0 0 8 21c6.5 0 10-5.4 10-10V9c.7-.5 1.3-1 1.8-1.6z"></path>
//                 </svg>
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white">
//                 <svg
//                   className="w-6 h-6"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M0 12C0 5.372 5.372 0 12 0s12 5.372 12 12-5.372 12-12 12S0 18.628 0 12zm8.014 3.452c.235.664.705 1.196 1.36 1.514.635.307 1.405.461 2.284.461.869 0 1.669-.14 2.371-.423a3.86 3.86 0 0 0 1.632-1.162c.402-.47.705-1.037.898-1.685.195-.654.292-1.342.292-2.05 0-.69-.097-1.368-.292-2.022a4.03 4.03 0 0 0-.898-1.635 3.68 3.68 0 0 0-1.632-1.146c-.702-.294-1.502-.441-2.371-.441-.88 0-1.649.14-2.284.43-.655.318-1.125.851-1.36 1.515h-.317V7.833h-.837v8.15h.837v-.531h.317zm.798-3.56h-.004V9.544h.004v-.004h3.073c.404 0 .765.066 1.063.195.283.129.51.313.67.54.165.225.264.502.296.817v.028c0 .315-.09.607-.255.838-.16.226-.386.41-.668.54-.304.135-.666.204-1.075.204h-3.104zm-2.998 3.559c-.232.025-.47.038-.714.038H3.292v-3.217h2.24c.254 0 .502.018.744.053.217.03.426.085.626.163a2.19 2.19 0 0 1 .898.634c.253.286.444.637.563 1.037.122.39.186.855.186 1.38 0 .507-.068.97-.194 1.353-.12.386-.307.72-.565 1.008a2.364 2.364 0 0 1-.898.636 3.27 3.27 0 0 1-.626.155zM4.13 8.664c-.28 0-.537.047-.768.138-.23.085-.434.219-.606.399-.172.177-.308.4-.403.664-.098.268-.145.577-.145.926 0 .322.047.62.145.888.095.268.23.492.403.67.172.18.376.312.606.397.231.092.488.139.768.139h2.353v-4.26H4.13z"></path>
//                 </svg>
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="mt-8 text-center text-gray-400">
//           &copy; 2024 Aagash Nadarajah. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// };


