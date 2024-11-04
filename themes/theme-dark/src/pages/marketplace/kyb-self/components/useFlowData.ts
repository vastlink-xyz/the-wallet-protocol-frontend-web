import api from '@/lib/api';
import { log } from '@/lib/utils';
import { useSearchParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

export const useFlowData = (props?: {
  flowId?: string | null;
  flowIndex?: string | null;
}) => {
  const [searchParams] = useSearchParams()
  const [flowId, setFlowId] = useState<string | null>(props?.flowId || null);
  const [flowIndex, setFlowIndex] = useState<string | null>(props?.flowIndex || null);
  const [serviceUrl, setServiceUrl] = useState<string | null>(null);
  const [nextIndex, setNextIndex] = useState<number>(-1);
  const [serviceEndingUrl, setServiceEndingUrl] = useState<string | null>(null);

  useEffect(() => {
    const flowId = searchParams.get('flowId') || props?.flowId;
    const flowIndex = searchParams.get('flowIndex') || props?.flowIndex;
    if (flowId && flowIndex) {
      setFlowId(flowId)
      setFlowIndex(flowIndex)
      initFlowData(flowId, flowIndex)
    }
  }, [searchParams])

  const initFlowData = async (flowId: string, flowIndex: string) => {
    const response = await api.post('/marketplace/product/get-flow-product-by-index', {
      flowId: flowId,
      index: flowIndex,
    });
    const data = response.data;
    log('flow data', data)
    setServiceUrl(data.serviceUrl)
    setNextIndex(data.nextIndex)
    setServiceEndingUrl(data.serviceEndingUrl)
  }

  return {
    flowId,
    flowIndex,
    serviceUrl,
    nextIndex,
    serviceEndingUrl,
  }
}