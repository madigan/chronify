import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import { User } from "lucide-react";
import { useCallback, useState } from "react";
import DropdownMenu from "./DropdownMenu";
import ErrorBoundary from "./ErrorBounary";

export interface Profile {
  email: string;
  firstName: string;
  lastName: string;
  imageURL?: string;
}

export default function Auth() {
  const [profile, setProfile] = useState<Profile | null>(null);

  const logIn = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const userInfo = await fetch(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        {
          headers: {
            Authorization: `Bearer ${tokenResponse.access_token}`,
          },
        },
      ).then((data) => data.json());
      setProfile({
        email: userInfo.email,
        firstName: userInfo.given_name,
        lastName: userInfo.family_name,
        imageURL: userInfo.picture,
      });
    },
    scope: "email profile openid https://www.googleapis.com/auth/calendar",
  });

  const logout = useCallback(() => {
    googleLogout();
    setProfile(null);
  }, []);

  if (profile) {
    const avatar = !profile.imageURL ? (
      <div className="avatar">
        <div className="w-6 rounded-full border-1">
          <img src={profile.imageURL} alt="user portrait" />
        </div>
      </div>
    ) : (
      <div className="avatar">
        <div className="border-1 rounded-full">
          <User />
        </div>
      </div>
    );
    return (
      <DropdownMenu button={<div className="avatar">{avatar}</div>}>
        <button className="btn" onClick={logout}>
          Log Out
        </button>
      </DropdownMenu>
    );
  } else {
    return (
      <ErrorBoundary>
        <button className="btn btn-soft" onClick={() => logIn()}>
          LogIn
        </button>
      </ErrorBoundary>
    );
  }
}

function unfocus() {
  if (document.activeElement instanceof HTMLElement) {
    document.activeElement.blur();
  }
}
