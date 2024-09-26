export const handleDownload = (base64Data: string, fileName: string, type: string) => {
  // Remove potential Base64 prefix
  const cleanedBase64 = base64Data.replace(/^data:application\/pdf;base64,/, '');

  // Convert Base64 to Blob
  const byteCharacters = atob(cleanedBase64);
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  const blob = new Blob([byteArray], { type: type });

  // Create Blob URL
  const url = URL.createObjectURL(blob);

  // Create temporary <a> element and trigger download
  const link = document.createElement('a');
  link.href = url;
  link.download = fileName || 'document.pdf';
  document.body.appendChild(link);
  link.click();

  // Cleanup
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
