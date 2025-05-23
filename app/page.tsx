"use client";
import Image from "next/image";
import Link from "next/link";
import Card from "./components/card";
interface User {
  id: number;
  name: string;
}

export default function Home() {
  // const res = await fetch("https://jsonplaceholder.typicode.com/users");
  // const user: User[] = await res.json();
  return (
    <div>
      <h1>Users</h1>
      {/* <ul>
        {user.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul> */}
      <br></br>
      <Link href="/users">users</Link>
      <br />
      <Card />
    </div>
  );
}
