import Container from "../Container";

const Footer = () => {
  return (
    <footer className="border-t border-border">
      <Container>
        <div className="flex flex-col items-center justify-between gap-2 py-8 text-sm text-subtle sm:flex-row">
          <p>© {new Date().getFullYear()} WonderWalls</p>
          <p>Kyrenia / Girne, Cyprus</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
