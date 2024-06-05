import { KababMenu } from "@/src/components/dashboard/dashboardComponents/CardItems";
import SearchInput from "@/src/components/dashboard/dashboardComponents/SearchInput";
import { Button, ButtonGroup, Grid } from "@mui/material";

const columns = ["#", "Type", "Discount", "Date"];

function DiscountGrid() {
  return (
    <div className="border pt-8 rounded-lg">
      <Grid container mb={3} spacing={3} px={3}>
        <Grid item xs={12} md={9}>
          <div className="border-t-4 border-[#FFA500] w-24 " />
          <p className="text-[#344054] text-lg font-semibold pt-4">
            Discount History
          </p>
          <h6 className="text-xs text-[#475467] pt-1 md:pt-0">
            Select user which you want to add something or deduct
          </h6>
        </Grid>

        <Grid item xs={12} md={3}>
          <div className="flex justify-between gap-3">
            <SearchInput />
            <svg
              width="40"
              height="34"
              viewBox="0 0 40 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="39"
                height="43"
                rx="7.5"
                stroke="#D0D5DD"
              />
              <path
                d="M15 22H25M12.5 17H27.5M17.5 27H22.5"
                stroke="#667085"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </Grid>

        <Grid item xs={12} className="flex items-end justify-end">
          <ButtonGroup
            variant="contained"
            className="bg-[#FFA500]"
            color="inherit"
          >
            <Button className="hover:bg-[#FFA500] font-mont normal-case text-white ">
              CSV
            </Button>
            <Button className="hover:bg-[#FFA500] font-mont normal-case text-white">
              Export CSV
            </Button>
          </ButtonGroup>
        </Grid>

        <Grid item xs={12}>
          <div className="relative overflow-x-auto border rounded-md pb-3 pr-3" >
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  {columns.map((item, index) => (
                    <th scope="col" key={index} className="px-6 py-3">
                      {item}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4 font-medium">1</td>
                  <td className="px-6 py-4 font-medium">agency</td>
                  <td className="px-6 py-4 font-medium">23</td>
                  <td className="px-6 py-4 font-medium">10-2-2024</td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4 font-medium">1</td>
                  <td className="px-6 py-4 font-medium">agency</td>
                  <td className="px-6 py-4 font-medium">23</td>
                  <td className="px-6 py-4 font-medium">10-2-2024</td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4 font-medium">1</td>
                  <td className="px-6 py-4 font-medium">agency</td>
                  <td className="px-6 py-4 font-medium">23</td>
                  <td className="px-6 py-4 font-medium">10-2-2024</td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4 font-medium">1</td>
                  <td className="px-6 py-4 font-medium">agency</td>
                  <td className="px-6 py-4 font-medium">23</td>
                  <td className="px-6 py-4 font-medium">10-2-2024</td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4 font-medium">1</td>
                  <td className="px-6 py-4 font-medium">agency</td>
                  <td className="px-6 py-4 font-medium">23</td>
                  <td className="px-6 py-4 font-medium">10-2-2024</td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4 font-medium">1</td>
                  <td className="px-6 py-4 font-medium">agency</td>
                  <td className="px-6 py-4 font-medium">23</td>
                  <td className="px-6 py-4 font-medium">10-2-2024</td>
                </tr>
              </tbody>
            </table>

            <div className="text-end pt-5 text-[#353535] font-semibold cursor-pointer select-none">
              View All
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default DiscountGrid;