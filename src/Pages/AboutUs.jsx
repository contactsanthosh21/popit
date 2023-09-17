import React from "react";
import {
    Quote,
    ContactUs,
    MeetTeam
  } from '../sections';
import constants from "../utils/constants";
const {aboutQuoteContent,aboutQuoteAuthor} = constants.aboutpage;

const AboutUs = () => {
    return (
        <>
            <Quote quoteContent={aboutQuoteContent} quoteAuthor={aboutQuoteAuthor} />
            <MeetTeam />
            <ContactUs />
        </>
    );
};

export default AboutUs;
