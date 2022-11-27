import React from 'react'
import "./Computer3d.scss"

export default function Computer3d() {
  return (
    <div className="Computer3d">
        
<div className="rotate left"></div>
<div className="rotate right"></div>
<div className="content">
  <input id="monitor" type="checkbox" checked="checked"/>
  <input id="floppydisk" type="radio" name="game" checked="checked"/>
  <input id="removedisk" type="radio" name="game"/>
  <input id="paused" type="checkbox"/>
  <div className="cuboid monitor"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid button">
    <div className="side">
      <label for="monitor"></label>
    </div>
    <div className="side"></div>
    <div className="side"></div>
    <div className="side"></div>
    <div className="side"></div>
    <div className="side"></div>
  </div>
  <div className="cuboid screen"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid glass"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid base top"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid base mid"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="column"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid base bot"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid pc"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid diskette-hole"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid diskette-box"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid diskette-box"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid floppy-5"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid floppy-5-hole"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid floppy-5-bar"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid floppy-3">
    <div className="side">
      <label for="removedisk"></label>
    </div>
    <div className="side"></div>
    <div className="side"></div>
    <div className="side"></div>
    <div className="side"></div>
    <div className="side"></div>
  </div>
  <div className="cuboid floppy-3-button"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid floppy-3-disc">
    <div className="side"></div>
    <div className="side"></div>
    <div className="side"></div>
    <div className="side"></div>
    <div className="side">
      <label for="floppydisk"></label>
    </div>
    <div className="side"></div>
  </div>
  <div className="cable"></div>
  <div className="cable"></div>
  <div className="cuboid mouse">
    <div className="side"></div>
    <div className="side"></div>
    <div className="side"></div>
    <div className="side"></div>
    <div className="side">
      <label for="paused"></label>
    </div>
    <div className="side"></div>
  </div>
  <div className="cuboid mouse-btn left"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid mouse-btn"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid keyboard"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-esc"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-f1"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-f2"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-f3"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-f4"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-f5"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-f6"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-f7"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-f8"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-f9"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-f10"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-f11"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-f12"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-ps"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-sl"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-pb"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-in"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-hm"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-pu"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-dl"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-ed"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-pd"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-al"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-ad"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-ar"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-au"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-nl"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-sh"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-as"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-da"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-9"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-8"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-7"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-6"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-5"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-4"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-3"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-2"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-1"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-0"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-d"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-pl"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-en"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-ns"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-n1"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-n2"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-n3"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-n4"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-n5"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-n6"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-n7"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-n8"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-n9"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-n0"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-nm"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-np"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-bs"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-tb"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-lq"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-lw"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-le"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-lr"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-lt"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-ly"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-lu"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-li"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-lo"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-lp"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-bkl"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-bkr"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-int"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-cp"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-la"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-ls"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-ld"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-lf"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-lg"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-lh"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-lj"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-lk"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-ll"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-nna"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-brl"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-brr"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-intr"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-shf"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-za"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-lx"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-lc"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-lv"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-lb"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-ln"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-lm"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-l-coma"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-l-dot"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-qst"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-shf2"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-dotcoma"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-ctrl"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-altl"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-spac"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-altr"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cuboid key k-ctrr"><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div><div className="side"></div></div>
  <div className="cable"></div>
  <div className="cable"></div>
  <div className="cable"></div>
</div>
    </div>
  )
}
