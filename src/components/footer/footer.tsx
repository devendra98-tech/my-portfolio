export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <span>
        <span className="far fa-copyright" aria-hidden="true"></span>{" "}
        {currentYear} All Rights Reserved.
      </span>
    </footer>
  );
}
