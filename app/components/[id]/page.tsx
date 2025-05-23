import React from "react";
interface props {
  params: {
    id: number;
  };
}
const page = ({ params: { id } }: props) => {
  return <div>page {id}</div>;
};

export default page;
