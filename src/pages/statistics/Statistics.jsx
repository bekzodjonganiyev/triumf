import { CircularStatistics } from "../../components"

export const Statistics = () => {
  const id  =1
  return (
    <div>
      <CircularStatistics total={982} delivered={830} url={`/details/${id}`}/>
    </div>
  )
}
