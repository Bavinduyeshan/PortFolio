import React from 'react';
import me from '../../assets/cont.jpeg';

export default function Contact() {
  return (
    
    
    <section id="contact" className="py-16 ">
    <div  data-aos='fade-up' data-aos-delay='300' className="container mx-auto px-6">
    <h2 className="text-3xl font-bold text-center mb-8">Contact-Us</h2>
    </div>


    

<div data-aos='fade-up'  className="flex w-full max-w-7xl mx-auto">
          <div className="hidden md:flex items-center justify-center w-full ml-0">
          <img
            src={me}
            alt="Contact Illustration"
            className="w-96"
          />
        </div>
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="flex flex-col gap-5 w-full max-w-md p-6"
        >
          {/* <div>
            <h2 className="text-3xl font-semibold text-purple-600">Contact Us</h2>
            <hr className="w-24 h-1 bg-purple-600 rounded mt-2 mb-4" />
          </div> */}
          <input
            type="hidden"
            name="access_key"
            value="d341bf3d-d8fa-4822-953d-ac9ae66592a1"
          />
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-400"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-400"
            rows="5"
            required
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 text-white bg-gradient-to-r from-orange-500 to-pink-500 rounded-full font-medium shadow-md hover:shadow-lg hover:opacity-90 transition duration-300"
          >
            Submit
          </button>
        </form>

        {/* Right Side - Image */}
      
      </div>

    </section>    
    
  );
}
