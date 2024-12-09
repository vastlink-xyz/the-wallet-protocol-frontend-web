import React, { useState } from 'react';
import { Upload, Progress } from 'antd';
import type { UploadProps } from 'antd';
import api from '@/lib/api';
import { Inbox, Plus, X } from 'lucide-react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { auth, cn } from '@/lib/utils';
const { Dragger } = Upload;

export function ImageUpload({
  initialAvatar,
  onImageChange,
}: {
  initialAvatar: string;
  onImageChange: (imageUrl: string) => void;
}) {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [imageUrl, setImageUrl] = useState<string>(initialAvatar || '');
  const { username: userEmail } = auth.all();

  const uploadProps: UploadProps = {
    name: 'file',
    multiple: false,
    showUploadList: false,
    accept: 'image/jpeg,image/png',
    maxCount: 1,
    beforeUpload: (file) => {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
        toast.error('You can only upload JPG/PNG files!');
        return false;
      }
      const isLt10M = file.size / 1024 / 1024 < 10;
      if (!isLt10M) {
        toast.error('Image must be smaller than 10MB!');
        return false;
      }
      return true;
    },
    customRequest: async ({ file, onSuccess, onError, onProgress }) => {
      try {
        setLoading(true);
        setProgress(0);
        setImageUrl('');

        const safeEmail = userEmail.replace(/[@.]/g, '_');
        const publicId = `${safeEmail}`;
        const timestamp = Math.round(new Date().getTime() / 1000);

        // get cloudinary signature
        const response = await api.post('/thirdparty/get-cloudinary-signature', {
          overwrite: true,
          public_id: publicId,
          timestamp,
        });
        const { signature } = response.data;

        // Create FormData
        const formData = new FormData();
        formData.append('file', file as Blob);
        formData.append('signature', signature);
        formData.append('api_key', import.meta.env.VITE_CLOUDINARY_API_KEY as string);
        formData.append('timestamp', timestamp.toString());
        formData.append('public_id', publicId);
        formData.append('overwrite', 'true');

        // upload to cloudinary with progress
        const { data } = await axios.post(
          `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
          formData,
          {
            withCredentials: false,
            onUploadProgress: (progressEvent) => {
              if (progressEvent.total) {
                const percent = Math.round(
                  (progressEvent.loaded * 100) / progressEvent.total
                );
                setProgress(percent);
                onProgress?.({ percent });
              }
            },
          }
        );

        setImageUrl(data.secure_url);
        onImageChange(data.secure_url);
        onSuccess?.(data, file);
        toast.success(`${(file as File).name} file uploaded successfully.`);
      } catch (error) {
        console.error('Upload error:', error);
        onError?.(error as Error);
        toast.error(`${(file as File).name} file upload failed.`);
      } finally {
        setLoading(false);
        setProgress(0);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };

  return (
    <div className={cn(
      "relative ",
      'w-[104px] h-[104px]',
      'tablet:w-[395px] tablet:h-[172px]',
    )}>
      <Dragger 
        {...uploadProps}
        rootClassName="[&_.ant-upload-drag_.ant-upload]:p-0"
      >
        <div>
          {loading ? (
            <div className="text-black/90 text-sm font-normal leading-snug">
              <p className="mb-4">Uploading...</p>
              <div className={cn(
                "w-[88px] tablet:w-[200px] mx-auto",
              )}>
                <Progress percent={progress} showInfo={false} size="small" />
              </div>
            </div>
          ) : imageUrl ? (
            <div className="w-full h-full flex items-center justify-center">
              <img 
                src={imageUrl} 
                alt="Avatar" 
                className={cn(
                  "h-[86px] w-[86px] object-cover object-center",
                  'tablet:h-[170px] tablet:w-[170px]',
                )}
              />
            </div>
          ) : (
            <>
              {/* desktop upload ui */}
              <div className='hidden tablet:block'>
                <div className="flex justify-center items-center mt-[16px] mb-[20px]">
                  <Inbox />
                </div>
                <p className="text-center text-black/90 text-base leading-normal mb-2">
                  Click or drag file to this area to upload
                </p>
                <p className="text-center text-black/40 text-sm leading-snug">
                  Only one file is allowed with a maximum size of 10MB. Supported formats: JPEG, PNG.
                </p>
              </div>

              {/* mobile upload ui */}
              <div className='block tablet:hidden'>
                <div className="flex justify-center items-center mt-[16px] mb-[8px]">
                  <Plus />
                </div>
                <p>Upload</p>
              </div>
            </>
          )}
        </div>
      </Dragger>
    </div>
  );
};
