


import {UserButton }from "@clerk/nextjs";

import {Button} from "@/components/ui/button";
import MobilebarSidebar from "@/components/mobile-sidebar";

const Navbar = () => {

return (

<div className="flex items-center p-4">

<MobilebarSidebar/>

<div className="flex w-full justify-end">

<UserButton afterSignOutUrl="/" />

</div>

</div>
);}


 export default Navbar;