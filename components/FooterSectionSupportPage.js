import Link from "next/link"

const FooterSectionSupportPage = () => {
    return (
        <footer className=" Kn">
            <div className="max-w-default py-12 md:py-[90px] mx-6 md:m-auto">
                <div className="md:text-left text-center">
                    <div className="md:flex text-slate-headline">
                        <div className="md:w-3/4 w-full">
                            <div className="md:my-0">
                                <div className="flex md:justify-start justify-center">
                                    <Link href="/home">
                                        <a className="flex">
                                            <img
                                                className="mr-4 w-[18.26px] h-[24.64px]"
                                                src="/images/logo.png"
                                                alt="Bursement logo"
                                            />
                                            <span className="self-center text-2xl font-normal whitespace-nowrap dark:text-white">
                                                Bursement
                                            </span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-3/4 w-full mt-[42px] md:mt-0">
                            <div>
                                <p className="text-[16px] font-medium uppercase">
                                    Why Bursement?
                                </p>
                                <ul className="mt-6 space-y-4 text-[#7E8597]">
                                    <Link href="/features">
                                        <a>
                                            <li className="mt-4 text-[14px] font-normal Kn">Feature</li>
                                        </a>
                                    </Link>
                                    <Link href="/pricing">
                                        <a>
                                            <li className="mt-4 text-[14px] font-normal Kn">Pricing</li>
                                        </a>
                                    </Link>
                                    <Link href="/security">
                                        <a>
                                            <li className="mt-4 text-[14px] font-normal Kn">
                                                Security
                                            </li>
                                        </a>
                                    </Link>
                                    <Link href="/Bursement vs. the competition">
                                        <a>
                                            <li className="mt-4 text-[14px] font-normal Kn">
                                                Bursement vs. the competition
                                            </li>
                                        </a>
                                    </Link>
                                    <Link href="/Bursement vs. the competition">
                                        <a>
                                            <li className="mt-4 text-[14px] font-normal Kn">
                                                Download Bursement
                                            </li>
                                        </a>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                        <div className="md:w-4/4 w-full mt-[42px] md:mt-0">
                            <div>
                                <p className="text-[16px] font-medium uppercase">Company</p>
                                <ul className="mt-6 space-y-4 text-[#7E8597]">
                                    <Link href="/about">
                                        <a>
                                            <li className="mt-4 text-[14px] font-normal Kn">About</li>
                                        </a>
                                    </Link>
                                    <Link href="/careers">
                                        <a>
                                            <li className="mt-4 text-[14px] font-normal Kn">Careers</li>
                                        </a>
                                    </Link>

                                    <Link href="/privacy">
                                        <a>
                                            <li className="mt-4 text-[14px] font-normal Kn">Privacy</li>
                                        </a>
                                    </Link>
                                    <Link href="/terms">
                                        <a>
                                            <li className="mt-4 text-[14px] font-normal Kn">Terms</li>
                                        </a>
                                    </Link>
                                    <Link href="/contact">
                                        <a>
                                            <li className="mt-4 text-[14px] font-normal Kn">Contact</li>
                                        </a>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="space-y-6 mt-[60px] md:space-x-6 md:flex md:space-y-0">
                    <div className="flex items-center md:justify-start justify-center space-x-6 text-[#7E8597]">
                        <p className="text-[13px]">© 2022 Bursement</p>
                        <p className="text-[13px]">Terms</p>
                        <p className="text-[13px]">Privacy</p>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default FooterSectionSupportPage;