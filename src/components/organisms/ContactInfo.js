import React from 'react';

const ContactInfo = () => {
    return (
        <div className="flex flex-wrap">
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                <div className="flex items-start">
                    <div className="shrink-0">
                        <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                stroke="currentColor" className="h-6 w-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                            </svg>
                        </div>
                    </div>
                    <div className="ml-6 grow">
                        <p className="mb-2 font-bold dark:text-white">
                            Phone
                        </p>

                        <p className="text-neutral-500 dark:text-neutral-200">
                            (+855) 087 84 19 63
                        </p>
                    </div>
                </div>
            </div>

            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                <div className="flex items-start">
                    <div className="shrink-0">
                        <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                            <svg className="h-6 w-6" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <rect x="3" y="5" width="18" height="14" rx="2" />  <polyline points="3 7 12 13 21 7" /></svg>
                        </div>
                    </div>
                    <div className="ml-6 grow">
                        <p className="mb-2 font-bold dark:text-white">
                            Email
                        </p>

                        <p className="text-neutral-500 dark:text-neutral-200">
                            infor@gmail.com
                        </p>
                    </div>
                </div>
            </div>

            <div
                className="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:mb-12 lg:w-full lg:px-6 xl:w-6/12">
                <div className="align-start flex">
                    <div className="shrink-0">
                        <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">

                            <svg className="h-6 w-6" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" /></svg>
                        </div>
                    </div>
                    <div className="ml-6 grow">
                        <p className="mb-2 font-bold dark:text-white">Telegram</p>

                        <p className="text-neutral-500 dark:text-neutral-200">
                            <a className='text-primary' href='#' target="_blank"> @infor_admin</a>
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:mb-12 xl:w-6/12">
                <div className="align-start flex">
                    <div className="shrink-0">
                        <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                stroke="currentColor" className="h-6 w-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                        </div>
                    </div>
                    <div className="ml-6 grow">
                        <p className="mb-2 font-bold dark:text-white">Address</p>

                        <p className="text-neutral-500 dark:text-neutral-200">
                            Phnom Penh, Cambodia
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ContactInfo;