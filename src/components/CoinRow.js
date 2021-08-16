export default function CoinRow({ coin, index }) {
  return (
    <tr>
      <td>{index}</td>
      <td>
        <img src={coin.image} alt={coin.name} style={{width: "3%"}} className="me-2"/>
        <span>{coin.name}</span>
        <span className="ms-3 text-muted text-uppercase">{coin.symbol}</span>
      </td>
      <td className="text-end">{coin.current_price} US$</td>
      <td className={coin.price_change_percentage_24h > 0 ? "text-success" : "text-danger"}>
        {coin.price_change_percentage_24h}
      </td>
      <td className="text-end">{coin.total_volume} US$</td>
    </tr>
  )
}
