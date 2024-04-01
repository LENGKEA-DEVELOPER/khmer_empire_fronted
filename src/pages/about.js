import React from 'react';
import { MemberCard } from '../components/organisms/cards';
import { Title, Typograpy } from '../components/atoms';

const About = (index) => {
    return (

        <>
            <main className=' max-sm:px-[2%] sm:px-[5%] md:px-[5%] lg:px-[5%] xl:px-[5%] 2xl:px-[5%]'>
                <section className=" text-center pt-16 pb-5">
                    <Title title={"about us"} />
                    <div className="flex justify-center">
                        <hr className='w-[40px] h-[4px] rounded-lg bg-gradient my-3' />
                    </div>
                    <Typograpy text={'We gonna talk about the history of Cambodia as like each era of Cambodia, traditional, history of Khmer theatre, traditional dance and the inclusion of Khmer heritage as detail.'} />
                </section>

                <section className="   ">

                    <div className="mb-28 text-center">
                        <Title title={" meet the teams "} />
                    </div>
                    {index?.index?
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12">
                            {index?.index?.map((item, index) => {
                                return (
                                    <>
                                        <MemberCard
                                            key={index}
                                            profile={item.profile}
                                            name={item.name}
                                            job_title={item.position}
                                            linkedin={item.medias?.[0]?.link}
                                            facebook={item.medias?.[1]?.link}
                                            telegram={item.medias?.[2]?.link}
                                        />
                                    </>
                                );
                            })}
                        </div>
                    :""
                    }

                </section>
            </main>
        </>
    );
};

export default About;