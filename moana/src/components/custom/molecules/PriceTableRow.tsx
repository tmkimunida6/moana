import { ReactNode } from 'react'
import { IoArrowDownOutline } from 'react-icons/io5'

type PriceTableRowProps = {
  th: ReactNode
  price: number
  oldPrice?: number | undefined
}

export default function PriceTableRow({
  th,
  price,
  oldPrice = undefined,
}: PriceTableRowProps) {
  return (
    <tr>
      <th className="text-base bg-[var(--brand-color-primary-50)] py-4 px-2 w-[35%]">
        {th}
      </th>
      <td className="text-xl font-bold text-center bg-white py-4 px-2 w-[75%]">
        <div className="flex flex-col items-center">
          {oldPrice && (
            <>
              <span className="text-base font-normal">
                ￥{Number(oldPrice).toLocaleString()}
              </span>
              <IoArrowDownOutline className="text-red-500" />
            </>
          )}
          <span className={oldPrice ? 'text-red-500' : ''}>
            ￥{Number(price).toLocaleString()}
            <span className="text-xs"> (税込)</span>
          </span>
        </div>
      </td>
    </tr>
  )
}
