import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET_KEY,
});

export const uploadCloudinary = async (localFilepath) => {
  try {
    if (!localFilepath) return null;
    const response = await cloudinary.uploader.upload(localFilepath, {
      resource_type: "auto",
    });
    console.log("file uploaded successfully on cloudinary");
    fs.unlinkSync(localFilepath);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilepath);
    return null;
  }
};
