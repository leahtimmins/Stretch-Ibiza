import localFont from 'next/font/local'
import "./globals.css";
// import Footer from "@/components/blocks/Footer";
import Header from "@/components/blocks/Header";
import { Suspense } from 'react';
import { storyblokInit, apiPlugin} from "@storyblok/react/rsc"
import StoryblokProvider from "@/lib/StoryBlokProvider";
import { fetchSettings } from "@/lib/StoryBlok";
import { SettingsProvider } from "@/components/context/Settings";

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
          <body
            className={`${glacialRegular.className} ${glacialItalic.className} ${glacialBold.className} antialiased w-full`}
          >
            <SettingsProvider settings={settings}>
              <Header />
              <Suspense>{children}</Suspense>
              {/* <Footer /> */}
            </SettingsProvider>
            
          </body>
        </html>
    </StoryblokProvider>
  );
}
