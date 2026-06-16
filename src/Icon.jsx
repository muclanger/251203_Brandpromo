import React from 'react';

export const Icon = ({ children, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {children}
  </svg>
);

export const ClapperboardIcon = (props) => (
  <Icon {...props}><path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z" /><path d="m7.1 12.3 2.3 6.4c.3 1.1 1.5 1.8 2.6 1.5l11-3.9c1.1-.3 1.8-1.5 1.5-2.6l-2.3-6.4c-.3-1.1-1.5-1.8-2.6-1.5l-11 3.9c-1.1.3-1.8 1.5-1.5 2.6Z" /><path d="m11.2 6.8-1.5-4.2" /><path d="m15.5 5.1-1.5-4.2" /></Icon>
);
export const LayoutTemplateIcon = (props) => (
  <Icon {...props}><rect width="18" height="7" x="3" y="3" rx="1" /><rect width="9" height="7" x="3" y="14" rx="1" /><rect width="5" height="7" x="16" y="14" rx="1" /></Icon>
);
export const BotIcon = (props) => (
  <Icon {...props}><path d="M12 8V4H8" /><rect width="16" height="12" x="4" y="8" rx="2" /><path d="M2 14h2" /><path d="M20 14h2" /><path d="M15 13v2" /><path d="M9 13v2" /></Icon>
);
export const MenuIcon = (props) => (
  <Icon {...props}><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></Icon>
);
export const MessageCircleIcon = (props) => (
  <Icon {...props}><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></Icon>
);
export const XIcon = (props) => (
  <Icon {...props}><path d="M18 6 6 18" /><path d="m6 6 12 12" /></Icon>
);
export const InstagramIcon = (props) => (
  <Icon {...props}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></Icon>
);
export const MailIcon = (props) => (
  <Icon {...props}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></Icon>
);