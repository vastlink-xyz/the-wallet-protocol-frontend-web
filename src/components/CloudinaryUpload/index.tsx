'use client'

import { CldUploadWidget, CloudinaryUploadWidgetResults } from 'next-cloudinary';
import React, { useState } from 'react';
import { Upload } from 'lucide-react';
import Image from 'next/image';

interface CloudinaryUploadProps {
  onSuccess: (url: string | undefined) => void;
  initialImage?: string;
}

export function CloudinaryUpload({ onSuccess, initialImage }: CloudinaryUploadProps) {
  const [uploadedImage, setUploadedImage] = useState<string | undefined>(initialImage);

  return (
    <div className="flex flex-col items-center">
      {uploadedImage ? (
        <div className="mb-4">
          <img src={uploadedImage} className="rounded-lg shadow-md w-8" alt="" />
        </div>
      ) : (
        <div className=" bg-gray-200 rounded-lg flex items-center justify-center mb-4 p-2">
          <Upload className="text-primary/60" size={20} />
        </div>
      )}
      
      <CldUploadWidget
        signatureEndpoint="/api/sign-cloudinary-params"
        options={{
          sources: ['local', 'url'],
          multiple: false,
        }}
        onSuccess={(result: CloudinaryUploadWidgetResults, { widget }) => {
          const info = result.info as { secure_url: string };
          if (info && info.secure_url) {
            setUploadedImage(info.secure_url);
            onSuccess(info.secure_url);
          }
        }}
        onQueuesEnd={(result, { widget }) => {
          widget.close();
        }}
      >
        {({ open }) => {
          return (
            <button 
              onClick={() => open()} 
              className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
            >
              {uploadedImage ? 'Change logo' : 'Upload logo'}
            </button>
          )
        }}
      </CldUploadWidget>
    </div>
  )
}
