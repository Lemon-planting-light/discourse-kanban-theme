const categorySetting = (type, slug, allowTopRoutes = true) => {
  if (!slug && !allowTopRoutes) {
    return false;
  }
  const categories = settings[type].split("|");
  // console.log("CATE：");
  // console.log(categories);
  const lookup = slug || "@";
  // console.log("SLUG:");
  // console.log(slug);
  return categories.includes(lookup);
};

const displayConnector = (categorySlug) => {
  console.log("My Location:");
  categorySlug = window.location.href.split("/")[4];
  console.log(categorySlug);
  return (
    settings.display_categories === "" ||
    categorySetting("display_categories", categorySlug)
  );
};

const boardDefaultView = (categorySlug) => {
  return categorySetting("default_view", categorySlug, false);
};

const isDefaultView = (transition) => {
  return transition.to.name === "discovery.category";
};

export { displayConnector, boardDefaultView, isDefaultView };
