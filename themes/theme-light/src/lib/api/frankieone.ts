import api from './index';

const pollTaskStatus = async (taskId: string): Promise<any> => {
  let attempts = 0;
  const MAX_POLL_ATTEMPTS = 15;

  const checkStatus = async (): Promise<any> => {
    if (attempts >= MAX_POLL_ATTEMPTS) {
      throw new Error('Verification timeout: Maximum polling attempts reached');
    }

    attempts++;
    const { data: task } = await api.get(`/marketplace/product/frankieone/task-status/${taskId}`);
    
    if (task.status === 'completed') {
      return task.result;
    }
    
    if (task.status === 'failed') {
      throw new Error(task.error || 'Verification failed');
    }

    await new Promise(resolve => setTimeout(resolve, 10000));
    return checkStatus();
  };

  return checkStatus();
};

export const verifyInternationalBusinessProfile = async (params: any) => {
  const { data: { taskId } } = await api.post('/marketplace/product/frankieone/international-business-profile', params);
  const result = await pollTaskStatus(taskId);
  return { data: result };
};

export const getBusinessEntityList = async (entityId: string) => {
  const { data: { taskId } } = await api.get(`/marketplace/product/frankieone/international-business-entity-list?entityId=${entityId}`);
  const result = await pollTaskStatus(taskId);
  return { data: result };
};
