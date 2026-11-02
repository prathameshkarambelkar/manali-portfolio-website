import type { SVGProps } from "react";

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.1" />
      <circle cx="17.4" cy="6.6" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function PinterestIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M9.4 20c.7-1.9 1.6-5.1 2.1-7.4" />
      <path d="M8.6 10.2c0-2 1.5-3.7 3.8-3.7 2.1 0 3.4 1.3 3.4 3.1 0 2.3-1.2 4.1-3 4.1-.9 0-1.6-.7-1.4-1.6" />
    </svg>
  );
}

export function YoutubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
      <path d="m10.4 9.4 4.6 2.6-4.6 2.6z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function WhatsappIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M20.8 11.6a8.7 8.7 0 0 1-12.9 7.6L3 21l1.9-4.7A8.7 8.7 0 1 1 20.8 11.6Z" />
      <path d="M9 8.6c.2 2.6 2.1 4.5 4.7 4.7l.8-1.2 1.8.6c-.3 1.2-1.5 1.9-2.7 1.8-3-.3-5.5-2.8-5.8-5.8-.1-1.2.6-2.4 1.8-2.7l.6 1.8L9 8.6Z" />
    </svg>
  );
}
