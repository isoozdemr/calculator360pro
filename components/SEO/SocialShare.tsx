"use client";

import { SITE_URL } from "@/lib/constants";

interface SocialShareProps {
  url: string;
  title: string;
  description?: string;
}

export function SocialShare({ url, title, description }: SocialShareProps) {
  const fullUrl = url.startsWith("http") ? url : `${SITE_URL}${url}`;
  const shareUrl = encodeURIComponent(fullUrl);
  const shareTitle = encodeURIComponent(title);
  const shareDescription = description
    ? encodeURIComponent(description)
    : shareTitle;

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`,
    reddit: `https://reddit.com/submit?url=${shareUrl}&title=${shareTitle}`,
    email: `mailto:?subject=${shareTitle}&body=${shareDescription}%20${shareUrl}`,
  };

  return (
    <div className="flex flex-wrap gap-3 items-center mt-6 pt-6 border-t border-[#e2e8f0]">
      <span className="text-sm font-semibold text-[#64748b]">Share:</span>
      <div className="flex gap-2">
        <a
          href={shareLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-[#1877f2] text-white rounded-lg hover:bg-[#166fe5] transition-colors text-sm font-medium"
          aria-label="Share on Facebook"
        >
          Facebook
        </a>
        <a
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-[#1da1f2] text-white rounded-lg hover:bg-[#1a91da] transition-colors text-sm font-medium"
          aria-label="Share on Twitter"
        >
          Twitter
        </a>
        <a
          href={shareLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-[#0077b5] text-white rounded-lg hover:bg-[#006399] transition-colors text-sm font-medium"
          aria-label="Share on LinkedIn"
        >
          LinkedIn
        </a>
        <a
          href={shareLinks.reddit}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-[#ff4500] text-white rounded-lg hover:bg-[#e63e00] transition-colors text-sm font-medium"
          aria-label="Share on Reddit"
        >
          Reddit
        </a>
        <a
          href={shareLinks.email}
          className="px-4 py-2 bg-[#64748b] text-white rounded-lg hover:bg-[#475569] transition-colors text-sm font-medium"
          aria-label="Share via Email"
        >
          Email
        </a>
      </div>
    </div>
  );
}

