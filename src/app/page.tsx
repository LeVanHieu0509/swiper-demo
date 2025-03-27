import Option1 from "@/screens/option-1";
import { Suspense } from "react";

export const runtime = "edge";

const baseUrl = process.env.NEXT_GRAPHQL_API_ENDPOINT
  ? `https://${process.env.NEXT_GRAPHQL_API_ENDPOINT}`
  : "http://localhost:3000";

export async function generateMetadata({ params }: any) {
  return {
    title: {
      default: "Homepage",
    },
    description: "Homepage", //description
    metadataBase: new URL(baseUrl),
    openGraph: {
      title: "", //og:title
      description: "", //og:description
    },
  };
}

export default async function HomePage({
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  return (
    <div>
      <Suspense>
        <Option1 />
      </Suspense>
    </div>
  );
}
