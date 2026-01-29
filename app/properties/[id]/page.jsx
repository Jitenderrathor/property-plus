"use client";
import { useRouter, useParams, useSearchParams, usePathname } from "next/navigation";

function PropertyPage() {
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  return <div>
    Property Page - {params.id} - {searchParams.get("name")} - {pathname}
    
    {/* Example of using router to navigate pushing to home means "/" */}
    <button onClick={() => router.push("/")}>Push</button>
    {/* Example of using router to navigate replace to home means "/" */}
    <button onClick={() => router.replace("/")}>Replace</button>
    {/* Example of using router to navigate back to the last route "/" */}
    <button onClick={() => router.back()}>Back</button>
    {/* Example of using router to navigate pushing to home means "/" */}
    <button onClick={() => router.push("/")}>Go to Home</button>
  </div>;
}

export default PropertyPage;
