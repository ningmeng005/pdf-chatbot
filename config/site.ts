import {SiteConfig} from "@/types/siteConfig";
import {BsGithub, BsTwitterX, BsWechat} from "react-icons/bs";
import {MdEmail} from "react-icons/md";
import {SiBuymeacoffee, SiJuejin} from "react-icons/si";

const OPEN_SOURCE_URL = 'https://github.com/weijunext/landing-page-boilerplate'

const baseSiteConfig = {
    name: "PDF AI Chatbot: Free PDFGPT - The Best PDF AI Chatbot for Reading Any Documets Faster",
    description:
        "Use PDF AI Chatbot to chat with your PDF. This free PDFGPT will summarize and answer any questions from documents in no time. Just ask your pdf, AI will do the rest. ",
    url: "https://pdf-chatbot-ten-brown.vercel.app/",
    ogImage: "https://landingpage.weijunext.com/og.png",
    metadataBase: '/',
    keywords: ["landing page boilerplate", "landing page template", "awesome landing page", "next.js landing page"],
    authors: [
        {
            name: "PDF AI Chatbot",
            url: "https://weijunext.com",
            twitter: 'https://twitter.com/weijunext',
        }
    ],
    creator: '@weijunext',
    openSourceURL: 'https://github.com/weijunext/landing-page-boilerplate',
    themeColors: [
        {media: '(prefers-color-scheme: light)', color: 'white'},
        {media: '(prefers-color-scheme: dark)', color: 'black'},
    ],
    nextThemeColor: 'light', // next-theme option: system | dark | light
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/logo.png",
    },
}

export const siteConfig: SiteConfig = {
    ...baseSiteConfig,
    openGraph: {
        type: "website",
        locale: "en_US",
        url: baseSiteConfig.url,
        title: baseSiteConfig.name,
        description: baseSiteConfig.description,
        siteName: baseSiteConfig.name,
    },
    twitter: {
        card: "summary_large_image",
        title: baseSiteConfig.name,
        description: baseSiteConfig.description,
        images: [`${baseSiteConfig.url}/og.png`],
        creator: baseSiteConfig.creator,
    },
    // 不需要再提供 headerLinks, footerLinks, footerProducts
}
