import { LineChartIllustration } from "@/components/icons/LineChartIllustration"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRoot,
  TableRow,
} from "../Table"

const summary = [
  {
    name: "Brand Development",
    value: "12 Projects",
    planned: "10 Projects",
    budget: "$145K",
    growth: "+20.2%",
    efficiency: "+15.8%",
    satisfaction: "+18.9%",
    bgColor: "bg-[#003566]",
    changeType: "positive",
  },
  {
    name: "Digital Marketing",
    value: "8 Campaigns",
    planned: "6 Campaigns",
    budget: "$89K",
    growth: "+33.1%",
    efficiency: "+25.6%",
    satisfaction: "+28.9%",
    bgColor: "bg-[#ffc300]",
    changeType: "positive",
  },
  {
    name: "Web Development",
    value: "5 Websites",
    planned: "7 Websites",
    budget: "$67K",
    growth: "-8.1%",
    efficiency: "-12.3%",
    satisfaction: "-5.9%",
    bgColor: "bg-[#000814]",
    changeType: "negative",
  },
]

export default function AgencyPerformance() {
  return (
    <div className="h-150 shrink-0 overflow-hidden [mask-image:radial-gradient(white_30%,transparent_90%)] perspective-[4000px] perspective-origin-center">
      <div className="-translate-y-10 -translate-z-10 rotate-x-10 rotate-y-20 -rotate-z-10 transform-3d">
        <h3 className="text-sm text-gray-500">Agency Performance Overview</h3>
        <p className="mt-1 text-3xl font-semibold text-[#003566]">
          25 Active Projects
        </p>
        <p className="mt-1 text-sm font-medium">
          <span className="text-[#003566]">+8 projects (47%)</span>{" "}
          <span className="font-normal text-gray-500">This quarter</span>
        </p>
        <LineChartIllustration className="mt-8 w-full min-w-200 shrink-0" />

        <TableRoot className="mt-6 min-w-200">
          <Table>
            <TableHead>
              <TableRow>
                <TableHeaderCell>Service</TableHeaderCell>
                <TableHeaderCell className="text-right">Delivered</TableHeaderCell>
                <TableHeaderCell className="text-right">
                  Planned
                </TableHeaderCell>
                <TableHeaderCell className="text-right">
                  Budget
                </TableHeaderCell>
                <TableHeaderCell className="text-right">
                  Growth
                </TableHeaderCell>
                <TableHeaderCell className="text-right">
                  Efficiency
                </TableHeaderCell>
                <TableHeaderCell className="text-right">
                  Satisfaction
                </TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {summary.map((item) => (
                <TableRow key={item.name}>
                  <TableCell className="font-medium text-gray-900">
                    <div className="flex space-x-3">
                      <span
                        className={item.bgColor + " w-1 shrink-0 rounded"}
                        aria-hidden="true"
                      />
                      <span>{item.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">{item.value}</TableCell>
                  <TableCell className="text-right">{item.planned}</TableCell>
                  <TableCell className="text-right">{item.budget}</TableCell>
                  <TableCell className="text-right">
                    <span
                      className={
                        item.changeType === "positive"
                          ? "text-[#ffc300]"
                          : "text-red-700"
                      }
                    >
                      {item.growth}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <span
                      className={
                        item.changeType === "positive"
                          ? "text-[#ffc300]"
                          : "text-red-700"
                      }
                    >
                      {item.efficiency}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <span
                      className={
                        item.changeType === "positive"
                          ? "text-[#ffc300]"
                          : "text-red-700"
                      }
                    >
                      {item.satisfaction}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableRoot>
      </div>
    </div>
  )
}
