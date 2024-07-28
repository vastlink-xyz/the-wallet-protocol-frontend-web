import { TokenDetail } from "./components/TokenDetail";
import { TokenType } from "@/types/tokens";

export default function TokenPage({
  params
}: {
  params: {
    token: Lowercase<TokenType>;
  }
}) {
  return (
    <div>
      <TokenDetail tokenType={params.token.toUpperCase() as TokenType} />
    </div>
  )
}
