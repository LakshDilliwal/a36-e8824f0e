import { Link } from "react-router-dom";
import logoAsset from "@/assets/a36-labs-official-logo.svg.asset.json";

type LogoProps = {
  light?: boolean;
  className?: string;
  variant?: "nav" | "footer";
  linked?: boolean;
};

const Logo = ({ className = "", variant = "nav", linked = false }: LogoProps) => {
  const sizeCls =
    variant === "footer"
      ? "w-[54px] md:w-[68px] h-auto"
      : "h-[20px] md:h-[24px] w-auto";

  const img = (
    <img
      src={logoAsset.url}
      alt="A36 Labs"
      className={`${sizeCls} object-contain select-none ${className}`}
      draggable={false}
    />
  );

  if (linked) {
    return (
      <Link to="/" aria-label="A36 Labs — Home" className="inline-flex items-center">
        {img}
      </Link>
    );
  }
  return img;
};

export default Logo;
