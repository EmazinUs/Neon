import React from "react";
interface props {
  params: {
    slug: string[];
  };
}

const page = ({ params: { slug } }: props) => {
  return <div>page of products {slug}</div>;
};

export default page;
