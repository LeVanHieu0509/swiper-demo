import { Suspense } from "react";

export const runtime = "edge";

export const metadata = {
  description: "Welcome",
  openGraph: {
    type: "website",
  },
};

export default async function WelcomePage() {
  return (
    <div>
      <Suspense>option 2{/* <WelcomeScreen /> */}</Suspense>
    </div>
  );
}
