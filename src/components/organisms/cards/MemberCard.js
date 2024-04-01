import React from 'react';

const MemberCard = ({ profile, name, job_title, linkedin, facebook, telegram }) => {
    return (
        <div className="mb-20 sm:mb-20 md:mb-20 lg:mb-20 xl:mb-20">
            <div
                className="block h-full rounded-lg bg-gradient shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  ">
                <div className="flex justify-center">
                    <div className="flex justify-center -mt-[75px]">
                        <img
                            src={profile}
                            className="mx-auto rounded-full w-[150px] border-[3px] border-white border-solid  shadow-[0_2px_8px_0_rgba(0,0,0,.1)]" alt="profile" />
                    </div>
                </div>
                <div className="p-6 text-center">
                    <h5 className="mb-4 text-lg font-bold text-white ">{name}</h5>
                    <p className="mb-6 text-white ">{job_title}</p>
                    <ul className="mx-auto flex list-inside justify-center">
                        <a href={linkedin} target="_blank" className="px-2">
                            <svg class="h-5 w-5 text-white " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" />  <circle cx="4" cy="4" r="2" /></svg>
                        </a>
                        <a href={facebook} target="_blank" className="px-2">
                            <svg class="h-5 w-5 text-white  " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                        </a>
                        <a href={telegram} target="_blank" className="px-2">
                            <svg class="h-5 w-5 text-white  " width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" /></svg>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MemberCard;