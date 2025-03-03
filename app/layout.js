import localFont from 'next/font/local'
import "./globals.css";
import Footer from "@/components/blocks/Footer";
import Header from "@/components/blocks/Header";
import { Suspense } from 'react';
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc"
import StoryblokProvider from "@/lib/StoryBlokProvider";
import { fetchSettings } from "@/lib/StoryBlok";
import { SettingsProvider } from "@/components/context/Settings";
import Script from "next/script";


const glacialBold = localFont({
  src: '../public/fonts/GlacialIndifference-Bold.otf',
  display: 'swap',
  variable: '--font-glacialBold',
})

const glacialItalic = localFont({
  src: '../public/fonts/GlacialIndifference-Italic.otf',
  display: 'swap',
  variable: '--font-glacialItalic',
})

const glacialRegular = localFont({
  src: '../public/fonts/GlacialIndifference-Regular.otf',
  display: 'swap',
  variable: '--font-glacialRegular',
})

export const metadata = {
  title: "Stretch Ibiza",
  description: "Lorum Ipsum",
};


export const revalidate = 1;

storyblokInit({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  cache: {
    clear: "auto",
    type: "memory",
  }
})

export default async function RootLayout({ children }) {
  const settings = await fetchSettings();

  return (
    <StoryblokProvider>

      <html lang="en" className="w-screen">
        <head>
          <Script
            id="mcjs"
            strategy="afterInteractive" // Ensures the script loads after page hydration
            dangerouslySetInnerHTML={{
              __html: `!function(c,h,i,m,p){
              m=c.createElement(h),
              p=c.getElementsByTagName(h)[0],
              m.async=1,
              m.src=i,
              p.parentNode.insertBefore(m,p)
            }(document,"script","https://chimpstatic.com/mcjs-connected/js/users/57d0c9b60c47da3fb219b36cd/7ea86ea1a0f0b85649fc5b2c8.js");`,
            }}
          />
        </head>
        <body
          className={`${glacialRegular.className} ${glacialItalic.className} ${glacialBold.className} antialiased w-full`}
        >


          <SettingsProvider settings={settings}>
            <Header />
            <Suspense>{children}</Suspense>
            <Footer />
          </SettingsProvider>

        </body>
      </html>
    </StoryblokProvider>
  );
}