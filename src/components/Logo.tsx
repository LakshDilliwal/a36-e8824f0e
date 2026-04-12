const Logo = ({ light = false, size = "text-[28px]" }: { light?: boolean; size?: string }) => (
  <span className={`font-black ${size} tracking-[-0.09em] select-none`}>
    <span className={light ? "text-white" : "text-primary"}>A36</span>
    <span className="text-accent">.</span>
  </span>
);

export default Logo;
