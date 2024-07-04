"use client";
// pages/account.tsx
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "@/app/firebase";
import { doc, getDoc, DocumentData } from "firebase/firestore";

interface OrganizationData {
  Name: string;
  role: string;
}

const Account: React.FC = () => {
  const [user, loading, error] = useAuthState(auth);
  const [orgId, setOrgId] = useState<string | null>(null);
  const [orgData, setOrgData] = useState<OrganizationData | null>(null);

  useEffect(() => {
    const fetchOrgId = async () => {
      if (user) {
        const docRef = doc(db, "account", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data: DocumentData = docSnap.data();
          setOrgId(data.org_id || null);
        } else {
          console.log("No such document!");
        }
      }
    };

    fetchOrgId();
  }, [user]);

  useEffect(() => {
    const fetchOrgData = async () => {
      if (orgId) {
        const orgDocRef = doc(db, "organization", orgId);
        const orgDocSnap = await getDoc(orgDocRef);

        if (orgDocSnap.exists()) {
          const orgData: DocumentData = orgDocSnap.data();
          setOrgData({
            Name: orgData.Name || "No Name found",
            role: orgData.role || "No role found",
          });
        } else {
          console.log("No such organization document!");
        }
      }
    };

    fetchOrgData();
  }, [orgId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Account</h1>
      {user ? (
        <div>
          <p>User ID: {user.uid}</p>
          <p>Org ID: {orgId ? orgId : "No Org ID found"}</p>
          {orgData ? (
            <div>
              <p>Organization Name: {orgData.Name}</p>
              <p>Role: {orgData.role}</p>
            </div>
          ) : (
            <p>Loading organization data...</p>
          )}
        </div>
      ) : (
        <p>Please log in.</p>
      )}
    </div>
  );
};

export default Account;
