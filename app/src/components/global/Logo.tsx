import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/">
      <p className="text-text font-header font-bold">
        index<span className="text-primary">ia</span>
      </p>
    </Link>
  );
};

export default Logo;
