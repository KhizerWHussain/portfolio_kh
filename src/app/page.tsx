import dynamic from "next/dynamic";
const Base = dynamic(() => import("@/Components/Base"), { ssr: false });

export default function Home() {
  return <Base />;
}
