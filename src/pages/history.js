import React from 'react';
import { Typograpy, Title } from '../components/atoms';
import { Carousel } from '../components/molecules';
import { Link } from 'react-router-dom';


const History = (index) => {

    const s1 = index?.index?.[0]
    const s2 = index?.index?.[1]
    const s3 = index?.index?.[2]
    const s4 = index?.index?.[3]
    const s5 = index?.index?.[4]
    const s6 = index?.index?.[5]
    const s7 = index?.index?.[6]
    const s8 = index?.index?.[7]
    const s9 = index?.index?.[8]

    return (
        <>
            {index?
                <section>
                    <Carousel data={index} />
                </section>
            :""
            }
            <section className='max-sm:px-[2%] sm:px-[5%] md:px-[5%] lg:px-[5%] xl:px-[5%] 2xl:px-[5%] '>
                <div className='max-sm:py-[2%] sm:py-[5%] md:py-[5%] lg:py-[5%] xl:py-[5%] 2xl:py-[5%]'>
                    {s1?
                        <div className='text-center mb-6'>
                            <Title title={s1?.title} />
                            <div className="flex justify-center">
                                <hr className='w-[40px] h-[4px] rounded-lg bg-gradient my-3' />
                            </div>
                            <Typograpy text={s1?.description} />
                        </div>
                    :""
                    }


                    <div className="  text-center md:text-left">

                        {/* ART ARCHITECTURE OF CAMBODIA */}
                        {s2?
                            <div className="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
                                <div className="mb-6 md:mb-0">
                                    <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg  "
                                        data-te-ripple-init data-te-ripple-color="light">
                                        <img src={s2?.thumbnail} className="w-full" alt="cambodia-history" />
                                        <div
                                            className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className='mb-3'>
                                        <Title title={s2?.title} />
                                    </div>

                                    <p className="mb-6 text-neutral-500  ">
                                        <small>Published <u>{s2?.created_at}</u> by
                                            <Link to="/about"> {s2?.created_by}</Link></small>
                                    </p>
                                    <div>
                                        <Typograpy text={s2?.description} />
                                    </div>
                                </div>
                            </div>
                        :""
                        }

                        {/* ART SCULPTURE OF CAMBODIA*/}
                        {s3?
                            <div className="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
                                <div className="mb-6 md:order-2 md:mb-0">
                                    <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg  "
                                        data-te-ripple-init data-te-ripple-color="light">
                                        <img src={s3?.thumbnail} className="w-full" alt="Louvre" />
                                        <div
                                            className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                                        </div>
                                    </div>
                                </div>

                                <div className="md:order-1">
                                    <div className='mb-3'>
                                        <Title title={s3?.title} />
                                    </div>

                                    <p className="mb-6 text-neutral-500  ">
                                        <small>Published <u>{s3?.created_at}</u> by
                                            <Link to="/about"> {s3?.created_by}</Link></small>
                                    </p>
                                    <div>
                                        <Typograpy text={s3?.description} />
                                    </div>
                                </div>
                            </div>
                        :""
                        }

                        {/* ART DRAWING OF CAMBODIA */}
                        {s4?
                            <div className="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
                                <div className="mb-6 md:mb-0">
                                    <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg  "
                                        data-te-ripple-init data-te-ripple-color="light">
                                        <img src={s4?.thumbnail} className="w-full" alt="Louvre" />
                                        <div
                                            className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className='mb-3'>
                                        <Title title={s4?.title} />
                                    </div>
                                    <p className="mb-6 text-neutral-500  ">
                                        <small>Published <u>{s4?.created_at}</u> by
                                            <Link to="/about"> {s4?.created_by}</Link></small>
                                    </p>
                                    <div>
                                        <Typograpy text={s4?.description} />
                                    </div>
                                </div>
                            </div>
                        :""
                        }
                        {/*ART MUSIC OF CAMBODIA*/}
                        {s5?
                            <div className="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
                                <div className="mb-6 md:order-2 md:mb-0">
                                    <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg  "
                                        data-te-ripple-init data-te-ripple-color="light">
                                        <img src={s5?.thumbnail} className="w-full" alt="Louvre" />
                                        <div
                                            className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                                        </div>
                                    </div>
                                </div>

                                <div className="md:order-1">
                                    <div className='mb-3'>
                                        <Title title={s5?.title} />
                                    </div>

                                    <p className="mb-6 text-neutral-500  ">
                                        <small>Published <u>{s5?.created_at}</u> by
                                            <Link to="/about"> {s5?.created_by}</Link></small>
                                    </p>
                                    <div>
                                        <Typograpy text={s5?.description} />
                                    </div>
                                </div>
                            </div>
                        :""
                        }
                        {/* LITERATURE OF CAMBODIA */}
                        {s6?
                        <div className="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
                            <div className="mb-6 md:mb-0">
                                <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg  "
                                    data-te-ripple-init data-te-ripple-color="light">
                                    <img src={s6?.thumbnail} className="w-full" alt="Louvre" />
                                    <div
                                        className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className='mb-3'>
                                    <Title title={"LITERATURE OF CAMBODIA"} />
                                </div>
                                <p className="mb-6 text-neutral-500  ">
                                    <small>Published <u>{s6?.created_at}</u> by
                                        <Link to="/about"> {s6?.created_by}</Link></small>
                                </p>
                                <div>
                                    <Typograpy text={s6?.description} />
                                </div>
                            </div>
                        </div>
                        :""
                        }
                        {/*DANCE IN CAMBODIA*/}
                        {s7?
                            <div className="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
                                <div className="mb-6 md:order-2 md:mb-0">
                                    <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg  "
                                        data-te-ripple-init data-te-ripple-color="light">
                                        <img src={s7?.thumbnail} className="w-full" alt="Louvre" />
                                        <div
                                            className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                                        </div>
                                    </div>
                                </div>

                                <div className="md:order-1">
                                    <div className='mb-3'>
                                        <Title title={"DANCE IN CAMBODIA"} />
                                    </div>

                                    <p className="mb-6 text-neutral-500  ">
                                        <small>Published <u>{s7?.created_at}</u> by
                                            <Link to="/about"> {s7?.created_by}</Link></small>
                                    </p>
                                    <div>
                                        <Typograpy text={s7?.description} />
                                    </div>
                                </div>
                            </div>
                        :""
                        }

                        {/* THEATRE OF CAMBODIA */}
                        {s8?
                        <div className="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
                            <div className="mb-6 md:mb-0">
                                <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg  "
                                    data-te-ripple-init data-te-ripple-color="light">
                                    <img src={s8?.thumbnail} className="w-full" alt="Louvre" />
                                    <div
                                        className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className='mb-3'>
                                    <Title title={s8?.title} />
                                </div>
                                <p className="mb-6 text-neutral-500  ">
                                    <small>Published <u>{s8?.created_at}</u> by
                                        <Link to="/about"> {s8?.created_by}</Link></small>
                                </p>
                                <div>
                                    <Typograpy text={s8?.description} />
                                </div>

                            </div>
                        </div>
                        :""
                        }
                        


                    </div>


                </div>
            </section>

        </>
    );
};

export default History;