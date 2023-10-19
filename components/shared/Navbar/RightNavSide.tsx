import { SignOutButton, SignedIn, SignedOut, auth } from "@clerk/nextjs";
import { Heart, Search, ShoppingCart, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getUserById, getUserInfo } from "@/lib/actions/user.actions";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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

      <DropdownMenu>
        <DropdownMenuTrigger className="rounded-full">
          <SignedIn>
            <Avatar>
              <AvatarImage
                src={userInfo?.user.picture}
                className="cursor-pointer active:shadow-md"
              />
              <AvatarFallback>{userInfo?.user.name}</AvatarFallback>
            </Avatar>
          </SignedIn>
          <SignedOut>
            <User
              className={`${
                customSize ? "w-[21px] h-[21px]" : "w-[23px] h-[23px]"
              } cursor-pointer`}
            />
          </SignedOut>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="shadow-md border-gray-300 border bg-gray-100">
          <DropdownMenuLabel>
            <SignedOut>My Account</SignedOut>
            <SignedIn>{userInfo?.user.name}</SignedIn>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <SignedIn>
            <DropdownMenuItem className="text-sm font-normal cursor-pointer active:bg-gray-300">
              <SignOutButton>LogOut</SignOutButton>
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
    </>
  );
};

export default RightNavSide;
