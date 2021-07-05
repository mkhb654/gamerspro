// import React, { useContext, useEffect, useState } from "react";
// import Link from "next/link";
// import Web3 from "web3";
// import { useRouter } from "next/router";

// import { Web3Context } from "../context/Web3Context";

// interface NavbarProps {}

// const Navbar: React.FC<NavbarProps> = ({}) => {
//   const router = useRouter();
//   const [web3State, setWeb3State] = useContext(Web3Context);
//   const [loading, setLoading] = useState(true);
//   // const { authenticated, account, web3 } = ;

//   useEffect(() => {
//     if (!web3State.authenticated) {
//       loadMetaMaskData();
//     }
//   }, []);

//   const loadMetaMaskData = async () => {
//       const web3stateobj: any = {};
//       if (typeof (window as any).ethereum) {
//           const ethWindow = (window as any).ethereum;

//       }
//   }