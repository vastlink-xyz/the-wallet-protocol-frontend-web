import { Modal } from "@/components/Modal";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { cn, handleError, log } from "@/lib/utils";
import { ImageUpload } from "./ImageUpload";
import api from "@/lib/api";
import { toast } from "react-toastify";
import { LogoLoading } from "@/components/LogoLoading";
import { useQueryClient } from "@tanstack/react-query";

const presetAvatarIndexes = Array.from({ length: 16 }, (_, index) => index + 1);

export function AvatarModal({
  isOpen,
  onClose,
  initialAvatarIndex,
  initialAvatar,
}: {
  isOpen: boolean;
  onClose: () => void;
  initialAvatarIndex: number;
  initialAvatar: string;
}) {
  const queryClient = useQueryClient()
  const [activeTab, setActiveTab] = useState<'select' | 'upload'>('select');
  const [selectedAvatarIndex, setSelectedAvatarIndex] = useState(0);
  const [selectedAvatar, setSelectedAvatar] = useState('');
  const [loading, setLoading] = useState(false);
  const [isAvatarChanged, setIsAvatarChanged] = useState(false);

  useEffect(() => {
    if (isOpen) {
      if (initialAvatar) {
        setSelectedAvatarIndex(0);
        setSelectedAvatar(initialAvatar)
        setActiveTab('upload')
      } else {
        setSelectedAvatarIndex(initialAvatarIndex);
      }
    }
  }, [isOpen])

  const disabledButton = () => {
    if (activeTab === 'upload') {
      return !selectedAvatar
    }
    return  false
  }

  const handleChangeAvatarIndex = (avatarIndex: number) => {
    setSelectedAvatarIndex(avatarIndex);
    setSelectedAvatar('')
    setIsAvatarChanged(true)
  };

  const handleChooseAvatar = (avatar: string) => {
    setSelectedAvatarIndex(0);
    setSelectedAvatar(avatar);
    setIsAvatarChanged(true)
  }

  const handleClose = () => {
    setSelectedAvatarIndex(initialAvatarIndex);
    setSelectedAvatar(initialAvatar);
    setIsAvatarChanged(false)
    setActiveTab('select')
    onClose()
  }

  const handleSave = async () => {
    if (!isAvatarChanged) {
      handleClose()
      return
    }

    try {
      setLoading(true)
      await api.post('/user/update-avatar', {
        avatar: selectedAvatar,
        avatarIndex: selectedAvatarIndex,
      })
      
      // Invalidate and refetch userInfo
      await queryClient.invalidateQueries({ queryKey: ['userInfo'] })
      toast.success('Avatar updated successfully')
      handleClose()
    } catch(error) {
      const errorInfo = handleError(error);
      toast.error(errorInfo.message);
    } finally {
      setLoading(false)
    }
  }

  const footer = <div className="flex justify-end gap-4">
    <Button className="hidden tablet:block" variant={'outline'} onClick={() => handleClose()}>Cancel</Button>
    <Button
      className="w-full tablet:w-auto"
      disabled={disabledButton() || loading}
      onClick={() => {
        handleSave()
      }}
    >
      {loading ? <LogoLoading /> : 'Save'}
    </Button>
  </div>

  return <Modal
    isOpen={isOpen}
    onClose={() => handleClose()}
    title="Change profile picture"
    footer={footer}
    containerClassName="w-[600px]"
  >
    {/* Tabs header */}
    <div className="">
      <button
        onClick={() => setActiveTab('select')}
        className={cn(
          'pb-2 text-sm font-medium relative',
          activeTab === 'select' ? 'text-black' : 'text-[#929292]',
          'mr-[24px]'
        )}
      >
        Select avatar
        {activeTab === 'select' && (
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black" />
        )}
      </button>
      <button
        onClick={() => setActiveTab('upload')}
        className={cn(
          'pb-2 text-sm font-medium relative',
          activeTab === 'upload' ? 'text-black' : 'text-[#929292]',
        )}
      >
        Upload photo
        {activeTab === 'upload' && (
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black" />
        )}
      </button>
    </div>

    {/* Tabs content */}
    <div className="w-full mx-auto h-[427px] flex justify-center items-center">
      {/* preset avatars */}
      {activeTab === 'select' && (
        <div className="w-[336px] grid grid-cols-4 gap-4">
          {
            presetAvatarIndexes.map((avatarIndex, index) => (
              <img
                key={index}
                src={`/static/avatars/${avatarIndex}.svg`}
                alt="avatar"
                className={cn(
                  "w-[72px] h-[72px] cursor-pointer",
                  selectedAvatarIndex === avatarIndex && 'ring-4 ring-[#52c41a] rounded-[28px]',
                )}
                onClick={() => handleChangeAvatarIndex(avatarIndex)}
              />
            ))
          }
        </div>
      )}

      {/* upload photo */}
      {activeTab === 'upload' && (
        <ImageUpload
          initialAvatar={selectedAvatar}
          onImageChange={handleChooseAvatar}
        />
      )}
    </div>
  </Modal>;
}