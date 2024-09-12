'use client'

import { CldUploadWidget, CloudinaryUploadWidgetResults } from 'next-cloudinary';
import React, { useEffect, useState } from 'react';
import { Upload } from 'lucide-react';
import Image from 'next/image';
import { auth, cn, log } from "@/lib/utils"

interface CloudinaryUploadProps {
  onSuccess: (url: string | undefined) => void;
  initialImage?: string;
}

export function CloudinaryUpload({ onSuccess, initialImage }: CloudinaryUploadProps) {
  const [uploadedImage, setUploadedImage] = useState<string | undefined>(initialImage);
  const { username } = auth.all()
  const letter = username.length > 0 ? username[0] : ''

  // return (
  //   <CldUploadWidget signatureEndpoint="/api/sign-cloudinary-params">
  //       {({ open }) => {
  //         return (
  //           <div onClick={() => open()}>
  //             Upload an Image
  //           </div>
  //         );
  //       }}
  //     </CldUploadWidget>
  // )

  useEffect(() => {
    if (initialImage) {
      setUploadedImage(initialImage)
    }
  }, [initialImage])

  return (
    <div className="flex flex-col items-center">
      {uploadedImage ? (
        <div className="mb-4">
          <img src={uploadedImage} className="rounded-full shadow-md w-8" alt="" />
        </div>
      ) : (
        // <div className=" bg-gray-200 rounded-lg flex items-center justify-center mb-4 p-2">
        //   <Upload className="text-primary/60" size={20} />
        // </div>
        <div
          className={cn(
            'bg-primary text-primary-foreground rounded-full flex items-center justify-center',
            'w-[32px] h-[32px]',
            'mb-2'
          )}
        >
          <div className={cn(
            'flex items-center justify-center',
          )}>
            {letter}
          </div>
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
            <div 
              onClick={(e) => {
                e.preventDefault()
                open()
              }}
              className="text-sm text-blue-600 hover:text-blue-800 transition-colors cursor-pointer"
            >
              {uploadedImage ? 'Change logo' : 'Upload logo'}
            </div>
          )
        }}
      </CldUploadWidget>
      
    </div>
  )
}
