import { Button } from "@/components/ui/button";
import Logout from "@/module/auth/components/logout";
import { requireAuth } from "@/module/auth/utils/auth-utils";
import Image from "next/image";


export default async function Home() {
  // to access this page, we need logged in users
  await requireAuth();
  return (
    <div>
      <Logout>
        <Button>
          LogOut
        </Button>
      </Logout>
    </div>
  );
}
