import React from "react";
import Page01 from "./";

export default {
  title: "Page01",
  component: Page01,
};

const Template = (args) => {
  return (
    <>
      <Page01 {...args} />
    </>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  //   primary: true,
  //   label: "Button",
};

Primary.parameters = {
  nextRouter: {
    path: "/",
    asPath: "/",
    query: {
      question: "Why?",
      answers: ["because 01", "because 02"],
    },
  },
};
