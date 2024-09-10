"use client";
import { NextPage } from "next";
import { useState } from "react";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  const [emails, setEmails] = useState<EmailProps[]>([]);
  const [status, setStatus] = useState<EmailResponse>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSend = async () => {
    setIsLoading(true);
    emails.forEach(async (email) => {
      try {
        const response = await fetch("/api/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(email),
        });
        const data = await response.json();
        setStatus(data);
      } catch (error) {
        console.error(error);
        setStatus({ success: [], failures: ["Failed to send emails"] });
      } finally {
        setEmails([]);
        setIsLoading(false);
      }
    });
  };

  return (
    <div>
      {status && (
        <div>
          {status.success && status.success.length > 0 && (
            <p>Success: {status.success.join(", ")}</p>
          )}
          {status.failures && status.failures.length > 0 && (
            <p>Failures: {status.failures.join(", ")}</p>
          )}
        </div>
      )}
      <button
        onClick={handleSend}
        disabled={isLoading}
        className="flex items-center justify-center bg-red-500 p-5 cursor-pointer"
      >
        {isLoading ? "Sending" : "Send mail"}
      </button>
    </div>
  );
};

export default Page;
