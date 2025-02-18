import { DISCOVERY_DOC } from "./providers";

export const gdriveRecover = (token: string, passphraseId: string) => {
  return new Promise<string>((resolve, reject) => {
    console.log('gapi loading')
    gapi.load("client", {
      callback: async () => {
        try {
          console.log('initializing gapi client')
          const filename = `passphrase_${passphraseId}.txt`;
          await gapi.client.init({
            discoveryDocs: [DISCOVERY_DOC],
          });
          console.log('initializing gapi client done')

          console.log('listing files')
          const list = await gapi.client.drive.files.list({
            spaces: "appDataFolder",
            oauth_token: token,
            q: `name='${filename}'`,
          });
          console.log('listing files done', list)

          console.log('finding file')
          const file = list.result.files?.find((f) => f.name === filename);
          console.log('finding file done', file)
          if (file?.id) {
            console.log('fetching file')
            const res = await fetch(`https://www.googleapis.com/drive/v3/files/${file.id}?alt=media`, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
            const content = await res.text();
            console.log('fetching file done', content)
            return resolve(content);
          } else {
            throw new Error("not found");
          }
        } catch (e) {
          reject(e);
        }
      },
      onerror: reject,
      ontimeout: reject,
      timeout: 5_000,
    });
  });
};

export const gdriveBackup = (token: string, passphrase: string, passphraseId: string) => {
  return new Promise<void>((resolve, reject) => {
    console.log('gapi loading')
    gapi.load("client", {
      callback: async () => {
        try {
          console.log('initializing gapi client')
          await gapi.client.init({
            discoveryDocs: [DISCOVERY_DOC],
          });

          console.log('initializing gapi client done')
          const filename = `passphrase_${passphraseId}.txt`;

          const file = new Blob([passphrase], { type: "text/plain" });
          const metadata: gapi.client.drive.File = {
            name: filename,
            mimeType: "text/plain",
            parents: ["appDataFolder"],
          };

          console.log('creating file')
          const create = await gapi.client.drive.files.create({
            oauth_token: token,
            uploadType: "media",
            resource: metadata,
            fields: "id",
          });
          console.log('file created', create)

          console.log('uploading file')
          const res = await fetch(
            `https://www.googleapis.com/upload/drive/v3/files/${create.result.id}?uploadType=media`,
            {
              method: "PATCH",
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": metadata.mimeType!,
                "Content-Length": file.size.toString(),
              },
              body: passphrase,
            },
          );
          console.log('file uploaded', res)
          resolve();
        } catch (e) {
          reject(e);
        }
      },
      onerror: reject,
      ontimeout: reject,
      timeout: 5_000,
    });
  });
};
