import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 4000);
  }, []);
  return (
    <div>
      <h3>404</h3>
      <h2>Oops! Sidan kan inte hittas :( </h2>
      <p>
        Gå till{" "}
        <Link href="/">
          <a>Hem</a>
        </Link>{" "}
      </p>
    </div>
  );
};

export default NotFound;
