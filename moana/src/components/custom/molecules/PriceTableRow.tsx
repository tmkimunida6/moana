import { ReactNode } from 'react'
import { IoArrowDownOutline } from 'react-icons/io5'

type PriceTableRowProps = {
  th: ReactNode
  price: number
  oldPrice?: number | undefined
  campaign?: string
}

export default function PriceTableRow({
  th,
  price,
  oldPrice = undefined,
  campaign,
}: PriceTableRowProps) {
  return (
    <tr className="border">
      <th className="w-[35%] bg-[var(--brand-color-primary-50)] px-2 py-4 text-base">
        {th}
      </th>
      <td className="w-[75%] bg-neutral-50 px-2 py-4 text-center text-xl font-bold">
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
            {campaign && <span className="block text-sm">{campaign}</span>}￥
            {Number(price).toLocaleString()}
            <span className="text-xs"> (税込)</span>
          </span>
        </div>
      </td>
    </tr>
  )
}
