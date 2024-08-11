'use client'

import { CldUploadWidget, CloudinaryUploadWidgetInfo, CloudinaryUploadWidgetResults } from 'next-cloudinary';
import { useState } from 'react';
import { auth, cn, formatDecimal, log } from "@/lib/utils"

export function CloudinaryUpload() {
  const [resource, setResource] = useState();

  return (
    <CldUploadWidget
      signatureEndpoint="/api/sign-cloudinary-params"
      options={{
        sources: ['local', 'url', 'unsplash'],
        multiple: false,
      }}
      onSuccess={(result: CloudinaryUploadWidgetResults, { widget }) => {
        log('reuslt is', result)
        if (result.event === 'success') {
          const info = result?.info as any
          log('info', info)
        }
        setResource(result?.info as any);  // { public_id, secure_url, etc }
      }}
      onQueuesEnd={(result, { widget }) => {
        widget.close();
      }}
    >
      {({ open }) => {
        function handleOnClick() {
          setResource(undefined);
          open();
        }
        return (
          <button onClick={handleOnClick}>
            Upload an Image
          </button>
        );
      }}
    </CldUploadWidget>
  )
  

}
 