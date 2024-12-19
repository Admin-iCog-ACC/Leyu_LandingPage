import Navbar from "../landing/components/Navbar";

export default function Layout({ children }) {
  return (
    <div className="h-screen text-white bg-[#090909]">
      <Navbar />
      {children}
    </div>
  );
}
