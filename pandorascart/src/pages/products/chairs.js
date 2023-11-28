import AllProducts from "@/pages/components/AllProducts";
import { useSearch } from "@/context/SearchContext";

export default function Chairs() {
  const { searchQuery } = useSearch();
  const chairs = `/api/category?category=chairs&search=${searchQuery}`;
  return (
    <>
      <AllProducts apiEndpoint={chairs} />
    </>
  );
}