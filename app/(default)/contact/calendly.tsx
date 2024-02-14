"use client"
import React from "react";
import { InlineWidget,  } from "react-calendly";

interface BookMeetingInlineWidgetProps {
  calendly: {
    url: string;
  };
}

const BookMeetingInlineWidget: React.FC<BookMeetingInlineWidgetProps> = ({
  calendly,
}) => {
 

  const loadingSpinner = <div>Loading...</div>; // Example loading spinner component


  return (
    <InlineWidget
      pageSettings={{
        backgroundColor: '000000',
        hideEventTypeDetails: false,
        hideGdprBanner: true,
        hideLandingPageDetails: false,
        primaryColor: '00a2ff',
        textColor: '4d5055',
      }}
     
      url={calendly.url}
      styles={{ height: "750px" }}
      utm={{
        utmSource: 'Web',
      }}
    />
  );
};

export default BookMeetingInlineWidget;