import { SignedIn, SignedOut, auth } from "@clerk/nextjs";
import { Heart, Search, ShoppingCart, User } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getUserInfo } from "@/lib/actions/user.actions";
import Link from "next/link";

interface Props {
  customSize?: boolean;
}

const RightNavSide = async ({ customSize }: Props) => {
  const { userId: clerkId } = auth();

  const userInfo = await getUserInfo({
    clerkId,
  });

  return (
    <>
      <SignedIn>
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            variables: {
              colorPrimary: "#B88E2F",
            },
          }}
        />
      </SignedIn>
      <SignedOut>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <User
              className={`${
                customSize ? "w-[21px] h-[21px]" : "w-[23px] h-[23px]"
              } cursor-pointer`}
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="shadow-md border-gray-300 border bg-gray-100">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <SignedIn>
              <DropdownMenuItem className="text-sm font-normal cursor-pointer active:bg-gray-300">
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem className="text-sm font-normal cursor-pointer active:bg-gray-300">
                LogOut
              </DropdownMenuItem>
            </SignedIn>
            <SignedOut>
              <DropdownMenuItem className="text-sm font-normal cursor-pointer active:bg-gray-300">
                <Link href={"/sign-in"}> Sign in</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-sm font-normal cursor-pointer active:bg-gray-300">
                <Link href={"/sign-up"}> Sign up</Link>
              </DropdownMenuItem>
            </SignedOut>
          </DropdownMenuContent>
        </DropdownMenu>
      </SignedOut>

      <Search
        className={`${
          customSize ? "w-[21px] h-[21px]" : "w-[23px] h-[23px]"
        } cursor-pointer`}
      />
      <Heart
        className={`${
          customSize ? "w-[21px] h-[21px]" : "w-[23px] h-[23px]"
        } cursor-pointer`}
      />
      <ShoppingCart
        className={`${
          customSize ? "w-[21px] h-[21px]" : "w-[23px] h-[23px]"
        } cursor-pointer`}
      />
    </>
  );
};

export default RightNavSide;
