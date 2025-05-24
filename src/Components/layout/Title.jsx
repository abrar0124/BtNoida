function Title({ level, children, className }) {
  return (
    <>
      {level == "1" ? (
        <h2 className={className}>{children}</h2>
      ) : level == "2" ? (
        <h2 className={`fs-custom font-serif mt-4 ${className}`}>{children}</h2>
      ) : level == "3" ? (
        <h2 className={`font-serif fs-17 ${className}`}>{children}</h2>
      ) : level == "4" ? (
        <h2 className={`mt-3 custom-font-serif ${className}`}>{children}</h2>
      ) : level == "5" ? (
        <h2 className={`fs-5 ${className}`}>{children}</h2>
      ) : level == "6" ? (
        <h2
          className={`custom-width-40 fs-4 custom-font-serif custom-border-bottom  pb-1 ${className}`}
        >
          {children}
        </h2>
      ) : level == "7" ? (
        <h2
          className={`custom-width-50 fs-4 custom-font-serif custom-border-bottom  pb-1 ${className}`}
        >
          {children}
        </h2>
      ) : null}
    </>
  );
}

export default Title;
