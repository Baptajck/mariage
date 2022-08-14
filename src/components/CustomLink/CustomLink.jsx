import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function CustomLink({ children, to, className, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link
      className={`btn ${
        match ? "btn-dark" : "btn-outline-dark"
      } text-decoration-none ${className}`}
      to={to}
      {...props}
    >
      {children}
    </Link>
  );
}
