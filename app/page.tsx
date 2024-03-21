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
  return ( <>
     <div className="text-center" id="header">
        <h2 className="py-24">About</h2>
    </div>
    <div className="text-center">
        <p className="text-pink px-36 py-12">nora graduated from NSCAD University with a Bachelor of Fine Arts, Majoring in Interdisciplinary Arts in 2022. nora is currently enrolled in the Full Stack Application Development program at NSCC. nora’s skills include graphic design, textiles, printmaking, as well as HTML, CSS and Javascript. nora hopes to use their education to create fun and interactive websites.</p>
        <img className="py-12 w-1/3" src="../images/NSCAD_Logo.svg_-1-edited.png" alt="NSCAD Logo"/>
        <img className="py-12 w-1/3" src="../images/default-nscc-1-edited.jpg" alt="NSCC Logo"/>
    </div>
    <footer className="text-center">
        <p className="text-sm">nora j saulnier c. 2023</p>
    </footer>
  </>
  )
}
