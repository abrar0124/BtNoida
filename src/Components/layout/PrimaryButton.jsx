const PrimaryButton = ({ button, children, className }) => {
  return (
    <>
      {button == "1" ? (
        <button type="submit" className={className}>
          {children}
        </button>
      ) : null}
    </>
  );
};
export default PrimaryButton;
