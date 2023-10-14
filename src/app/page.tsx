"use client"
import { useEffect, useState } from "react"
import liff from '@line/liff';

export default function Home() {
  useEffect(()=>{
    liff
    .init({
      liffId: "https://liff.line.me/2001152981-nlA2l2VJ"
    })
  },[])

  const login= ()=>{
    liff.login()
  }

  return (
    <main>
      <button onClick={login}>
        Login
      </button>
    </main>
  )
}
