const Layout = ({ children, mode }) => {
  return (
    <section
      className={`w-screen h-screen flex justify-center items-center ${
        mode === false ? "bg-white" : "bg-black"
      }`}
    >
      {children}
    </section>
  );
};

export default Layout;
