import JourneyClient from "./JourneyClient";

export default function Page({
  searchParams,
}: {
  searchParams?: { who?: string; postcode?: string };
}) {
  const whoRaw = (searchParams?.who || "self").toLowerCase();
  const who = whoRaw === "other" ? "other" : "self";
  const postcode = searchParams?.postcode || "";

  return <JourneyClient who={who} postcode={postcode} />;
}
