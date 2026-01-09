"use client";

import { useEffect } from "react";

interface AdSenseProps {
  adSlot: string;
  adFormat?: "auto" | "rectangle" | "vertical" | "horizontal";
  style?: React.CSSProperties;
  className?: string;
  fullWidthResponsive?: boolean;
}

export function AdSense({
  adSlot,
  adFormat = "auto",
  style,
  className = "",
  fullWidthResponsive = true,
}: AdSenseProps) {
  useEffect(() => {
    try {
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
    } catch (err) {
      console.error("AdSense error:", err);
    }
  }, []);

  return (
    <div className={`ad-container ${className}`} style={style}>
      <ins
        className="adsbygoogle"
        style={{
          display: "block",
          ...style,
        }}
        data-ad-client={
          process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || "ca-pub-XXXXXXXXXXXXXXXX"
        }
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive ? "true" : "false"}
      />
    </div>
  );
}

// Ad placement components
export function AdAboveFold() {
  // Temporarily hidden - will be enabled when ads are ready
  return null;
  
  // const adSlot =
  //   process.env.NEXT_PUBLIC_ADSENSE_SLOT_ABOVE_FOLD || "1234567890";
  // return (
  //   <div className="w-full max-w-[300px] mx-auto mb-6 min-h-[250px] flex items-center justify-center bg-[#f1f5f9] dark:bg-[#334155] rounded-lg relative">
  //     <AdSense
  //       adSlot={adSlot}
  //       adFormat="auto"
  //       className="w-full"
  //     />
  //     <p className="text-xs text-[#64748b] dark:text-[#94a3b8] absolute bottom-2 left-1/2 transform -translate-x-1/2 pointer-events-none z-0">
  //       Advertisement
  //     </p>
  //   </div>
  // );
}

export function AdBelowContent() {
  // Temporarily hidden - will be enabled when ads are ready
  return null;
  
  // const adSlot =
  //   process.env.NEXT_PUBLIC_ADSENSE_SLOT_BELOW_CONTENT || "1234567891";
  // return (
  //   <div className="w-full max-w-[728px] mx-auto my-8 min-h-[90px] flex items-center justify-center bg-[#f1f5f9] dark:bg-[#334155] rounded-lg relative">
  //     <AdSense
  //       adSlot={adSlot}
  //       adFormat="horizontal"
  //       className="w-full"
  //     />
  //     <p className="text-xs text-[#64748b] dark:text-[#94a3b8] absolute bottom-2 left-1/2 transform -translate-x-1/2 pointer-events-none z-0">
  //       Advertisement
  //     </p>
  //   </div>
  // );
}

export function AdSidebar() {
  // Temporarily hidden - will be enabled when ads are ready
  return null;
  
  // const adSlot = process.env.NEXT_PUBLIC_ADSENSE_SLOT_SIDEBAR || "1234567892";
  // return (
  //   <div className="w-[300px] min-h-[600px] flex items-center justify-center bg-[#f1f5f9] dark:bg-[#334155] rounded-lg sticky top-20 relative">
  //     <AdSense
  //       adSlot={adSlot}
  //       adFormat="vertical"
  //       className="w-full"
  //     />
  //     <p className="text-xs text-[#64748b] dark:text-[#94a3b8] absolute bottom-2 left-1/2 transform -translate-x-1/2 pointer-events-none z-0">
  //       Advertisement
  //     </p>
  //   </div>
  // );
}

