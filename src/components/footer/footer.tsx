
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="footer-inner">
        <span className="footer-inner__copy">
          <span className="far fa-copyright" aria-hidden="true"></span>{" "}
          {currentYear} All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
