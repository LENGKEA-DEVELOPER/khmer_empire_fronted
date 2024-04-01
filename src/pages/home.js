import React, { useEffect, useState } from 'react';
import { Typograpy, Title } from '../components/atoms';
import { Carousel } from '../components/molecules';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Barloading from "../components/organisms/barloading";
import '../styles/skeletonsize.css'

const Home = (index) => {

    const s1 = index?.index?.[0];
    const s2 = index?.index?.[1];
    const s3 = index?.index?.[2];

    return (
        <>
    
            <div>
                {index?
                    <section>
                        <Carousel data={index} />
                    </section>
                :""
                }
                <section className='max-sm:px-[2%] sm:px-[5%] md:px-[5%] lg:px-[5%] xl:px-[5%] 2xl:px-[5%] '>
                    <div className='max-sm:py-[2%] sm:py-[5%] md:py-[5%] lg:py-[5%] xl:py-[5%] 2xl:py-[5%]'>


                        <div className='text-center mb-8'>
                            <Title title={"OUR STORY"} />
                            <div className="flex justify-center">
                                <hr className='w-[40px] h-[4px] rounded-lg bg-gradient my-3' />
                            </div>
                            <Typograpy text={'We gonna talk about the history of Cambodia as like each era of Cambodia, traditional, history of Khmer theatre, traditional dance and the inclusion of Khmer heritage as detail.'} />
                        </div>



                        <div className="  text-center md:text-left">

                            {/* Cambodia History */}
                            {s1?
                                <div className="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
                                    <div className="mb-6 md:mb-0">
                                        <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg  "
                                            data-te-ripple-init data-te-ripple-color="light">
                                            <img src={s1?.thumbnail} className="w-full" alt="cambodia-history" />
                                            <div
                                                className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className='mb-3'>
                                            <Title title={s1?.title} />
                                        </div>

                                        <p className="mb-6 text-neutral-500  ">
                                            <small>Published <u>{s1?.created_at}</u> by
                                                <Link to="/about"> {s1?.created_by}</Link></small>
                                        </p>
                                        <div>
                                            <Typograpy text={s1?.description} />
                                            <a className='underline text-blue-600' href='#'>read more</a>
                                        </div>
                                    </div>
                                </div>
                            :""
                            }
                            {/* Culture & Civilization */}
                            {s2?
                                <div className="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
                                    <div className="mb-6 md:order-2 md:mb-0">
                                        <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg  "
                                            data-te-ripple-init data-te-ripple-color="light">
                                            <img src={s2?.thumbnail} className="w-full" alt="Louvre" />
                                            <div
                                                className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                                            </div>
                                        </div>
                                    </div>

                                    <div className="md:order-1">
                                        <div className='mb-3'>
                                            <Title title={s2?.title} />
                                        </div>

                                        <p className="mb-6 text-neutral-500  ">
                                            <small>Published <u>{s2?.created_at}</u> by
                                                <Link to="/about"> {s2?.created_by}</Link></small>
                                        </p>
                                        <div>
                                            <Typograpy text={s2?.description} />
                                            <a className='underline text-blue-600' href='#'>read more</a>
                                        </div>
                                    </div>
                                </div>
                            :""
                            }
                            {/* Cambodia Art */}
                            {s3?
                                <div className="max-sm:mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
                                    <div className="mb-6 md:mb-0">
                                        <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg  "
                                            data-te-ripple-init data-te-ripple-color="light">
                                            <img src={s3?.thumbnail} className="w-full" alt="Louvre" />
                                            <div
                                                className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className='mb-3'>
                                            <Title title={"Cambodia Art"} />
                                        </div>
                                        <p className="mb-6 text-neutral-500  ">
                                            <small>Published <u>{s3?.created_at}</u> by
                                                <Link to="/about"> {s3?.created_by}</Link></small>
                                        </p>
                                        <div>
                                            <Typograpy text={s3?.description} />
                                            <a className='underline text-blue-600' href='#'>read more</a>
                                        </div>
                                    </div>
                                </div>
                            :""
                            }

                        </div>
                    </div>
                </section>
            </div>
 
        </>
    )
};

export default Home;