import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Bilibili Store",
    short_name: "Bilibili",
    description: "An store website built with React, Next.js, and TypeScript",
    icons: [
      {
        src: "https://assets.berty.tech/files/favicon_berty--android-chrome-192x192_hu825b5c7b003d952812a2935e86ca290e_6997_192x0_resize_box_2.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "https://assets.berty.tech/files/favicon_berty--android-chrome-512x512_hu8c11226219fbafadc0690fa2ac23a909_19505_512x0_resize_box_2.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    theme_color: "#1f1f1f",
    background_color: "#1f1f1f",
    start_url: "/",
    display: "standalone",
    orientation: "portrait",
    // related_applications:[
    //     {
    //         platform: "play",
    //         url: "https://play.google.com/store/apps/details?id=com.bilibili.store",
    //         id: "com.bilibili.store"
    //     }
    //     ,
    //     {
    //         platform: "itunes",
    //         url: "https://apps.apple.com/us/app/bilibili-store/id1234567890",
    //         id: "1234567890"
    //     }
    //     ,...
    // ]
  };
}
