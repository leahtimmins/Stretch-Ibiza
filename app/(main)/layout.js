import Header from "@/components/blocks/Header";
import Footer from "@/components/blocks/Footer";
import { Suspense } from "react";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <Suspense>{children}</Suspense>
      <Footer />
    </>
  );
}