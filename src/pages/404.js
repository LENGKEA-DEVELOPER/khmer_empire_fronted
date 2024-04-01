import React from 'react';

const NotFound = () => {
    return (
        <main className="h-screen w-full flex flex-col justify-center items-center  ">
            <h1 className="text-9xl font-extrabold  tracking-widest">404</h1>
            <div className="bg-gradient px-2 text-sm rounded rotate-12 absolute">
                Page Not Found
            </div>

            <div className='mt-5'>
                <a href='/'>
                    <button
                        type="submit"
                        data-te-ripple-init data-te-ripple-color="light"
                        className="mb-6 inline-block w-full rounded bg-gradient  px-6 pt-2.5 pb-2 text-xs font-medium leading-normal text-white shadow-md transition"
                    >
                        Go Home
                    </button>
                </a>
            </div>
        </main>
    );
}

export default NotFound;