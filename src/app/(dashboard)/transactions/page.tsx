const TransactionsPage = () => {
  return (
    <div className="flex-1 overflow-y-auto p-md md:p-xl space-y-lg">
      {/* <!-- Summary Cards --> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-lg">
        <div className="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-shadow">
          <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-2">
            Total Income
          </p>
          <div className="flex items-end justify-between">
            <h3 className="font-headline-lg text-headline-lg text-on-surface">
              $124,500.00
            </h3>
            <span className="text-primary-container flex items-center text-label-md font-medium">
              <span className="material-symbols-outlined text-[16px]">
                trending_up
              </span>{" "}
              12%
            </span>
          </div>
        </div>
        <div className="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-shadow">
          <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-2">
            Total Expenses
          </p>
          <div className="flex items-end justify-between">
            <h3 className="font-headline-lg text-headline-lg text-on-surface">
              $82,340.50
            </h3>
            <span className="text-error flex items-center text-label-md font-medium">
              <span className="material-symbols-outlined text-[16px]">
                trending_down
              </span>{" "}
              4%
            </span>
          </div>
        </div>
        <div className="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-shadow">
          <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-2">
            Net Balance
          </p>
          <div className="flex items-end justify-between">
            <h3 className="font-headline-lg text-headline-lg text-on-surface">
              $42,159.50
            </h3>
            <span className="text-primary-container flex items-center text-label-md font-medium">
              <span className="material-symbols-outlined text-[16px]">
                trending_up
              </span>{" "}
              8%
            </span>
          </div>
        </div>
        <div className="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-shadow">
          <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-2">
            Transactions
          </p>
          <div className="flex items-end justify-between">
            <h3 className="font-headline-lg text-headline-lg text-on-surface">
              1,432
            </h3>
            <span className="text-on-surface-variant flex items-center text-label-md">
              This Month
            </span>
          </div>
        </div>
      </div>
      {/* <!-- Toolbar & Table --> */}
      <div className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm overflow-hidden flex flex-col">
        {/* <!-- Table Toolbar --> */}
        <div className="p-4 border-b border-outline-variant bg-surface-container-low flex flex-wrap gap-4 items-center justify-between">
          <div className="flex items-center gap-2">
            <select className="text-body-md border-outline-variant rounded-md py-1.5 pl-3 pr-8 bg-surface-container-lowest text-on-surface focus:ring-primary-container/20 focus:border-primary-container">
              <option>All Categories</option>
              <option>Software</option>
              <option>Marketing</option>
              <option>Payroll</option>
            </select>
            <select className="text-body-md border-outline-variant rounded-md py-1.5 pl-3 pr-8 bg-surface-container-lowest text-on-surface focus:ring-primary-container/20 focus:border-primary-container">
              <option>All Types</option>
              <option>Income</option>
              <option>Expense</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 text-error text-label-md font-medium border border-outline-variant rounded-md hover:bg-error-container/20 transition-colors flex items-center gap-1 opacity-50 cursor-not-allowed">
              <span className="material-symbols-outlined text-[16px]">
                delete
              </span>{" "}
              Delete
            </button>
            <button className="px-3 py-1.5 text-on-surface-variant text-label-md font-medium border border-outline-variant rounded-md hover:bg-surface-container transition-colors flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">
                download
              </span>{" "}
              Export
            </button>
          </div>
        </div>
        {/* <!-- Table --> */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low border-b border-outline-variant">
                <th className="p-3 w-12 text-center">
                  <input
                    className="rounded border-outline-variant text-primary focus:ring-primary-container/20"
                    type="checkbox"
                  />
                </th>
                <th className="p-3 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
                  Date
                </th>
                <th className="p-3 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
                  Description
                </th>
                <th className="p-3 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
                  Category
                </th>
                <th className="p-3 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
                  Amount
                </th>
                <th className="p-3 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
                  Status
                </th>
                <th className="p-3 w-24"></th>
              </tr>
            </thead>
            <tbody className="text-body-md text-on-surface">
              <tr className="border-b border-outline-variant hover:bg-surface-container transition-colors group">
                <td className="p-3 text-center">
                  <input
                    className="rounded border-outline-variant text-primary focus:ring-primary-container/20"
                    type="checkbox"
                  />
                </td>
                <td className="p-3 whitespace-nowrap">Oct 24, 2023</td>
                <td className="p-3 font-medium">AWS Cloud Services</td>
                <td className="p-3">
                  <span className="px-2 py-1 rounded-full bg-surface-variant text-label-md text-on-surface-variant">
                    Infrastructure
                  </span>
                </td>
                <td className="p-3 font-code-sm text-code-sm text-error">
                  -$4,250.00
                </td>
                <td className="p-3">
                  <span className="px-2 py-1 rounded-full bg-primary-container/20 text-primary text-label-md">
                    Completed
                  </span>
                </td>
                <td className="p-3 text-right opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="text-on-surface-variant hover:text-primary">
                    <span className="material-symbols-outlined text-[18px]">
                      more_vert
                    </span>
                  </button>
                </td>
              </tr>
              <tr className="border-b border-outline-variant hover:bg-surface-container transition-colors group">
                <td className="p-3 text-center">
                  <input
                    className="rounded border-outline-variant text-primary focus:ring-primary-container/20"
                    type="checkbox"
                  />
                </td>
                <td className="p-3 whitespace-nowrap">Oct 23, 2023</td>
                <td className="p-3 font-medium">Acme Corp Subscription</td>
                <td className="p-3">
                  <span className="px-2 py-1 rounded-full bg-surface-variant text-label-md text-on-surface-variant">
                    Revenue
                  </span>
                </td>
                <td className="p-3 font-code-sm text-code-sm text-primary-container">
                  +$12,000.00
                </td>
                <td className="p-3">
                  <span className="px-2 py-1 rounded-full bg-primary-container/20 text-primary text-label-md">
                    Completed
                  </span>
                </td>
                <td className="p-3 text-right opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="text-on-surface-variant hover:text-primary">
                    <span className="material-symbols-outlined text-[18px]">
                      more_vert
                    </span>
                  </button>
                </td>
              </tr>
              <tr className="border-b border-outline-variant hover:bg-surface-container transition-colors group">
                <td className="p-3 text-center">
                  <input
                    className="rounded border-outline-variant text-primary focus:ring-primary-container/20"
                    type="checkbox"
                  />
                </td>
                <td className="p-3 whitespace-nowrap">Oct 21, 2023</td>
                <td className="p-3 font-medium">Google Workspace</td>
                <td className="p-3">
                  <span className="px-2 py-1 rounded-full bg-surface-variant text-label-md text-on-surface-variant">
                    Software
                  </span>
                </td>
                <td className="p-3 font-code-sm text-code-sm text-error">
                  -$850.00
                </td>
                <td className="p-3">
                  <span className="px-2 py-1 rounded-full bg-surface-variant text-on-surface-variant text-label-md">
                    Pending
                  </span>
                </td>
                <td className="p-3 text-right opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="text-on-surface-variant hover:text-primary">
                    <span className="material-symbols-outlined text-[18px]">
                      more_vert
                    </span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TransactionsPage;
