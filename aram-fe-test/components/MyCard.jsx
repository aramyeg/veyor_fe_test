import React from "react"
import Image from 'next/image'
import {MovableCardWrapper} from "react-trello/dist/styles/Base"

export default function MyCard({url, lastActivity, upcoming, reminder, notes, contacts, title}) {

  return (
    <MovableCardWrapper style={{
      display: 'flex',
      minWidth: '19rem',
      padding: '0.75rem',
      borderRadius: '0.25rem',
      backgroundColor: 'rgb(251, 250, 248)',
      flexDirection: 'column',
    }}>
      <div className="min-w-fit flex py-2 border-b border-neutral-400">
        <div>
          <svg width="52" height="52" viewBox="0 0 512 512">
            <path fill="#d85b53"
                  d="M408 64H104c-22.091 0-40 17.908-40 40v304c0 22.092 17.909 40 40 40h304c22.092 0 40-17.908 40-40V104c0-22.092-17.908-40-40-40zM304 368H144v-48h160v48zm64-88H144v-48h224v48zm0-88H144v-48h224v48z"
                  className="color000000 svgShape"/>
          </svg>
        </div>
        <div className="px-2">
          <div className="text-lg font-semibold">{title}</div>
          <div className="flex items-end">
            <svg width="15" height="15" viewBox="0 0 50 50">
              <ellipse cx="24" cy="24" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round"
                       strokeMiterlimit="10" strokeWidth="2" rx="14" ry="21"/>
              <path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"
                    strokeWidth="2"
                    d="M45 24a20.943 20.943 0 0 1-6.868 15.533S31 35 24 35 9.862 39.528 9.862 39.528A20.945 20.945 0 0 1 3 24c0-6.13 2.627-11.646 6.816-15.485C9.816 8.515 17 13 24 13s14.161-4.507 14.161-4.507A20.943 20.943 0 0 1 45 24z"/>
              <circle cx="24" cy="24" r="21" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round"
                      strokeMiterlimit="10" strokeWidth="2"/>
              <path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"
                    strokeWidth="2" d="M24 3v42M3 24h42"/>
            </svg>
            <a className="underline underline-offset-4 pl-1" href={url}>{url}</a></div>
        </div>
      </div>
      <div className="flex flex-col py-2">
        <div className="flex py-1">
          <div className="flex-auto w-24 text-zinc-400">Contacts</div>
          <div className="flex-auto w-48  space-y-2">
            <div className="flex items-center">
              <Image height='25rem' width='25rem' className="rounded-full w-4" src="/assets/hannah.jfif"/>
              <div className="pl-1">{contacts.hannah}</div>
            </div>
            <div className="flex items-center">
              <Image height='25rem' width='25rem' className="rounded-full w-4" src="/assets/jack.jpg"/>
              <div className="pl-1">{contacts.jack}</div>
            </div>
          </div>
        </div>
        <div className="flex py-1">
          <div className="flex-auto w-24 text-zinc-400">Last activity</div>
          <div className="flex-auto w-48">{lastActivity}</div>
        </div>
        <div className="flex py-1">
          <div className="flex-auto w-24 text-zinc-400">Upcoming</div>
          <div className="flex-auto w-48">{upcoming}</div>
        </div>
        <div className="flex py-1">
          <div className="flex-auto w-24 text-zinc-400">Reminder</div>
          <div className="flex-auto w-48">{reminder}</div>
        </div>
        <div className="flex py-1">
          <div className="flex-auto w-24 text-zinc-400">Notes</div>
          <div className="flex-auto w-48 truncate">{notes}</div>
        </div>
      </div>
    </MovableCardWrapper>
  )
}
