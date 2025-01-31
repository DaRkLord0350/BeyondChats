export const fetchMetaDescription = async (url) => {
    try {
      const response = await fetch(`https://api.linkpreview.net?key=AIzaSyCHNQjFyY-ocmhtv8UpB-frmLUv_kqWcLE&q=${url}`);
      const data = await response.json();
      return data.description || "No description available";
    } catch (error) {
      console.error("Error fetching meta description:", error);
      return "No description available";
    }
  };
  