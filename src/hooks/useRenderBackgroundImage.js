const useRenderBackgroundImage = (
  mobileBackground,
  tabletBackground,
  ipadProBackground,
  laptopBackground
) => {
  // const mobile = mobileBackground.childImageSharp.fluid;
  // const tablet = tabletBackground.childImageSharp.fluid;
  // const ipadPro = ipadProBackground.childImageSharp.fluid;
  // const laptop = desktopBackground.childImageSharp.fluid;

  const sources = [
    {
      ...laptopBackground,
      media: `(min-width: 1100px)`,
    },
    {
      ...ipadProBackground,
      media: `(min-width: 960px)`,
    },
    {
      ...tabletBackground,
      media: `(min-width: 600px)`,
    },
    mobileBackground,
  ];

  // useEffect(() => {
  //   if (device === "mobile") {
  //     setBackground(mobile);
  //   }

  //   if (device === "tablet") {
  //     setBackground(tablet);
  //   }

  //   if (device === "ipadPro") {
  //     setBackground(ipadPro);
  //   }

  //   if (device === "laptop" || device === "ultraWide") {
  //     setBackground(laptop);
  //   }
  // }, [device, mobile, tablet, ipadPro, laptop]);

  return sources;
};

export default useRenderBackgroundImage;
