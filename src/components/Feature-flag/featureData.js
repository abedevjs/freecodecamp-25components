const dummyApiResponse = {
  showDarkMode: "abe",
  showImageSlider: false,
  showGithubFinder: true,
  ShowStarRating: true,
  showTabs: true,
};

function FeatureFlagDataServiceCall() {
  return new Promise((resolve, reject) => {
    if (dummyApiResponse) setTimeout(resolve(dummyApiResponse), 50000);
    else reject("You are wrong about dummyApiResponse");
  });
}

export default FeatureFlagDataServiceCall;
