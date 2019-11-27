import React, { useState } from "react";

import FormSection from "../components/Website/Contact/FormSection";
import { FormStore } from "../context/FormContext";
import LeadSection from "../components/Website/Contact/LeadSection";
import Portal from "../components/Shared/Portal/Portal";
import SyncingIndicator from "../components/Indicators/SyncingIndicator";
import MessageDialog from "../components/Dialogs/MessageDialog";
import { formState, formReducer } from "../reducers/formReducer";
import siteConfig from "../utils/siteConfig";
import SEO from "../components/seo";

const Contact = () => {
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncMessage, setSyncMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");

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
        <FormSection
          isSyncing={isSyncing}
          setIsSyncing={setIsSyncing}
          setSyncMessage={setSyncMessage}
          setShowMessage={setShowMessage}
          setDialogMessage={setDialogMessage}
        />
      </FormStore>
      <Portal>
        <SyncingIndicator isSyncing={isSyncing} syncMessage={syncMessage} />
        <MessageDialog
          showMessage={showMessage}
          setShowMessage={setShowMessage}
          dialogMessage={dialogMessage}
        />
      </Portal>
    </>
  );
};

export default Contact;
