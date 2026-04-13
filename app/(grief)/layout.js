import Header from "@/components/blocks/Header";
import { Suspense } from "react";

export default function GriefLayout({ children }) {
  return (
    <>
      <Header />
      <Suspense>{children}</Suspense>
    </>
  );
}