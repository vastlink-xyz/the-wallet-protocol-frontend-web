'use client'

import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { auth, log } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { CirclePlus, Trash2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import api from "@/lib/api";

interface Signer {
  address: string;
  email: string;
  id: string;
  isValid: boolean;
}

export default function MultisigSettingPage() {
  const [signers, setSigners] = useState<Signer[]>([])
  const [threshold, setThreshold] = useState<number>(1)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    init()
  }, [])

  const init = async () => {
    const { address, username } = auth.all()
    // add a default signer
    setSigners([{
      id: uuidv4(),
      email: username,
      address,
      isValid: true,
    }])
  }

  const handleAddSinger = () => {
    const singer = {
      address: '',
      email: '',
      id: uuidv4(),
      isValid: true,
    }
    const newSigners = [...signers, singer]
    setSigners(newSigners)
  }

  const handleSignersChange = (index: number, value: string) => {
    const newSigners = [...signers];
    const signer = newSigners[index];
    signer.email = value;
    setSigners(newSigners);
  }

  const handleSave = async () => {
    try {
      const res = await api.post('/multisig/create', {
          signers: signers.map(s => ({ email: s.email, address: s.address })),
          threshold,
      })
      log('res', res.data)
    } catch(err) {
      log('err', err)
    }
  }

  const handleSignersBlur = async (index: number, value: string) => {
    if (!value) {
      return
    }
    // get address by email
    const newSigners = [...signers]
    const signer = newSigners[index];
    try {
      const res = await api.get(`/address/`, {
        params: { email: value }
      });
      if (res.data.success) {
        const address = res.data.address
        signer.address = address;
        signer.isValid = true
      } else {
        signer.address = 'Not found';
        signer.isValid = false;
      }
    } catch(err) {
      signer.isValid = false
      signer.address = 'Not found';
    } finally {
      setSigners(newSigners);
    }
  };

  const handleDelete = (index: number) => {
    if (signers.length <= 1) {
      alert("You must have at least one signer.");
      return;
    }
  
    const newSigners = signers.filter((_, i) => i !== index);
    setSigners(newSigners);
  };

  const handleThresholdChange = (value: string) => {
    setThreshold(Number(value))
  }

  return <div>

    <Card className="p-8">
      <p className="text-primary/60 mb-12">Set the signer wallets of your multisig wallet account and how many need to confirm to execute a valid transaction.</p>

      <h2 className="mb-6 font-bold text-2xl">Signers</h2>
      {
        signers.map((signer, index) => {
          return (
            <div
              key={signer.id}
              className='flex items-center mb-8'
            >
              <p className="w-[120px]">Singer {index + 1}</p>
              <div className="relative w-1/2">
                <Input
                  value={signer.email}
                  onBlur={e => handleSignersBlur(index, e.target.value)}
                  onChange={e => handleSignersChange(index, e.target.value)}
                  required
                />
                <p className="absolute mt-1 text-xs text-primary/60">{signer.address}</p>
                <p className={`absolute mt-1 text-xs ${signer.isValid === false ? "text-destructive" : "text-primary/60"}`}>
                  {signer.address}
                </p>
              </div>
              <div className="ml-4 cursor-pointer text-destructive" onClick={() => handleDelete(index)}>
                <Trash2 size={20} className="hover:scale-105" />
              </div>
            </div>
          )
        })
      }
      <Button onClick={() => handleAddSinger()} size={'sm'}>
        <CirclePlus className="mr-2" size={18} />
        Add New Signer
      </Button>

      <h2 className="mb-4 mt-10 font-bold text-2xl">Threshold</h2>
      <div className="flex items-center">
        <Select onValueChange={handleThresholdChange} value={threshold.toString()}>
          <SelectTrigger className="w-[60px]">
            <SelectValue placeholder="Select threshold" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {signers.map((_, index) => (
                <SelectItem key={index + 1} value={(index + 1).toString()}>
                  {index + 1}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <p className="ml-4">out of {signers.length} signer(s)</p>
      </div>

      <div className="flex justify-end items-center mt-8">
        <Button onClick={() => handleSave()}>Save</Button>
      </div>
    </Card>

  </div>
}
