import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import dayjs from "dayjs";
import Countdown from "react-countdown";
import { keepAwake, status } from "~/server/sleep";

export function loader() {
  keepAwake();
  return json(status);
}

export default function Index() {
  const s = useLoaderData<typeof loader>();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <em>Woke up {dayjs().diff(s.wokeUpAt, "seconds")} seconds ago.</em>
      <Countdown
        date={Date.now() + 10_000}
        renderer={({ seconds }) =>
          seconds ? (
            <h1>
              I will sleep in {seconds} seconds if I don&apos;t receive any
              request.
            </h1>
          ) : (
            <h1>I&apos;m asleep now. But I&apos;ll wake up if you refresh.</h1>
          )
        }
      ></Countdown>
    </div>
  );
}
