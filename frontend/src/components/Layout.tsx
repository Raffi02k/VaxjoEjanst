import { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { PageTransition } from "./PageTransition";
import { ScrollToTop } from "./ScrollToTop";

export function Layout({ children }: { children: ReactNode }) {
  return <><ScrollToTop /><Header /><PageTransition>{children}</PageTransition><Footer /></>;
}
