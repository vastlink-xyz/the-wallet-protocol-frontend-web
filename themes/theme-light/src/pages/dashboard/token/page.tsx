import { useParams } from "react-router-dom";
import { TokenDetail } from "./components/TokenDetail";
import { TokenType } from "@/types/tokens";

export default function TokenPage() {
  const { token } = useParams<{ token: Lowercase<TokenType> }>()

  const tokenType = token?.toUpperCase() as TokenType

  return (
    <div>
      <TokenDetail tokenType={tokenType} />
    </div>
  )
}
