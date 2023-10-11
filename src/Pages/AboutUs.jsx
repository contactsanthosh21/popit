import React from "react";
import {
    Quote,
    ContactUs,
    MeetTeam,
    Values
  } from '../sections';
import constants from "../utils/constants";
const {aboutQuoteContent,aboutQuoteAuthor} = constants.aboutpage;

const AboutUs = () => {
    return (
        <>
            <Values />
            <Quote quoteContent={aboutQuoteContent} quoteAuthor={aboutQuoteAuthor} className="aboutUs"/>
            <MeetTeam />
            <ContactUs />
        </>
    );
};

export default AboutUs;
