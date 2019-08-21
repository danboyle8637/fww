import React from "react";

import FormSection from "../components/Website/Contact/FormSection";
import { FormStore } from "../context/FormContext";
import LeadSection from "../components/Website/Contact/LeadSection";
import { formState, formReducer } from "../reducers/formReducer";
import siteConfig from "../utils/siteConfig";
import SEO from "../components/seo";

const Contact = () => {
  return (
    <>
      <SEO
        pageTitle={siteConfig.seo.contactPage.title}
        fbTitle={siteConfig.seo.contactPage.fbTitle}
        description={siteConfig.seo.contactPage.description}
        url={siteConfig.seo.contactPage.url}
      />
      <FormStore initialState={formState} reducer={formReducer}>
        <LeadSection />
        <FormSection />
      </FormStore>
    </>
  );
};

export default Contact;
