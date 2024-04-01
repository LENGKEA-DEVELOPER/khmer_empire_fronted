import React from 'react';
import { TERipple } from "tw-elements-react";

const Footer = () => {
    return (
        <footer className="bg-[#396e7e] text-center text-white">
            <div className="container px-6 pt-6 mx-auto">
                <div className="mb-6 flex justify-center w-full">
                    <TERipple rippleColor="light">
                        <a
                            href='https://web.facebook.com/leanghakcoder'
                            target='_blank'
                            type="button"
                            className="m-1 h-9 w-9 rounded-full border-[1.5px] border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                        >
                            <svg className="mx-auto h-full w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                        </a>
                    </TERipple>

                    <TERipple rippleColor="light">
                        <a
                            href='https://www.youtube.com/@Leanghak-Coder'
                            target='_blank'
                            type="button"
                            className="m-1 h-9 w-9 rounded-full border-[1.5px] border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"

                        >
                            <svg className="mx-auto h-full w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg>
                        </a>
                    </TERipple>

                    <TERipple rippleColor="light">
                        <a
                            href='#'
                            target='_blank'
                            type="button"
                            className="m-1 h-9 w-9 rounded-full border-[1.5px] border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"

                        >
                            <svg className="mx-auto h-full w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" />  <circle cx="4" cy="4" r="2" /></svg>
                        </a>
                    </TERipple>

                    <TERipple rippleColor="light">
                        <a
                            href='https://t.me/leanghak_coder'
                            target='_blank'
                            type="button"
                            className="m-1 h-9  w-9 rounded-full border-[1.5px] border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0">
                            <svg className="mx-auto h-full w-4 " width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" /></svg>
                        </a>
                    </TERipple>

                </div>
            </div>

            <div className=' max-sm:px-[2%] sm:px-[5%] md:px-[5%] lg:px-[5%] xl:px-[5%] 2xl:px-[5%]'>
                <div className='border-solid border-t border-white' ></div>
            </div>

            {/* <!--Copyright section--> */}
            <div
                className="p-4 text-center  ">
                &copy; 2024 Copyright, The Historical of Khmer Empire. All Rights Reserved.
            </div>
        </footer>
    );
};
export default Footer;