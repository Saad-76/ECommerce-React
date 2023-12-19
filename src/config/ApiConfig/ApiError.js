const handleApiError = (error) => {
  if (error.response) {
    console.log("Response Data:", error.response.data);
    console.log("Response Status:", error.response.status);
    console.log("Response Headers:", error.response.headers);
  } else if (error.request) {
    return {
      data: {
        code: 500,
        message: "No Response Received",
      },
    };
  } else {
    return {
      data: {
        code: 500,
        message: "Request Error",
      },
    };
  }
  return {
    data: {
      code: 500,
      message: "API Error",
    },
  };
};

export default handleApiError;
