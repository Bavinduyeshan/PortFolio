import PropTypes from "prop-types";

export function Arrow({ diagonal = false, className = "" }) {
  return (
    <svg
      className={`icon ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h15m-6-6 6 6-6 6"} />
    </svg>
  );
}
Arrow.propTypes = { diagonal: PropTypes.bool, className: PropTypes.string };

export function Icon({ name, className = "" }) {
  const paths = {
    code: (
      <>
        <path d="m8 8-4 4 4 4m8-8 4 4-4 4m-3-11-2 14" />
      </>
    ),
    web: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18M7 6.5h.01m3 0h.01M7 13h4m-4 3h8" />
      </>
    ),
    mobile: (
      <>
        <rect x="6" y="2" width="12" height="20" rx="3" />
        <path d="M10 5h4m-3 14h2" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    pin: (
      <>
        <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
        <circle cx="12" cy="10" r="2" />
      </>
    ),
    check: <path d="m5 12 4 4 10-10" />,
    github: (
      <>
        <path d="M9 19c-4.3 1.3-4.3-2.2-6-2.7M15 22v-3.4c.03-.8-.25-1.5-.8-2.1 2.6-.3 5.3-1.3 5.3-5.8 0-1.3-.5-2.4-1.3-3.2.1-.3.6-1.6-.1-3.2 0 0-1.1-.3-3.4 1.2a12 12 0 0 0-6.2 0C6.1 4 5 4.3 5 4.3c-.7 1.6-.2 2.9-.1 3.2A4.5 4.5 0 0 0 3.6 11c0 4.4 2.7 5.4 5.3 5.7-.5.5-.8 1.2-.8 2V22" />
      </>
    ),
    linkedin: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M7 10v7m0-10h.01M11 17v-7m0 3a3 3 0 0 1 6 0v4" />
      </>
    ),
  };
  return (
    <svg
      className={`icon ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name] ?? paths.code}
    </svg>
  );
}
Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};
