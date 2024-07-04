// "use client";
// import { useLocale } from "next-intl";
// import { useRouter } from "next/navigation";
// import React, { useTransition } from "react";

// const localSwitcher = () => {
//   const [isPending, startTransition] = useTransition();
//   const router = useRouter();
//   const localActive = useLocale();

//   const onChangeLang = (e) => {
//     const selectedLocale = e.target.value;
//     startTransition(() => {
//       router.replace(`/${selectedLocale}`);
//     });
//   };
//   return (
//     <label>
//       <select disabled={isPending} defaultValue={localActive} onChange={onChangeLang}>
//         <option value="en">English</option>
//         <option value="tr">Turkish</option>
//         <option value="sv">Swedish</option>
//         <option value="de">Germany</option>
//       </select>
//     </label>
//   );
// };

// export default localSwitcher;

"use client";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import React, { useTransition } from "react";

const LocaleSwitcher = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();

  const onChangeLang = (e) => {
    const selectedLocale = e.target.value;
    startTransition(() => {
      const newPathname = pathname.replace(`/${locale}`, `/${selectedLocale}`);
      router.replace(newPathname);
    });
  };

  return (
    <label>
      <select disabled={isPending} defaultValue={locale} onChange={onChangeLang}>
        <option value="en">English</option>
        <option value="tr">Turkish</option>
        <option value="sv">Swedish</option>
        <option value="de">German</option>
      </select>
    </label>
  );
};

export default LocaleSwitcher;
