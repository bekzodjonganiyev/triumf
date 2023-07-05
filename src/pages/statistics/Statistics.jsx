import { CircularStatistics } from "../../components"
import { MoneyCard } from "../../components/money_card/MoneyCard"

export const Statistics = () => {
  const id = 1
  return (
    <div className="flex justify-between gap-28">
      <CircularStatistics total={982} delivered={830} url={`/details/${id}`}/>
      <MoneyCard count={1000000} isPaid={false} hasStatus={false}/>
    </div>
  )
}
