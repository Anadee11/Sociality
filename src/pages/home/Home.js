import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import Feed from "../../components/Feed/Feed.jsx"
import Sidebar from "../../components/sidebar/Sidebar.jsx"
import Rightbar from "../../components/rightbar/Rightbar.jsx"
import "./home.css"

export default function Home() {
  return (
      <>
<Topbar/>
<div className="homeContainer">
  <Sidebar/>
  <Feed/>
  <Rightbar/>
  </div>
</>
  )
}
