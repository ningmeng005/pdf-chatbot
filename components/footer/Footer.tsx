import FooterLinks from "@/components/footer/FooterLinks";
import FooterProducts from "@/components/footer/FooterProducts";
import LangLinks from "@/components/footer/LangLinks";
import {siteConfig} from "@/config/site";
import Link from "next/link";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons'; // 引入从 solid 图标包中的箭头图标
// import { faFacebookF, faTwitter, faPinterestP, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'; // 从 brands 图标包中引入社交媒体图标

const FooterProductsNavLinks = [
    {
        title: 'Products',
        children: [
            {href: '/pdf-chatbot', title: 'PDF Chatbot'},
            {href: '/use-cases', title: 'Use Cases'},
            {href: '/blog', title: 'Blog'},
            {href: '/pdf-compressor', title: 'PDF Compressor'},
            {href: '/pdf-to-png', title: 'PDF to PNG'},
            {href: '/pdf-merger', title: 'PDF Merger'},
            {href: '/more-pdf-tools', title: 'More PDF Tools'},
        ]
    },
];

const FooterCompareNavLinks = [
    {
        title: 'Compare',
        children: [
            {href: '/chatpdf-alternative', title: 'ChatPDF Alternative'},
            {href: '/pdfai-alternative', title: 'PDFAI Alternative'},
        ]
    },
];

const FooterAboutNavLinks = [
    {
        title: 'About',
        children: [
            {href: 'about-us', title: 'About Us'},
            {href: 'contact-us', title: 'Contact Us'},
            {href: 'terms-and-conditions', title: 'Terms and Conditions'},
            {href: 'privacy-policy', title: 'Privacy Policy'},
        ]
    },
];

const Footer = () => {
    const d = new Date();
    const currentYear = d.getFullYear();
    const { authors } = siteConfig;

    return (
        <>
            <section className="bg-footer bg-lightan">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-4">


                            <div className="mt-4">

                                <img src="/images/logo-dark.png" alt="" height="22"/>

                                <p className="text-muted mt-3 pt-1">In an ideal world this text wouldn’t exist, a client
                                    would
                                    acknowledge
                                    the importance of having web copy before the design starts.</p>
                                

                                <div className="team-social mt-4">
                                    <ul className="list-inline mb-0">
                                        <li className="list-inline-item">
                                            <a href="" className="text-reset"><i className="mdi mdi-facebook"></i></a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="" className="text-reset"><i className="mdi mdi-twitter"></i></a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="" className="text-reset"><i className="mdi mdi-google"></i></a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="" className="text-reset"><i className="mdi mdi-pinterest"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>


                        <div className="col-lg-7 offset-lg-1">
                            <div className="row">
                                <div className="col-lg-4">
                                    {FooterProductsNavLinks.map((section) => (
                                        <div key={section.title} className="mt-4">
                                            <h5 className="f-18">{section.title}</h5>
                                            <ul className="list-unstyled footer-link mt-3">
                                                {section.children.map((item) => (
                                                    <li key={item.title}>
                                                        <Link href={item.href} legacyBehavior><a>{item.title}</a></Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>

                                <div className="col-lg-4">
                                    {FooterCompareNavLinks.map((section) => (
                                        <div key={section.title} className="mt-4">
                                            <h5 className="f-18">{section.title}</h5>
                                            <ul className="list-unstyled footer-link mt-3">
                                                {section.children.map((item) => (
                                                    <li key={item.title}>
                                                        <Link href={item.href} legacyBehavior><a>{item.title}</a></Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                                <div className="col-lg-4">
                                    {FooterAboutNavLinks.map((section) => (
                                        <div key={section.title} className="mt-4">
                                            <h5 className="f-18">{section.title}</h5>
                                            <ul className="list-unstyled footer-link mt-3">
                                                {section.children.map((item) => (
                                                    <li key={item.title}>
                                                        <Link href={item.href} legacyBehavior><a>{item.title}</a></Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>

                    </div>

                    <hr className="my-5 border-t-1 border-solid border-[#9197b5] border-opacity-25"/>

                    <div className="row">
                        <div className="col-lg-12">
                            <p className="text-center text-muted mb-0 f-15">
                                {`Copyright © ${currentYear} `} All Rights Reserved By <Link
                                href="/">{authors[0].name}</Link>
                            </p>
                        </div>
                    </div>

                </div>
            </section>
            {/*<section className="bg-[#1f2128] pt-[180px] pb-[20px]">*/}
            {/*    <div className="max-w-[1280px] px-[15px] mx-auto">*/}
            {/*        <div className="flex flex-row">*/}
            {/*            <div className="flex-[0_0_40%] max-w-[40%] px-[15px]">*/}
            {/*                <div className="pr-[70px] mt-[30px]">*/}
            {/*                    <div className="logo">*/}
            {/*                        <a href="#">*/}
            {/*                            <img src='/assets/images/logo-4.png' alt=""/>*/}
            {/*                        </a>*/}
            {/*                    </div>*/}
            {/*                    <p className="pt-[25px] text-[16px] font-[400] leading-[24px] text-[#FFFFFF]">*/}
            {/*                        Read & learn lengthy documents faster than never before.*/}
            {/*                    </p>*/}
            {/*                    <a href="#" className="block mt-[15px] text-[15px] font-[500] leading-[24px] text-[#FFFFFF]"> Start Chatting Online with Your PDFs Now!</a>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="flex-[0_0_20%] max-w-[20%] px-[15px]">*/}
            {/*                {FooterProductsNavLinks.map((section) => (*/}
            {/*                    <div key={section.title} className="mt-[30px] pl-[25px]">*/}
            {/*                        <h4 className="text-[20px] font-[700] mb-[10px] text-[#FFFFFF]">{section.title.toUpperCase()}</h4>*/}
            {/*                        <ul>*/}
            {/*                            {section.children.map((item) => (*/}
            {/*                                <li key={item.title}>*/}
            {/*                                    <Link href={item.href} legacyBehavior>*/}
            {/*                                        <a className="block text-[15px] font-[500] mb-[6px] text-[#A2A1A9] hover:text-white transition-all duration-300 ease-in-out transform hover:translate-x-[10px]"*/}
            {/*                                        >{item.title}</a>*/}
            {/*                                    </Link>*/}
            {/*                                </li>*/}
            {/*                            ))}*/}
            {/*                        </ul>*/}
            {/*                    </div>*/}
            {/*                ))}*/}
            {/*            </div>*/}
            {/*            <div className="flex-[0_0_20%] max-w-[20%] px-[15px]">*/}
            {/*                {FooterCompareNavLinks.map((section) => (*/}
            {/*                    <div key={section.title} className="mt-[30px] pl-[25px]">*/}
            {/*                        <h4 className="text-[20px] font-[700] mb-[10px] text-[#FFFFFF]">{section.title.toUpperCase()}</h4>*/}
            {/*                        <ul>*/}
            {/*                            {section.children.map((item) => (*/}
            {/*                                <li key={item.title}>*/}
            {/*                                    <Link href={item.href} legacyBehavior>*/}
            {/*                                        <a className="block text-[15px] font-[500] mb-[6px] text-[#A2A1A9] hover:text-white transition-all duration-300 ease-in-out transform hover:translate-x-[10px]"*/}
            {/*                                        >{item.title}</a>*/}
            {/*                                    </Link>*/}
            {/*                                </li>*/}
            {/*                            ))}*/}
            {/*                        </ul>*/}
            {/*                    </div>*/}
            {/*                ))}*/}
            {/*            </div>*/}
            {/*            <div className="flex-[0_0_20%] max-w-[20%] px-[15px]">*/}
            {/*                {FooterAboutNavLinks.map((section) => (*/}
            {/*                    <div key={section.title} className="mt-[30px] pl-[25px]">*/}
            {/*                        <h4 className="text-[20px] font-[700] mb-[10px] text-[#FFFFFF]">{section.title.toUpperCase()}</h4>*/}
            {/*                        <ul>*/}
            {/*                            {section.children.map((item) => (*/}
            {/*                                <li key={item.title}>*/}
            {/*                                    <Link href={item.href} legacyBehavior>*/}
            {/*                                        <a className="block text-[15px] font-[500] mb-[6px] text-[#A2A1A9] hover:text-white transition-all duration-300 ease-in-out transform hover:translate-x-[10px]"*/}
            {/*                                        >{item.title}</a>*/}
            {/*                                    </Link>*/}
            {/*                                </li>*/}
            {/*                            ))}*/}
            {/*                        </ul>*/}
            {/*                    </div>*/}
            {/*                ))}*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="row">*/}
            {/*            <div className="col-lg-12">*/}
            {/*                <div*/}
            {/*                    className="mt-[50px] pt-[20px] border-solid border-t-1 border-[#E1E5EC] border-opacity-50">*/}
            {/*                    <div className="flex justify-center text-[15px] font-[500] mb-[6px] text-[#FFFFFF] ">*/}
            {/*                        <div>{`Copyright © ${currentYear} `}</div>*/}
            {/*                        <div>&nbsp;{`All Rights Reserved by `}*/}
            {/*                            <Link href="/" className="text-[#3b82f6] hover:text-white">*/}
            {/*                                {authors[0].name}*/}
            {/*                            </Link>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}
        </>
    );
};

export default Footer;
