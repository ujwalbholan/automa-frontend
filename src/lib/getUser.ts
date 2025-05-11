import { cookies } from "next/headers";

export async function getUser() {

    const cookieStore = await cookies();
    const token = cookieStore.get("token");

    if (token) {
        return true;
    }
    return false;
}
