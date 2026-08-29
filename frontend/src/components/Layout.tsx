import { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { ScrollToTop } from "./ScrollToTop";

export function Layout({ children }: { children: ReactNode }) {
  return <><ScrollToTop /><Header />{children}<Footer /></>;
}
