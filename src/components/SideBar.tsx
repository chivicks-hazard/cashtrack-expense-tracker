"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideBar = () => {
  const pathName = usePathname();

  const links = [
    {
      name: "Overview",
      href: "/overview",
      icon: "dashboard",
    },
    {
      name: "Transactions",
      href: "/transactions",
      icon: "payments",
    },
    {
      name: "Categories",
      href: "/categories",
      icon: "category",
    },
    {
      name: "Analytics",
      href: "/analytics",
      icon: "analytics",
    },
    {
      name: "Budgets",
      href: "/budgets",
      icon: "account_balance_wallet",
    },
    {
      name: "Settings",
      href: "/settings",
      icon: "settings",
    },
  ];

  return (
    <aside className="w-[260px] h-screen sticky left-0 top-0 bg-surface-container-lowest border-r border-outline-variant flex flex-col p-lg overflow-y-auto hidden md:flex z-50">
      <div className="flex items-center gap-3 mb-8 px-2">
        <img
          className="w-8 h-8 rounded-DEFAULT object-cover"
          data-alt="A sleek, minimalist geometric logo representing financial growth and stability. The logo uses a high-contrast palette of vibrant emerald green against a pure white background. The design is modern, abstract, and heavily inspired by high-end fintech aesthetics."
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBN0bc_EAZKyreuF6XyHcYLiWlNgpnjvIWod1tisFP3yOs3ySt6dYImJ_oDJLZLfE6IhXnsax90z5ZBnBakuJDRwdrLND0lXQ6AyRZKqKVHSlr_s6CmYLPOJ0INYYejzR5PYSiMaZviX-PP8ULRebPUBSgDH3PDNQoBbJHgspvcyyYGJlOvsXGQNYlbJ4vuJ4iMeX9Rvb8NMa8ZCU5P_Z1tkbj1kMDTD7cTzRr4lBb2nYzlyvZif1RhQc7Vxrd84ujFe_o9kEHa77m8"
        />
        <div>
          <h1 className="font-headline-md text-headline-md font-bold text-primary">
            FinancePro
          </h1>
          <p className="font-label-md text-label-md text-on-surface-variant">
            Enterprise Plan
          </p>
        </div>
      </div>
      <button className="w-full bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary transition-colors duration-200 py-2 px-4 rounded-lg font-title-md text-title-md flex items-center justify-center gap-2 mb-6">
        <span className="material-symbols-outlined text-[20px]">add</span>
        New Transaction
      </button>
      <nav className="flex-1 space-y-1">
        {links.map((link, i) => (
          <Link
            key={i}
            href={link.href}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg ${pathName == link.href ? "text-primary font-bold bg-surface-container-high transition-transform transform scale-95" : "text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors duration-200"}`}
          >
            <span
              className="material-symbols-outlined text-[20px]"
              data-icon={link.icon}
            >
              {link.icon}
            </span>
            <span className="font-title-md text-title-md">{link.name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default SideBar;
