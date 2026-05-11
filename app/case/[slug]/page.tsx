import CasePageClient from "./CasePageClient";
import itemsData from "../../components/data";

export function generateStaticParams() {
  return Object.keys(itemsData).map((slug) => ({ slug }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <CasePageClient slug={slug} />;
}
