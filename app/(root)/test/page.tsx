"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createProduct } from "@/lib/for_test/product";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const Page = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [value, setValue] = useState({
    title: "",
    description: "",
    picture: "",
    price: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await createProduct({
        title: value.title,
        description: value.description,
        picture: value.picture,
        price: value.price,
        path: pathname,
      });

      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-[550px] h-[450px] border border-gray-700 shadow rounded-lg bg-gray-300 flex flex-col items-center justify-center gap-5">
        <Input
          type="text"
          name="title"
          placeholder="Title"
          value={value.title}
          onChange={handleChange}
        />
        <Input
          type="url"
          name="picture"
          placeholder="Picture"
          value={value.picture}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="description"
          placeholder="Description"
          value={value.description}
          onChange={handleChange}
        />
        <Input
          type="number"
          name="price"
          value={value.price}
          onChange={handleChange}
        />
        <Button type="submit">Pass To DataBase</Button>
      </form>
    </div>
  );
};

export default Page;
