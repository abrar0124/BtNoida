function CustomNavLink({ link, className, children }) {
  return (
    <>
      {link == "1" ? (
        <a
          href="#"
          className={`d-inline-block px-3 py-2 fs-6 rounded text-white custom-link-1 ${className}`}
        >
          {children}
        </a>
      ) : link == "2" ? (
        <a
          href="#"
          className={`d-inline-flex justify-content-center align-items-center border border-secondary rounded   fw-normal text-warning ${className} `}
        >
          {children}
        </a>
      ) : link == "3" ? (
        <a href="#" className={`custom-link-style ${className}`}>
          {children}
        </a>
      ) : link == "4" ? (
        <a className={`custom-button-style p-1 rounded ${className}`}>
          {children}
        </a>
      ) : link == "5" ? (
        <a className={className} href="#">
          {children}
        </a>
      ) : link == "6" ? (
        <a
          href="#"
          className={`custom-btn-style fw-bold  text-dark ${className}`}
        >
          {children}
        </a>
      ) : link == "7" ? (
        <a href="#" className={className}>
          {children}
        </a>
      ) : link == "8" ? (
        <a className={className}>{children}</a>
      ) : null}
    </>
  );
}

export default CustomNavLink;
