import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Text({ type, content, className = "" }) {
  return (
    <>
      {type == "h2" ? (
        <h2 className={className}>{content}</h2>
      ) : type == "p" ? (
        <p className={className}>{content}</p>
      ) : type == "h6" ? (
        <h6>{content}</h6>
      ) : type == "h1" ? (
        <h1>{content}</h1>
      ) : type == "Link" ? (
        <Link className={className}>{content}</Link>
      ) : type == "h4" ? (
        <h4 className={className}>{content}</h4>
      ) : type == "li" ? (
        <li>{content}</li>
      ) : type == "a" ? (
        <a href="#" className={className}>
          {content}
        </a>
      ) : type == "h5" ? (
        <h5>{content}</h5>
      ) : type == "span" ? (
        <span className={className}>{content}</span>
      ) : type == "div" ? (
        <div className={className}>{content}</div>
      ) : type == "Button" ? (
        <Button className={className}>{content}</Button>
      ) : type == "ul" ? (
        <ul>{content}</ul>
      ) : null}
    </>
  );
}
export default Text;
