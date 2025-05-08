import { AuthMethod } from "@lit-protocol/types";
import { EditAuthmethod } from "./EditAuthmethod";
import { ExecuteLitActionCode } from "./ExecuteLitActionCode";

const defaultPkp = {
  "tokenId": "0xc290c87ee94f5871054de74c73ca2f6d306684141162269f3271b6346b8c42ce",
  "publicKey": "0x0461eccec567d90b6061484f9cf520308a3fa872b74f241c3f99f556ba35a22018bbfb088be071771463da55c005d7ce7203e8bef3ad6455d850448a5def41b2cb",
  "ethAddress": "0xD98F5f7D086A720109cDb8922C0416FF96e73eA0"
}

export function Example({
  authMethod,
}: {
  authMethod: AuthMethod;
}) {
  return <div>
    <EditAuthmethod authMethod={authMethod} />
    <ExecuteLitActionCode authMethod={authMethod} />
  </div>;
}
