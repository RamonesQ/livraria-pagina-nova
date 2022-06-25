const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: "dzudgfadx",
  api_key: "795635538426222",
  api_secret: "HmLTWyTPXyISprGMvoWoyr3zxVo",
});

exports.uplads = (file, folder) => {
  return new Promise((resolve) => {
    cloudinary.uploader.upload(file, (cloudinaryReturn) => {
      resolve({
        imageUrl: cloudinaryReturn.url,
      }),
        {
          folder: folder,
          resoucer_type: "auto",
        };
    });
  });
};
