"use client";

import { useEffect, useState } from "react";

export default function TestSupabase() {
  const [result, setResult] = useState("Testing...");

  useEffect(() => {
    async function test() {
      const url = process.env.NEXT_PUBLIC_SUPABASE_URL;

      if (!url) {
        setResult("ERROR: Supabase URL is missing");
        return;
      }

      try {
        const response = await fetch(`${url}/rest/v1/`, {
          method: "GET",
          headers: {
            apikey: process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
          },
        });

        setResult(
          `Supabase responded. HTTP status: ${response.status}`
        );
      } catch (error) {
        setResult(`ERROR: ${error.message}`);
      }
    }

    test();
  }, []);

  return (
    <main style={{ padding: "30px" }}>
      <h1>WAR Supabase Test</h1>
      <p>{result}</p>
    </main>
  );
}
