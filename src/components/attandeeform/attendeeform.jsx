import React, { useState, useEffect } from "react";
import Navbar from "../navbar/navbar";
import { Link, useNavigate } from "react-router-dom";

export default function Attendeeform() {
  const [profileImage, setProfileImage] = useState("");
  const [ImagePreview, setImagePreview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    specialRequest: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const cloud_name = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const upload_preset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

  const handleImageChange = (e) => {
    setProfileImage(e.target.files[0]);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };
  const uploadImage = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      let imageURL;
      if (
        profileImage &&
        (profileImage.type === "image/png" ||
          profileImage.type === "image/jpg" ||
          profileImage.type === "image/jpeg")
      ) {
        const image = new FormData();
        image.append("file", profileImage);
        image.append("cloud_name", cloud_name);
        image.append("upload_preset", upload_preset);

        const response = await fetch(
          `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
          {
            method: "post",
            body: image,
          }
        );
        const imgData = await response.json();
        imageURL = imgData.url.toString();
        console.log(imageURL);
        setImagePreview(null);
      }
      alert(`Image uploaded successfully! URL: ${imageURL}`);
      localStorage.setItem("profileImageURL", imageURL);
      // Save to localStorage
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  // const handleInputChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Clear error when user starts typing
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name?.trim()) newErrors.name = "Name is required.";
    if (!formData.email?.trim()) newErrors.email = "Email is required.";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Enter a valid email address.";
    if (!formData.specialRequest?.trim())
      newErrors.specialRequest = "Special request is required.";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      //store data in localStorage
      localStorage.setItem("userData", JSON.stringify(formData));
      navigate("/success");
    }
  };

  return (
    <main
      className="min-h-screen pt-4"
      style={{
        background:
          "radial-gradient(52.52% 32.71% at 50% 97.66%, rgba(36, 160, 181, 0.20) 0%, rgba(36, 160, 181, 0.00) 100%), #02191D",
      }}
    >
      <Navbar />
      <div className="p-4 flex items-center justify-center">
        <div className="w-full max-w-2xl bg-[#041E23] text-[#fffff] rounded-[40px] p-12 border border-solid border-[#0E464F]">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-[32px] font-family font-normal text-[#FFFFFF]">
                Attendee Details
              </h2>
              <span className="text-[16px] font-Roboto text-[#FAFAFA] leading-[150%]">
                step 2/3
              </span>
            </div>
            {/* progress Bar */}
            <div className="w-full h-1 bg-[#0E464F] rounded-full">
              <div className="h-full w-2/3 bg-[#24A0B5] rounded-full"></div>
            </div>
            <div className="space-y-6 mt-2 px-6 pt-5 pb-12 bg-[#08252B] rounded-[24px] border border-solid border-[#0E464F]">
              {/* upload section */}
              <div className="space-y-2">
                <label className="text-[16px] text-[#FAFAFA] font-Roboto font-normal leading-[150%] pb-3">
                  Upload Profile Photo
                </label>
                <div className=" relative h-[120px] aspect-square mt-8 max-w-[600px] w-full mx-auto bg-[#041E23]  flex items-center justify-center">
                  <form
                    onSubmit={uploadImage}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-[180px] h-[180px] rounded-[32px] border-4 border-[#24a0b5] cursor-pointer flex flex-col items-center justify-center text-center p-6 bg-[#0E464F]"
                    style={{
                      backgroundImage: ImagePreview
                        ? `url(${ImagePreview})`
                        : "none",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <label
                      htmlFor="profile-upload"
                      role="button"
                      aria-label="Upload an image"
                      className="cursor-pointer flex flex-col items-center justify-center"
                    >
                      {!ImagePreview && (
                        <>
                          <svg
                            className="w-8 h-8 mb-2 flex align-center justify-center"
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                          >
                            <path
                              d="M25.2639 14.816C24.6812 10.2267 20.7505 6.66669 16.0052 6.66669C12.3305 6.66669 9.13854 8.81469 7.68121 12.2C4.81721 13.056 2.67188 15.76 2.67188 18.6667C2.67188 22.3427 5.66254 25.3334 9.33854 25.3334H10.6719V22.6667H9.33854C7.13321 22.6667 5.33854 20.872 5.33854 18.6667C5.33854 16.7947 6.93721 14.9907 8.90254 14.6454L9.67721 14.5094L9.93321 13.7654C10.8705 11.0307 13.1972 9.33335 16.0052 9.33335C19.6812 9.33335 22.6719 12.324 22.6719 16V17.3334H24.0052C25.4759 17.3334 26.6719 18.5294 26.6719 20C26.6719 21.4707 25.4759 22.6667 24.0052 22.6667H21.3385V25.3334H24.0052C26.9465 25.3334 29.3385 22.9414 29.3385 20C29.337 18.8047 28.9347 17.6444 28.196 16.7047C27.4574 15.7649 26.425 15.0999 25.2639 14.816Z"
                              fill="#FAFAFA"
                            />
                            <path
                              d="M17.3385 18.6667V13.3334H14.6719V18.6667H10.6719L16.0052 25.3334L21.3385 18.6667H17.3385Z"
                              fill="#FAFAFA"
                            />
                          </svg>
                          <p className="text-[16px] font-Roboto leading-[150%] font-normal text-[#FAFAFA]">
                            Drag & drop or click to upload
                          </p>
                        </>
                      )}
                    </label>

                    <input
                      id="profile-upload"
                      type="file"
                      accept="image/jpeg,image/png,image/jpeg"
                      className="text-[#ffffff] hidden"
                      name="image"
                      onChange={handleImageChange}
                      aria-label="Upload Profile Photo"
                      required
                    />
                    <p>
                      {isLoading ? (
                        <span className="text-[#08252b] font-Alatsi text-[32px] text- font-[700px]">
                          Upload Successful!!!
                        </span>
                      ) : (
                        ImagePreview && (
                          <button
                            type="submit"
                            className="text-[#08252b] font-family text-[32px] font-[700px] cursor-pointer"
                          >
                            Upload Image
                          </button>
                        )
                      )}
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* straight line */}
          <div className="w-full h-1 bg-[#07373F] mt-8 rounded-[32px] border border-solid border-[#07373F]"></div>
          <form class="mt-4" onSubmit={handleInputSubmit}>
            <label
              for="name"
              class="block mb-1 font-Roboto leading-[150%] text-[16px] font-normal text-[#FAFAFA]"
            >
              Enter your name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              aria-label="Input your name here "
              class="w-full p-3 rounded-[12px] placeholder-[#ffff]  bg-[#07373F] border border-solid border-[#07373F] focus:ring-2 focus:ring-[#07373F] focus:outline-none"
              required
            />
            {errors.name && (
              <p className="text-red-700 text-[20px] font-Alatsi">
                {errors.name}
              </p>
            )}

            <label
              for="email"
              class="block mt-4 mb-1 font-Roboto leading-[150%] text-[16px] font-normal text-[#FAFAFA]"
            >
              Enter your email *
            </label>
            <div class="relative">
              <span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#ffffff]">
                ✉️
              </span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                aria-label="input your email address here"
                class="w-full pl-10 p-3  rounded-[12px] placeholder-[#ffffff] bg-[#07373F] border border-solid border-[#07373F] focus:ring-2 focus:ring-[#07373F] focus:outline-none"
                placeholder="hello@aviolagos.io"
                required
              />
            </div>
            {errors.email && (
              <p className="text-red-700 text-[20px] font-Alatsi">
                {errors.email}
              </p>
            )}

            <label
              for="special-request"
              class="block mt-4 mb-1 font-Roboto leading-[150%] text-[16px] font-normal text-[#FAFAFA]"
            >
              Special request?
            </label>
            <textarea
              name="specialRequest"
              value={formData.specialRequest}
              onChange={handleInputChange}
              aria-label="write a special request for the programme"
              class="w-full p-3 h-[127px] rounded-[12px] placeholder-[#AAAAAA] bg-[#07373F] border border-solid border-[#07373F] focus:ring-2 focus:ring-[#07373F] focus:outline-none"
              placeholder="Textarea"
            ></textarea>
            {errors.specialRequest && (
              <p className="text-red-700 text-[20px] font-Alatsi">
                {errors.specialRequest}
              </p>
            )}
            <div class="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/"
                type="button"
                class=" w-full text-center sm:w-1/2 py-3 px-3 rounded-lg font-family text-[#24A0B5]  text-[16px] font-normal leading-[150%] transition-colors border border-solid  border-[#24A0B5] cursor-pointer"
              >
                Back
              </Link>
              <button
                onClick={handleInputSubmit}
                type="submit"
                class="w-full  sm:w-1/2 py-3 px-3 rounded-lg font-family text-[#ffffff] bg-[#24A0B5] text-center cursor-pointer"
              >
                Get Ticket
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
