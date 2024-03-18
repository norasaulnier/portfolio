import { Metadata } from "next"

export const metadata: Metadata = {
  title: "nora j saulnier",
  openGraph: {
    url: "https://next-enterprise.vercel.app/",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://raw.githubusercontent.com/Blazity/next-enterprise/main/.github/assets/project-logo.png",
      },
    ],
  },
}

export default function Web() {
  return (
        <div>hi</div>
  )
}
