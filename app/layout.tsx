import "./globals.css";
import "./typography.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TNFD Workshop — Technical & Spatial Proposal",
  description: "Technical and spatial proposal for the TNFD Workshop at Dusit Thani Lakeview.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
