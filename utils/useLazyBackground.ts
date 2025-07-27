'use client'
import { useEffect, useState } from "react";

export function useLazyBackground(image: string) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = image;
    img.onload = () => setLoaded(true);
  }, [image]);

  // ✅ Correctly map to /landingpage/blur/filename-blur.webp
  const blurVersion = image.replace(
    /^(.*\/)([^/]+)\.[a-z]+$/i,
    "$1blur/$2-blur.webp"
  );
  // Example: /landingpage/landingPage1.jpg → /landingpage/blur/landingPage1-blur.webp

  return loaded ? image : blurVersion;
}
