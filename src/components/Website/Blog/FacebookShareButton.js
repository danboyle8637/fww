import React, { useEffect } from "react";

const FacebookShareButton = () => {
  useEffect(() => {
    if (window !== undefined) {
      window.fbAsyncInit = function() {
        FB.init({
          appId: "1545868855673667",
          autoLogAppEvents: true,
          xfbml: true,
          version: "v4.0",
        });
      };
    }
  }, []);

  const loadFacebookSDK = (
    <>
      <div id="fb-root"></div>
      <script
        dangerouslySetInnerHTML={{
          __html: `
          (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            js.setAttribute("async", "");
            js.setAttribute("defer", "");
            fjs.parentNode.insertBefore(js, fjs);
          }(document, 'script', 'facebook-jssdk'));
          `,
        }}
      />
    </>
  );

  return;
};

export default FacebookShareButton;
