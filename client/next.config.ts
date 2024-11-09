import type { NextConfig } from "next"

const config: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.housepetscomic.com"
      }
    ]
  }
}

export default config
