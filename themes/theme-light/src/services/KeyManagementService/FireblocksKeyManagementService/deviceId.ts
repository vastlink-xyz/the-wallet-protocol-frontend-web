const DEVICE_ID_KEY = "DEMO_APP:deviceId";

export const generateDeviceId = () => crypto.randomUUID();

export const loadDeviceId = (sub: string) => {
  return localStorage.getItem(`${DEVICE_ID_KEY}-${sub}`);
};

export const getOrCreateDeviceId = (sub: string) => {
  const deviceId = loadDeviceId(sub);
  if (deviceId) {
    return deviceId;
  }

  const uuid = generateDeviceId();
  storeDeviceId(uuid, sub);
  return uuid;
};

export const storeDeviceId = (deviceId: string, sub: string) => {
  localStorage.setItem(`${DEVICE_ID_KEY}-${sub}`, deviceId);
};
