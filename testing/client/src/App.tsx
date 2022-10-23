import React from "react";
import Main from "./pages/Main";
import Footer from "./components/Footer";

interface Props {
  name: string
}

export default (props: Props) => {
  return (
    <>
      <Main name={props.name} />
      <Footer />
    </>
  )
}