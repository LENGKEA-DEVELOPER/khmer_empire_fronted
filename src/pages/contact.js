import React from 'react';
import { GoogleMap, Title, Typograpy } from '../components/atoms';
import { BannerContact } from '../components/molecules';
import { FormContact, ContactInfo } from '../components/organisms';

const Contact = () => {
    return (
        <>
            <section className="mb-[2%]">
                {/* banner   */}
                <BannerContact />
                {/* contact */}
                <div className=" max-sm:px-[2%] sm:px-[5%] md:px-[5%] lg:px-[5%] xl:px-[5%] 2xl:px-[5%]">
                    <div
                        className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]"
                    >
                        {/* description contact*/}
                        <div className='text-center mb-6'>
                            <Title title={"contact information"} />
                            <div className="flex justify-center">
                                <hr className='w-[40px] h-[4px] rounded-lg bg-gradient my-3' />
                            </div>
                            <Typograpy text={"Don't hesitate to ask questions or make comments."} />
                        </div>

                        <div className="flex flex-wrap">
                            {/* form contact */}
                            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6 ">
                                <FormContact />
                            </div>
                            {/* contact info */}
                            <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12  xl:mt-[50px]">
                                <ContactInfo />
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            {/* map contact */}
            <section className='max-sm:my-[2%] sm:my-[5%] md:my-[5%] lg:my-[5%] xl:my-[5%] 2xl:my-[5%]' >
                <GoogleMap />
            </section>


        </>
    );
};
export default Contact;