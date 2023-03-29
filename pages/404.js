import React from "react";
import Link from 'next/link';

const NotFound = () => {
  return (
    <section className="font-kn-sans bg-slate-light py-[20px] h-screen">
      <div className="md:mt-40 mt-20 text-center space-y-3">
        <h1 className="text-5xl">404!</h1>
        <h3 className="text-2xl">Page not available</h3>
        <Link href="/">
          <a>
            <button className="px-8 py-4 mt-4 text-white rounded-lg bg-[#4D49FF] text-desktop-paragraph md:w-auto filter hover:brightness-125">
              Back to Home
            </button>
          </a>
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
