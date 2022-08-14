import CustomLink from "../CustomLink/CustomLink";

export default function Header() {
  return (
    <nav className="p-3 d-flex justify-content-center">
      <CustomLink to="/" className="ms-2">
        Home
      </CustomLink>
      <CustomLink to="/photos" className="ms-2">
        Photos
      </CustomLink>
      <CustomLink to="/golden_book" className="ms-2">
        Livre d'or
      </CustomLink>
    </nav>
  );
}
