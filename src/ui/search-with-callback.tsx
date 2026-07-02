"use client";

import { Search } from "nextra/components";

export default function SearchWithCallback() {
  return (
    <Search
      onSearch={(q) => {
        console.log("Search query", q);
      }}
      placeholder="Search"
      emptyResult={"No Result Found!"}
      errorText={"Failed to Load!"}
      loading={"Loading..."}
    />
  );
}
