import Footer from './Footer';

export default function PageLayout({ children, noFooter = false }) {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Neon ambient edge lines */}
      <div className="neon-edge-left" />
      <div className="neon-edge-right" />
      <main>{children}</main>
      {!noFooter && <Footer />}
    </div>
  );
}