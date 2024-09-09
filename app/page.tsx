import { Vcomponent } from "@/components/component/vcomponent";
import { ClerkProvider } from "@clerk/nextjs";
import { Analytics } from "@vercel/analytics/react"
export default function Home() {
  return <ClerkProvider> <Analytics/> <Vcomponent /></ClerkProvider>
}