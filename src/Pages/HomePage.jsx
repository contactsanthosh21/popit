import React from "react";
import {
  IntroBanner,
  Offerings,
  ProjectsImpact,
  Quote,
  ContactUs,
  Planning
} from '../sections';
import constants from "../utils/constants";

const { quoteContent, quoteAuthor, quoteDescription } = constants.homepage;

const HomePage = () => {
    return (
        <>
            <IntroBanner />
            <ProjectsImpact />
            <Offerings />
            <Quote
                quoteContent={quoteContent}
                quoteAuthor={quoteAuthor}
                quoteDescription={quoteDescription}
            />
            <Planning />
            <ContactUs />
        </>
    );
};

export default HomePage;
