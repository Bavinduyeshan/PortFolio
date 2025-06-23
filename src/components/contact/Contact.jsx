// import React from 'react';
// import me from '../../assets/cont.jpeg';

// export default function Contact() {
//   return (
    
    
//     <section id="contact" className="py-16 ">
//     <div  data-aos='fade-up' data-aos-delay='300' className="container mx-auto px-6">
//     <h2 className="text-3xl font-bold text-center mb-8">Contact-Us</h2>
//     </div>


    

// <div data-aos='fade-up'  className="flex w-full max-w-7xl mx-auto">
//           <div className="hidden md:flex items-center justify-center w-full ml-0">
//           <img
//             src={me}
//             alt="Contact Illustration"
//             className="w-96"
//           />
//         </div>
//         <form
//           action="https://api.web3forms.com/submit"
//           method="POST"
//           className="flex flex-col gap-5 w-full max-w-md p-6"
//         >
//           {/* <div>
//             <h2 className="text-3xl font-semibold text-purple-600">Contact Us</h2>
//             <hr className="w-24 h-1 bg-purple-600 rounded mt-2 mb-4" />
//           </div> */}
//           <input
//             type="hidden"
//             name="access_key"
//             value="d341bf3d-d8fa-4822-953d-ac9ae66592a1"
//           />
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400"
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400"
//             required
//           />
//           <textarea
//             name="message"
//             placeholder="Your Message"
//             className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400"
//             rows="5"
//             required
//           ></textarea>
//           <button
//             type="submit"
//             className="px-6 py-3 text-white bg-gradient-to-r from-green-500 to-blue-200 rounded-full font-medium shadow-md hover:shadow-lg hover:opacity-90 transition duration-300"
//           >
//             Submit
//           </button>
//         </form>

//         {/* Right Side - Image */}
//       
//       </div>

//     </section>    
    
//   );
// }

import React from 'react';
import me from '../../assets/cont.jpeg';

export default function Contact() {
  return (
    <section id="contact" >
      {/* className="relative py-16 bg-gradient-to-b from-indigo-900 via-gray-900 to-black overflow-hidden" */}
      {/* Background gradient circles */}
      {/* <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-full -top-48 -left-48 transform rotate-12 animate-pulse"></div>
        <div className="absolute w-[400px] h-[400px] bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-full top-96 right-0 transform -rotate-45"></div>
      </div> */}

      <div data-aos="fade-up" data-aos-delay="300" className="container mx-auto px-6 lg:px-16 relative z-10 mt-5">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 mb-12">
          Get in Touch
        </h2>

        <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side - Image and Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
            <img
              src={me}
              alt="Contact Illustration"
              className="w-80 h-80 object-cover rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300"
            />
            <div className="text-gray-300 space-y-2">
              <p>Feel free to reach out for collaborations or inquiries!</p>
              <p className="text-sm">Email: bavinduyeshan@example.com</p>
              <p className="text-sm">Phone: +94 123 456 7890</p>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-gradient-to-br from-indigo-600/40 to-purple-600/40 p-8 rounded-2xl shadow-lg">
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="flex flex-col gap-4"
            >
              <input
                type="hidden"
                name="access_key"
                value="d341bf3d-d8fa-4822-953d-ac9ae66592a1"
              />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full px-5 py-3 bg-white bg-opacity-70 border-0 rounded-lg focus:ring-2 focus:ring-purple-500 placeholder-gray-400 transition-all duration-300"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full px-5 py-3 bg-white bg-opacity-70 border-0 rounded-lg focus:ring-2 focus:ring-purple-500 placeholder-gray-400 transition-all duration-300"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                className="w-full px-5 py-3 bg-white bg-opacity-70 border-0 rounded-lg focus:ring-2 focus:ring-purple-500 placeholder-gray-400 transition-all duration-300 h-32 resize-none"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full px-6 py-3 text-white bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg font-semibold shadow-md hover:shadow-xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-center text-white py-4 mt-10">
        <p>&copy; {new Date().getFullYear()} Bavinduyeshan. All rights reserved.</p>
      </footer>
    </section>
  );
}