import React, { useState, useEffect, useContext } from "react";
import { supabase } from "../Database/supabaseClient";
import { StyleContext } from "./StyleProvider";

export const TrousersUIfabric = () => {
  const [fabricImages, setFabricImages] = useState([]);
  const { sharedState, setSharedState } = useContext(StyleContext);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        console.log('Fetching files from the bucket...');
        const { data, error } = await supabase
          .storage
          .from('im') // Ensure this matches your bucket name exactly
          .list('', { limit: 100 }); // Adjust the limit as needed

        if (error) {
          console.error('Error listing files:', error);
          return;
        }

        if (!data || data.length === 0) {
          console.log('No files found in the bucket.');
          return;
        }

        console.log('Files found:', data);

        const baseUrl = 'https://krvevkxigsdnikvakxjt.supabase.co/storage/v1/object/public/im/';

        // Manually construct the public URLs
        const imageUrls = data.map((file) => {
          const publicURL = `${baseUrl}${file.name}`;
          console.log(`Public URL for ${file.name}: ${publicURL}`);
          return publicURL;
        });

        setFabricImages(imageUrls);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  const selectFabric = (index) => {
    setSharedState({ Fabricindex: index }); // Operation for selecting fabric
  };

  return (
    <div className="border-solid border-2 opacity-80 shadow-white shadow-md bg-[#000000] border-[#A6A6A6]  mx-2 p-2 rounded-md flex flex-col mt-[10px] ">
      <article className="text-white flex items-center justify-center text-[28px] font-bold mb-2">FABRIC OPTION</article>
      <div className="flex flex-row  bg-slate-600 overflow-x-auto border-solid rounded-md border-2 mx-1 border-[#a89e9e]  shadow-[#faf397] shadow-lg">
        {fabricImages.map((imageUrl, index) => (
          <button key={index} onClick={() => selectFabric(index)}>
            <img src={imageUrl} alt={`Fabric ${index + 1}`} className="h-[70px] w-[80px]" />
            <div className="mr-14"></div>
          </button>
        ))}
      </div>
    </div>
  );
};
