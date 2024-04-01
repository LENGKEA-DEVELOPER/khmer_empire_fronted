import React from 'react';
import emailjs from '@emailjs/browser';


const FormContact = () => {
    const [loading, setLoading] = React.useState(false);

    function handeSendEmail(e) {
        setLoading(true);
        e.preventDefault();
        emailjs.sendForm("s@sleanghak.it@2024", "t@sleanghak.it@2024", e.target, "Ptv7cbGbrHin2UD1p",)
            .then((res) => {
                console.log("success");
                e.target.elements.name.value = "";
                e.target.elements.email.value = "";
                e.target.elements.message.value = "";
                setLoading(false);
            }).catch((error) => {
                console.log(error);
                setLoading(false);
            })
    }

    return (

        <form onSubmit={handeSendEmail}>

            <div className="relative mb-6" data-te-input-wrapper-init>
                <input
                    type="text"
                    name="name"
                    required
                    className="peer block min-h-[auto] w-full rounded border-[1px] border-[#c2c2c2] border-solid bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none    "
                    id="exampleInput90"
                    placeholder="Name"
                />
            </div>

            <div className="relative mb-6" data-te-input-wrapper-init>
                <input
                    type="email"
                    name="email"
                    required
                    className="peer block min-h-[auto] w-full rounded border-[1px] border-[#c2c2c2] border-solid bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none  "
                    id="exampleInput91"
                    placeholder="Email"
                />
            </div>

            <div className="relative mb-6" data-te-input-wrapper-init>
                <textarea
                    required
                    name="message"
                    className="peer block min-h-[auto] w-full rounded border-[1px] border-[#c2c2c2] border-solid bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none  "
                    id="exampleFormControlTextarea1"
                    rows="4"
                    placeholder="Message"
                >
                </textarea>
            </div>

            <button
                disabled={loading}
                type="submit"
                data-te-ripple-init data-te-ripple-color="light"
                className="mb-6 inline-block w-full rounded bg-gradient  px-6 pt-2.5 pb-2 text-xs font-medium leading-normal text-white shadow-md transition"
            >
                {loading ? "Loading..." : "Send Message"}
            </button>

        </form>
    );
};

export default FormContact;