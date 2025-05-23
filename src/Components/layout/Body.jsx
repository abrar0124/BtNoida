function Body({ variant, children, className }) {
  return (
    <>
      {variant == "1" ? (
        <h2 className={`display-1 ${className} custom-font-family`}>
          {children}
        </h2>
      ) : variant == "2" ? (
        <h2
          className={`ms-3 mt-5 ${className} custom-border-left custom-line-height text-light fs-6 fw-normal`}
        >
          {children}
        </h2>
      ) : variant == "3" ? (
        <p className={`${className} ms-3 pt-3 ps-4 custom-font-family fs-5`}>
          {children}
        </p>
      ) : variant == "4" ? (
        <p className={`${className} ms-3 pt-3 ps-4 custom-font-family fs-5`}>
          {children}
        </p>
      ) : variant == "5" ? (
        <p className={`custom-text-color custom-font-family custom-font-size`}>
          {children}
        </p>
      ) : variant == "6" ? (
        <p
          className={`custom-text-color custom-font-family custom-font-size custom-margin-top`}
        >
          {children}
        </p>
      ) : variant == "7" ? (
        <p className={`${className} custom-text-colr`}>{children}</p>
      ) : variant == "8" ? (
        <p className={className}>{children}</p>
      ) : variant == "9" ? (
        <p className={`${className} custom-fs`}>{children}</p>
      ) : variant == "10" ? (
        <p className={className}>{children}</p>
      ) : variant == "11" ? (
        <p className={className}>{children}</p>
      ) : variant == "12" ? (
        <p className={`${className} custom-size`}>{children}</p>
      ) : variant == "13" ? (
        <p
          className={`${className} custom-color`}
          style={{ color: "rgb(170, 167, 167)" }}
        >
          {children}
        </p>
      ) : null}
    </>
  );
}
export default Body;
