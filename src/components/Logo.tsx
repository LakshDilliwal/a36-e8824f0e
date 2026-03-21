const Logo = ({ light = false }: { light?: boolean }) => (
  <span className="font-black text-2xl tracking-logo select-none">
    <span className={light ? "text-white" : "text-primary"}>A36</span>
    <span className="text-accent">.</span>
  </span>
);

export default Logo;
